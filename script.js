$(function(){
  $('.submit').on('click', function(){
    let dealTitle = $('.deal-input').val();
    let dealDefinition = $('.deal-textarea').val();
    const emptyList = $('.empty-list');

    if (dealTitle && dealDefinition) {
      emptyList.hide();

      let toDoItem = $('<li></li>');
      $(toDoItem).addClass('todo-list-item').prependTo('.todo-list');

      let toDoTitle = $('<div></div>');
      $(toDoTitle).addClass('item-title').appendTo(toDoItem);
  
      let toDoTitleContent = $('<span></span>');
      let deleteButton = $('<button></button>');
      let toggleButton = $('<button></button>');

      toDoTitleContent.addClass('item-title-content').text(dealTitle).appendTo(toDoTitle);
      deleteButton.addClass('btn delete-btn').appendTo(toDoTitle);
      toggleButton.addClass('btn toggle-btn').appendTo(toDoTitle);

      let toDoDescription = $('<div></div>');
      $(toDoDescription).addClass('item-description').text(dealDefinition).appendTo(toDoItem);

      $('.deal-input').val('');
      $('.deal-textarea').val('');
    } 
    else {
      alert('Заполните все поля ввода!');
    }

    $('.delete-btn').click(function(){
      $(this).parents('.todo-list-item').remove();
      if ($('.todo-list').children().length == 1){
        emptyList.show();
      }		
    });

  });
  
  $(document).on('click', '.toggle-btn', function(){
    $(this).toggleClass('toggle-btn-rotate');
    $(this).parents('.todo-list-item').children('.item-description').slideToggle();
  });

});