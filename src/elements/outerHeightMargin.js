/* JavaScript */

function outerHeightMargin(element) {

  var height = element.offsetHeight;  
  var style = getComputedStyle(element);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  
  return height;
  
}

outerHeightMargin(element);

// ############################################################

/* jQuery */

$(element).outerHeight(true);
