
function dropdown(select) {
  var selected = select.options[select.selectedIndex],
      eventText = selected.text.replace(' â†','')

  pageTracker._trackEvent('dropdown', 'click', eventText);

  if (selected.value.indexOf('.html') > -1 || selected.value.indexOf('http') > -1) {
    window.location = selected.value;
  }
}

setTimeout(function(){
  var body = document.querySelector('body');
  body.className = body.className + ' loaded';
}, 200);
