/* JavaScript */

if (element.classList){

	element.classList.remove(className);

} else{

	element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

}

// ############################################################

/* jQuery */

$(element).removeClass(className);
