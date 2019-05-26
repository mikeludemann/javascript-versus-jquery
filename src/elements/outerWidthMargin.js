/* JavaScript */

function outerWidthMargin(element) {

  var width = element.offsetWidth;  
  var style = getComputedStyle(element);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  
  return width;
  
}

outerWidthMargin(element);

// ############################################################

/* jQuery */

$(element).outerWidth(true);
