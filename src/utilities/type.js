/* JavaScript */

Object.prototype.toString.call(object).replace(/^\[object (.+)\]$/, '$1').toLowerCase();

// ############################################################

/* jQuery */

$.type(object);
