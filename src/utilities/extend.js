/* JavaScript */

var extend = function(output) {

  output = output || {};

  for (var i = 1; i < arguments.length; i++) {

    if (!arguments[i]){

      continue;

    }

    for (var key in arguments[i]) {

      if (arguments[i].hasOwnProperty(key)){

        output[key] = arguments[i][key];

      }

    }

  }

  return output;

};

extend({}, firstObject, secondObject);

// ############################################################

/* jQuery */

$.extend({}, firstObject, secondObject);
