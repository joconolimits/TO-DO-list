/**
 * get items from Local sotrage
 */
var getTodos = function(){
  return JSON.parse(localStorage.getItem('todos'));
}
/**
 * set items in Local sotrage
 */
var setTodos = function(todos){
  localStorage.setItem('todos', JSON.stringify(todos));
}
/**
 * Switch span to Input field
 * @param {*} el 
 */
var switchToInput = function (el) {
  var $input = $("<input>", {
      val: $(el).text(),
      type: "text"
  });
  $input.addClass("todo-input");
  $input.attr('id', el.id);
  $(el).replaceWith($input);
  $input.on("blur", switchToSpan);
  $input.select();
};
/**
 * switch element back to span
 */
var switchToSpan = function () {
  var $span = $("<span>", {
      text: $(this).val()
  });
  $span.addClass("todo-text");
  $span.attr('id', this.id);
  $(this).replaceWith($span);
}
/**
 * Add item to the List
 */
var addItem = function(){
	var val = document.getElementById("new_todo").value;
	if(val === '') {
	  return;
	}
	var item = {
    'value': val,
    'status': 0,
  }
  var todos = getTodos();
  var keys = Object.keys(todos);
  var lastKey = Math.max(...(keys.length ? keys : [0]));
  todos[lastKey + 1] = item;
  setTodos(todos);
  renderItem(lastKey + 1, item);
  document.getElementById("new_todo").value = '';
}