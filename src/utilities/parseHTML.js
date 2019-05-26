/* JavaScript */

var parseHTML = function(content) {

  var tmp = document.implementation.createHTMLDocument();

  tmp.body.innerHTML = content;

  return tmp.body.children;

};

parseHTML(content);

// ############################################################

/* jQuery */

$.parseHTML(content);
