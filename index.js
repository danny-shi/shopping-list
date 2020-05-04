/* 
1. Able to add items through "add item" button or "return key".
2. Able to check and uncheck by clicking the check button. 
3. Permanently remove items on clicking "delete".
*/

//Adding items 
// If you enter a new item, on "add item" or "return" key, creates a new item that can be checked or deleted. 
$('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let listItem = $(event.currentTarget).find('#shopping-list-entry');
     $('.shopping-list').append(`<li>
          <span class="shopping-item">${listItem.val()}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
      $('#shopping-list-entry').val("");
        
    
    
  });
  
  //Checking items (strikethrough)
  //If you click the check button, strikethrough that item. 
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  
  //Deleting items
  // On the event that someone clicks the delete button -> remove item using .remove().
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(event.target).closest('li').remove();
  });