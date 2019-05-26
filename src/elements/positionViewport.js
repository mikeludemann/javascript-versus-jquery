/* JavaScript */

element.getBoundingClientRect();

// ############################################################

/* jQuery */

var offset = element.offset();

var top,
left;

{
	top = offset.top - document.body.scrollTop,
	left = offset.left - document.body.scrollLeft
}
