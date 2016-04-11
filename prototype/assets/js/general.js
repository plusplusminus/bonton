$('button.base-finder__parent').on('click', function(e) {
  $(this).toggleClass("active"); //you can list several class names 
  e.preventDefault();
});