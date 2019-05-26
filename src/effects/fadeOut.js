/* JavaScript */

function fadeOut(element) {

	element.style.opacity = 1;

	var last = +new Date();

	var tick = function() {

		element.style.opacity = +element.style.opacity + (new Date() - last) / 400;

		last = +new Date();

		if (+element.style.opacity < 0) {

			(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);

		}

	};

	tick();

}

fadeOut(element);

// ############################################################

/* jQuery */

$(element).fadeOut();
