/* JavaScript */

Array.prototype.filter.call(element.parentNode.children, function(children){

  return children !== element;

});

// ############################################################

/* jQuery */

$(element).siblings();
