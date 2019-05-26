/* JavaScript */

var elements = document.querySelectorAll(selector);

Array.prototype.filter.call(elements, filterFunction);

// ############################################################

/* jQuery */

$(selector).filter(filterFunction);
