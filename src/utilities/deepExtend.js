/* JavaScript */

var deepExtend = function(output) {

	output = output || {};

	for (var i = 1; i < arguments.length; i++) {

		var obj = arguments[i];

		if (!obj){

      continue;
      
		}

		for (var key in obj) {

			if (obj.hasOwnProperty(key)) {

				if (typeof obj[key] === 'object'){

					output[key] = deepExtend(output[key], obj[key]);

        } else{

          output[key] = obj[key];

        }

      }

    }

	}

  return output;

};

deepExtend({}, firstObject, secondObject);

// ############################################################

/* jQuery */

$.extend(true, {}, firstObject, secondObject);
