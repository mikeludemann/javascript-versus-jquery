/* JavaScript */

var event = document.createEvent('HTMLEvents');

event.initEvent('change', true, false);

element.dispatchEvent(event);

// ############################################################

/* jQuery */

$(element).trigger('change');
