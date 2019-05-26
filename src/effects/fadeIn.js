/* JavaScript */

function fadeIn(element) {

	element.style.opacity = 0;

	var last = +new Date();

	var tick = function() {

		element.style.opacity = +element.style.opacity + (new Date() - last) / 400;

		last = +new Date();

		if (+element.style.opacity < 1) {

			(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);

		}

	};

	tick();

}

fadeIn(element);

// ############################################################

/* jQuery */

$(element).fadeIn();
