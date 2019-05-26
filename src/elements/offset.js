/* JavaScript */

var rect = element.getBoundingClientRect();

var top, 
left;

{
	top = rect.top + document.body.scrollTop,
	left = rect.left + document.body.scrollLeft
}

// ############################################################

/* jQuery */

$(element).offset();
