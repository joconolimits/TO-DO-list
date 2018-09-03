function renderList(){
  var todos = getTodos();
  var items = {};
  switch (filter) {
    case 0: 
        Object.keys(todos).map(function(key, index) {
          if (todos[key].status == 0) {
            items[key] = todos[key];
          }
      });
      break;
    case 1:
      Object.keys(todos).map(function(key, index) {
        if (todos[key].status == 1) {
          items[key] = todos[key];
        }
     });
     break;
     default:
     items = todos;
     break;
  }
  $('#active_list').html('');
  $('#complete_list').html('');
  for(var key in items) {
    renderItem(key, todos[key]);
  }
}
/**
 * renders Item element in the list
 * @param {*number} key 
 * @param {*object} item 
 */
function renderItem(key, item) {
	var htmlArr = [];
	htmlArr.push('<li id="item_' + key +'">');
	htmlArr.push('<input class="todo-checkbox" type="checkbox" id="ck_' + key +'"' + (item.status === 1 ? 'checked': '') + '>');
	htmlArr.push('<label for="ck_' + key +'"></label>');
	htmlArr.push('<span class="todo-text" id="ed_' + key +'">' + item.value + '</span>');
	htmlArr.push('<span class="delete" id="del_' + key +'"></span>');
	htmlArr.push('</li>');
	if (item.status === 0) {
		$('#active_list').append(htmlArr.join(''));
	} else {
		$('#complete_list').append(htmlArr.join(''));
	}
  
}