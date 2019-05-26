/* JavaScript */

var request = new XMLHttpRequest();

request.open('POST', '/path/to/the/url', true);

request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

request.send(data);

// ############################################################

/* jQuery */

$.ajax({
  type: 'POST',
  url: '/path/to/the/url',
  data: data
});