/* JavaScript */

if (element.classList) {

	element.classList.toggle(className);

} else {

	var allClass = element.className.split(' ');
	var indicator = allClass.indexOf(className);

	if (indicator >= 0){

    allClass.splice(indicator, 1);
    
	} else{

    allClass.push(className);
    
	}

	element.className = allClass.join(' ');

}

// ############################################################

/* jQuery */

$(element).toggleClass(className);
