import { TweenMax, Bezier, Sine} from "gsap";
import { navigateTo } from "gatsby-link"

export function transition (path='/', pageColor='#96D2E0', image=null, imageContainer=null, boundingBox=null, reversed=false) {

  const tau = Math.PI * 2;
  const kappa = 0.551915024494;
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  let vw = canvas.width  = document.body.clientWidth;
  let vh = canvas.height = window.innerHeight;

  const tl = new TimelineMax({
    paused: true,
    onComplete,
    onStart,
    onUpdate
  });

  const ripple = {
    color: pageColor,
    alpha: 0.3,
    radius: 0,
    x: 0,
    y: 0,
  };

  console.log({
    image: image,
    boundingBox: boundingBox,
    reversed: reversed,
    imageContainer: imageContainer
  });

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
    createAnimation(0, reversed); // args = progress, reversed
    onUpdate();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize);
  }

  function setBoundingBox(boundingBox) {
    boundingBox = boundingBox
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
    const rect = boundingBox || imageContainer.getBoundingClientRect();

    let w = vw;
    let h = vh * 0.68;
    const x = w / 2;
    const y = h / 2;
    const w2 = rect.width  / 2;
    const h2 = rect.height / 2;

    sprite.x = rect.left;
    sprite.y = rect.top;
    sprite.width  = reversed ? w : rect.width;
    sprite.height = reversed ? h : rect.height;

    ripple.radius = Math.min(w2, h2);
    ripple.x = reversed ? x : rect.left + w2;
    ripple.y = reversed ? y : rect.top  + h2;

    const dx = x < vw / 2 ? vw - x : x;
    const dy = y < vh / 2 ? vh - y : y;
    let radius = Math.sqrt(dx * dx + dy * dy);
    const bezier1 = getBezier(sprite.x, sprite.y, 0, 0);
    const bezier2 = getBezier(ripple.x, ripple.y, x, y);

    if (reversed) {
      // swap radius start and end sizes
      // [radius, ripple.radius] = [ripple.radius, radius]
      // set target w, h to original bounding rect
      w = rect.width
      h = rect.height
    }

    tl.to(sprite, duration, { bezier: bezier1, width: w, height: h, ease }, 0)
      .to(ripple, duration, { bezier: bezier2, ease }, 0)
      .to(ripple, duration * 0.8, { alpha: 1, radius, ease }, 0)
      .progress(progress)
  }

  //
  // GET BEZIER
  // ============================================================================
  function getBezier(x1, y1, x2, y2) {

    // if reversed, swap start and end points
    if (reversed) {
      [x1, x2, y1, y2] = [x2, x1, y2, y1]
    }

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

    vw = canvas.width  = document.body.clientWidth;
    vh = canvas.height = window.innerHeight;

    createAnimation(progress, reversed);
  }

  function onStart() {
    image.style.visibility  = "hidden";
    TweenMax.to(canvas, 0, {autoAlpha: 1})
  }

  function onComplete() {
      reversed ? window.history.back() : navigateTo(path);
      if (reversed) {
        // prevents flicker during detail > home
        TweenMax.to(canvas, 0.2, {autoAlpha: 0})
      } else {
        // prevents flicker during home > detail. Odd.
        canvas.style.visibility = 'hidden'
      }
  }

  function clean() {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("scroll", onResize);
  }

  function toggleAnimation() {
    console.log('toggled');
    tl.play()
  }

  return {
    init,
    toggleAnimation,
    clean
  }

}
