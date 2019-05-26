/* JavaScript */

if (window.CustomEvent) {

  var event = new CustomEvent('customEvent', { detail: { data: 'data' } });

} else {

  var event = document.createEvent('CustomEvent');
  
  event.initCustomEvent('customEvent', true, true, { data: 'data' });

}

element.dispatchEvent(event);

// ############################################################

/* jQuery */

$(element).trigger('customEvent', { data: 'data' });
