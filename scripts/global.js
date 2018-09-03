$(document).ready(function(){
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', '{}');
  } else {
  
    renderList();
  }
});
var filter = 2;