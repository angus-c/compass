if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event) {
  	var alpha = event.compassHeading || event.webkitCompassHeading || event.alpha || 0;
    document.querySelector('#alpha').innerText = Math.round(alpha) + "'";
  }, false);
} else {
  alert('deviceorientation not supported in ' + navigator.userAgent)
}
