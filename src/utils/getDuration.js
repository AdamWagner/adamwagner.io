let globalSpeed = 1;

export default function getDuration(start, end) {
  let pixelsPerSecond = 675;
  let duration = Math.abs((end - start) / pixelsPerSecond);
  // set min value of .2
  duration = duration < 0.25 ? 0.25 : duration;
  // set max value of .5
  duration = duration > 0.5 ? 0.5 : duration;
  return duration * globalSpeed;
}
