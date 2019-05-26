/* JavaScript */

if (element.classList){

	element.classList.add(className);

} else{

	element.className += ' ' + className;

}

// ############################################################

/* jQuery */

$(element).addClass(className);
