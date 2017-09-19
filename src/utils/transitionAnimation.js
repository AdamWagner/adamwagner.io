export function transition (path, pageColor, image, imageContainer, reversed=true) {

  const tau = Math.PI * 2;
  const kappa = 0.551915024494;
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  let vw = canvas.width  = document.body.clientWidth;
  let vh = canvas.height = window.innerHeight;

  const tl = new TimelineMax({
    paused: true,
    onComplete,
    onReverseComplete,
    onStart,
    onUpdate
  });

  const ripple = {
    color: pageColor,
    alpha: 0,
    radius: 0,
    x: 0,
    y: 0,
  };

  const sprite = {
    buffer: document.createElement("canvas"),
    texture: image,
    origWidth: 1280,
    origHeight: 720,
    width: 1280,
    height: 720,
    x: 0,
    y: 0
  };


  //
  // Init
  // ============================================================================
  function init() {
    createAnimation(0, true); // args = progress, reversed
    onUpdate();
    tl.paused(false);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize);
  }

  //
  // ON UPDATE
  // ============================================================================
  function onUpdate() {

    clipSprite(sprite);

    context.clearRect(0, 0, vw, vh);
    context.globalAlpha = ripple.alpha;
    context.fillStyle = ripple.color;
    context.beginPath();
    context.arc(ripple.x, ripple.y, ripple.radius, 0, tau);
    context.fill();
    context.globalAlpha = 1;
    context.drawImage(sprite.buffer, sprite.x, sprite.y);
  }

  //
  // CLIP SPRITE
  // ============================================================================
  function clipSprite(sprite) {

    const canvas  = sprite.buffer;
    const context = canvas.getContext("2d");

    const sw = sprite.origWidth;
    const sh = sprite.origHeight;

    const scale = Math.max(sprite.width / sw, sprite.height / sh);

    canvas.width  = sprite.width;
    canvas.height = sprite.height;

    const dw = sw * scale;
    const dh = sh * scale;
    const dx = (sprite.width  - dw) / 2;
    const dy = (sprite.height - dh) / 2;

    context.drawImage(sprite.texture, 0, 0, sw, sh, dx, dy, dw, dh);
  }

  //
  // CREATE ANIMATION
  // ============================================================================
  function createAnimation(progress, reversed) {

    tl.seek(0).clear();

    const duration = 0.5;
    const ease = Sine.easeOut;

    const rect = imageContainer.getBoundingClientRect();

    const w = vw;
    const h = vh * 0.68;
    const x = w / 2;
    const y = h / 2;
    const w2 = rect.width  / 2;
    const h2 = rect.height / 2;

    sprite.x = rect.left;
    sprite.y = rect.top;
    sprite.width  = rect.width;
    sprite.height = rect.height;

    ripple.radius = Math.min(w2, h2);
    ripple.x = rect.left + w2;
    ripple.y = rect.top  + h2;

    const dx = x < vw / 2 ? vw - x : x;
    const dy = y < vh / 2 ? vh - y : y;
    const radius = Math.sqrt(dx * dx + dy * dy);
    const bezier1 = getBezier(sprite.x, sprite.y, 0, 0);
    const bezier2 = getBezier(ripple.x, ripple.y, x, y);

    tl.to(sprite, duration, { bezier: bezier1, width: w, height: h, ease }, 0)
      .to(ripple, duration, { bezier: bezier2, ease }, 0)
      .to(ripple, duration * 0.8, { alpha: 1, radius, ease }, 0)
      .progress(progress)
      .reversed(reversed);
  }

  //
  // GET BEZIER
  // ============================================================================
  function getBezier(x1, y1, x2, y2) {

    const p0 = { x: x1, y: y1 };
    const p1 = { x: x1, y: y1 };
    const p2 = { x: x2, y: y2 };
    const p3 = { x: x2, y: y2 };

    const dx = p3.x - p0.x;
    const dy = p3.y - p0.y;

    if (p3.y > p0.y) {

      p1.x = p0.x;
      p1.y = p0.y + (dy * kappa);
      p2.x = p3.x - (dx * kappa);
      p2.y = p3.y;

    } else {

      p1.x = p0.x + (dx * kappa);
      p1.y = p0.y;
      p2.x = p3.x;
      p2.y = p3.y - (dy * kappa);
    }

    return { values: [p0, p1, p2, p3], type: "cubic" };
  }

  //
  // ON RESIZE
  // ============================================================================
  function onResize() {

    const progress = tl.progress();
    const reversed = tl.reversed();

    vw = canvas.width  = document.body.clientWidth;
    vh = canvas.height = window.innerHeight;

    createAnimation(progress, reversed);
  }

  function onStart() {
    image.style.visibility  = "hidden";
    canvas.style.visibility = "visible";
  }

  function onComplete() {
      canvas.style.visibility = "hidden";
      window.___navigateTo(path);
  }

  function onReverseComplete() {
    image.style.visibility  = "visible";
    canvas.style.visibility = "hidden";
  }

  function toggleAnimation() {
    tl.reversed(!tl.reversed());
  }

  return {
    toggleAnimation,
    init
  }

}
