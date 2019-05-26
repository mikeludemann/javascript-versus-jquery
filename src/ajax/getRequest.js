/* JavaScript */

var request = new XMLHttpRequest();

request.open('GET', '/path/to/the/url', true);

request.onload = function() {

  if (request.status >= 200 && request.status < 400) {
    
    var response = request.responseText;

    document.getElementsByTagName("body")[0].innerHTML = response;

  } else {

    // ..

  }

};

request.onerror = function() {
  
  // ..

};

request.send();

// ############################################################

/* jQuery */

$.ajax({
  type: 'GET',
  url: '/path/to/the/url',

  success: function(response) {

  },
  error: function() {

  }

});