if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event) {
    document.querySelector('#alpha').innerText = event.alpha ? Math.round(event.alpha) + "\u00B0" : '-';
    document.querySelector('#compassHeading').innerText = event.compassHeading ? Math.round(event.compassHeading) + "\u00B0" : '-';   
    document.querySelector('#webkitCompassHeading').innerText = event.webkitCompassHeading ? Math.round(event.webkitCompassHeading) + "\u00B0" : '-';       
    document.querySelector('#compassAccuracy').innerText = event.compassAccuracy ? Math.round(event.compassAccuracy) : '-';           
    document.querySelector('#webkitCompassAccuracy').innerText = event.webkitCompassAccuracy ? Math.round(event.webkitCompassAccuracy) : '-';               
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
