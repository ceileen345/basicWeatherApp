var ipAddress = new XMLHttpRequest();
    ipAddress.open('GET', 'https://api.ipify.org');
    ipAddress.send(null);
ipAddress.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
 // status 200 is a successful return.
  if (ipAddress.readyState === DONE) {
    if (ipAddress.status >= 200 && ipAddress.status <= 299) 
      document.getElementById("IP").innerHTML = ipAddress.responseText; // 'This is the returned text.'
    }
  };
