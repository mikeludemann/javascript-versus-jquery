/* JavaScript */

if (element.classList){
  
  element.classList.contains(className);
  
} else{

  new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
  
}

// ############################################################

/* jQuery */

$(element).hasClass(className);
