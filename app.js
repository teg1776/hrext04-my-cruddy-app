$(document).ready(function() {
// populate local storage items here
  for (var a = 0; a < localStorage.length; a++) {
    if((localStorage.key(a).indexOf('_complete') === -1)){

      var strikeout = null;
      if(localStorage.getItem(localStorage.key(a)+"_complete") == "true"){
        strikeout = "style='text-decoration:line-through;'";
      }

      let itemHtml = '<div class="display-item" data-storage-key="' + localStorage.key(a) + '"' + strikeout + '><button class="task_complete">Complete</button><span><b>' + localStorage.key(a) + '</b><span> ' + localStorage.getItem(localStorage.key(a));
      $('.display').prepend(itemHtml);
    }
  }

  $(".add-text-btn").on("click", function(){

    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");


    localStorage.setItem(inputKey, inputValue);
    localStorage.setItem(inputKey+"_complete", false);

    // data-
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"><button class="task_complete">Complete</button><span><b>' + inputKey + '</b><span> ' +  localStorage.getItem(inputKey) + '</div>';
    $(".display").prepend(itemHtml);

    $(".task_complete").on('click', function(){
      var _inputKey = $(this).closest('.display-item').attr('data-storage-key');
      $(this).closest('.display-item').attr('style', 'text-decoration: line-through;');
      localStorage.setItem(_inputKey+"_complete", true)
    });

  });

  $(".task_complete").on('click', function(){
    var _inputKey = $(this).closest('.display-item').attr('data-storage-key');
    $(this).closest('.display-item').attr('style', 'text-decoration: line-through;');
    localStorage.setItem(_inputKey+"_complete", true)
  });

  $(".clearBtn").on('click', function(){ 
    $(".display").html("");
  });
   
   



});