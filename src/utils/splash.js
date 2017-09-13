function createCanvasElement (width, height, insertAfter) {
  // Creates a scaled-up canvas based on the device's
  // resolution, then displays it properly using styles
  function createHDCanvas (ratio) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // Creates a dummy canvas to test device's pixel ratio
    ratio = (function () {
      var ctx = document.createElement('canvas').getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      var bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;
      return dpr / bsr;
    })();

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    return canvas;
  } // end createCanvas

  // Returns mouse coordinates that are
  // relative to the canvas, i.e. useful
  var relativeMouseCoords = function (event) {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var currentElement = document.body;

    do {
      totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
      totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
      currentElement = currentElement.offsetParent;
    } while (currentElement);

    console.log(totalOffsetX, totalOffsetY);

    var canvasX = event.pageX + totalOffsetX;
    var canvasY = event.pageY + totalOffsetY;

    return {
      x: canvasX,
      y: canvasY
    };
  }; // end relativeMouseCoords

  var canvas = createHDCanvas();
  canvas.getCoords = relativeMouseCoords;

  if (insertAfter) insertAfter.parentNode.insertBefore(canvas, insertAfter.nextSibling);
  else document.body.appendChild(canvas);

  return canvas;
}; // end createCanvasElement


var ripple = (function() {
  var batch = [];

  function tick () {
    // increment radius step:
    batch.forEach(function (circle) { circle.radius += rippleSpeed; });

    // drawing step:
    // console.log('drawing bg');
    // ctx.fillStyle = 'rgba(0,0,0,0.1)'
    // ctx.fillRect(0, 0, windowWidth, windowHeight);

    batch.forEach(function (circle) {
      ctx.fillStyle = 'rgba(224, 89, 82,' + (1 - circle.radius / maxRadius) * 2 + ')';
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // remove finished animations step:
    batch = batch.filter(function (circle) {
      return circle.radius < maxRadius;
    });

    if (batch.length) {
      requestAnimationFrame(tick);
    } else {
      console.log('done');
    }
  }

  return function (e) {
    var circle;
    e = e || window.event;
    circle = canvas.getCoords(e);
    circle.radius = 0;
    if (batch.push(circle) === 1) requestAnimationFrame(tick);
  };
})();

var windowHeight = 2806
var windowWidth = document.body.offsetWidth;
var maxRadius = Math.max(windowWidth, windowHeight);
var rippleSpeed = maxRadius / 35;
var canvas = createCanvasElement(windowWidth, windowHeight);
var ctx = canvas.getContext('2d');

export default ripple;
