import hexToRgbA from '../utils/hexRgba'

export default function ripple(event, duration, color) {
  // START CANVAS SPLASH
  var body   = document.body;
  var canvas = document.createElement("canvas");
  var ctx    = canvas.getContext("2d");
  var piTwo  = Math.PI * 2;

  // Viewport
  var vw = canvas.width  = window.innerWidth;
  var vh = canvas.height = window.innerHeight;

  // document.addEventListener("click", createRipple);
  // window.addEventListener("resize", onResize);

  console.log('creating ripple');
  // Exit if target is the canvas. That means it's still active.
  if (event.target === canvas) return;

  body.appendChild(canvas);

  // Event coords
  var x = event.clientX;
  var y = event.clientY;

  // Delta - difference between event and farthest corner
  var dx = x < vw / 2 ? vw - x : x;
  var dy = y < vh / 2 ? vh - y : y;

  var radius = Math.sqrt(dx * dx + dy * dy);

  var ripple = {
    alpha: 0,
    radius: 0,
    x: x,
    y: y
  };

  var tl = new TimelineMax({ onUpdate: drawRipple, onComplete: removeCanvas })
    .to(ripple, (duration), { alpha: 1, radius: radius })
    .to(ripple, 0.3, { alpha: 0 }, "+=0.2");

  let hex = hexToRgbA(color).slice(0,-2)
  console.log(hex);

  function drawRipple() {
    ctx.clearRect(0, 0, vw, vh);
    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, piTwo, false);
    ctx.fillStyle = hex + ripple.alpha + ")";
    ctx.fill();
  }

  function removeCanvas() {
    body.removeChild(canvas);
  }

  function onResize() {
    vw = canvas.width  = window.innerWidth;
    vh = canvas.height = window.innerHeight;
  }
  // END CANVAS SPLASH
}
