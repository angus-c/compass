if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event) {
    document.querySelector('#alpha').innerText = Math.round(event.alpha) + "\u00B0";
    document.querySelector('#compassHeading').innerText = Math.round(event.compassHeading || 0) + "\u00B0";   
    document.querySelector('#webkitCompassHeading').innerText = Math.round(event.webkitCompassHeading || 0) + "\u00B0";       
    document.querySelector('#compassAccuracy').innerText = Math.round(event.compassAccuracy || 0);           
    document.querySelector('#webkitCompassAccuracy').innerText = Math.round(event.webkitCompassAccuracy || 0);               
  }, false);
} else {
  alert('deviceorientation not supported in ' + navigator.userAgent)
}

if (!('oncompassneedscalibration' in window)) {
  // oh nos
} else {
  window.addEventListener('compassneedscalibration', function(event) {
    alert('Compass needs calibrating! Wave your device in a figure-eight motion');
  });
}  
