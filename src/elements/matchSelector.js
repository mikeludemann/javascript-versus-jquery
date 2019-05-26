/* JavaScript */

var matches = function(element, selector) {

  return (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, selector);

};

matches(element, selector);

// ############################################################

/* jQuery */

$(element).is($(secondElement));
