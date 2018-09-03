/**
 * check input on keyUp and add item on enter key
 */
$(document).on('keyup', '#new_todo', function(e){
  if (this.value !== '') {
    $('#new_todo').toggleClass('active', true);
    $('#addItem').toggleClass('active', true);
  } else {
    $('#new_todo').toggleClass('active', false);
    $('#addItem').toggleClass('active', false);
  }
  if(e.keyCode == 13)  // the enter key code
  {
    addItem(); 
  }
});
/**
 * Add item to the list
 */
$(document).on('click', '#addItem', function(){
  addItem();
}); 
/**
 * Select/Deselect all items
 */
$(document).on('click', '#all', function(){
   var checked = parseInt($(this).attr('isChecked'));
  var todos = getTodos();
  for (var key in todos) {
    todos[key].status = checked === 0 ? 1 : 0;
  }
   $(this).attr('isChecked', checked === 0 ? 1 : 0);
  setTodos(todos);
  renderList();
});
/**
 * Set item as completed
 */
$(document).on('click', '.todo-checkbox', function(){
  var todos = getTodos();
  var key = this.id.split('_')[1];
  todos[key].status = todos[key].status === 0 ?  1 : 0;
  setTodos(todos);
  renderList();
});
/**
 *  switch item to input, in order to edit
 */
$(document).on('click', '.todo-text', function(){
  switchToInput(this);
});
/**
 * Edit Item value
 */
$(document).on('keyup', '.todo-input', function(){
  var todos = getTodos();
  var key = this.id.split('_')[1];
  todos[key].value = this.value;
  setTodos(todos);
});
/**
 * Delete Item from the list
 */
$(document).on('click', '.delete', function(){
  var todos = getTodos();
  var key = this.id.split('_')[1];
  delete todos[key];
  setTodos(todos);
  renderList();
});
/**
 * filter list Items by status
 */
$(document).on('click', '.filter', function(){
  $('.filter').each(function(e){
    $(this).toggleClass('underline', false);
  })
  $(this).toggleClass('underline', true);
  filter = parseInt(this.id.split('_')[1]);
  renderList();
});