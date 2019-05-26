/* JavaScript */

var request = new XMLHttpRequest();

request.open('GET', '/path/to/the/url', true);

request.onload = function() {

  if (request.status >= 200 && request.status < 400) {

    var data = JSON.parse(request.responseText);

    document.getElementsByTagName("body")[0].innerHTML = data;

  } else {

    // ..

  }

};

request.onerror = function() {
  // ...
};

request.send();

// ############################################################

/* jQuery */

$.getJSON('/path/to/the/url', function(data) {

  $("body").html(data);

});