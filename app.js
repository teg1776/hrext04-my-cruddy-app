$(document).ready(function() {
// populate local storage items here
  for (var a = 0; a < localStorage.length; a++) {
    console.log(localStorage.key(a));
    console.log(localStorage.key(a).indexOf('_complete'));
    if((localStorage.key(a).indexOf('_complete') == -1)){

      var strikeout = null;
      if(localStorage.getItem(localStorage.key(a)+"_complete") == "true"){
        strikeout = "style='text-decoration:line-through;'";
      }

      let itemHtml = '<div class="display-item" data-storage-key="' + localStorage.key(a) + '"' + strikeout + '><button class="task_complete">Complete</button><span><b>' + localStorage.key(a) + '</b><span> ' + localStorage.getItem(localStorage.key(a)) + ' - ' +  localStorage.getItem(localStorage.key(a)+"_complete");
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

    console.log(inputKey, inputValue);

    localStorage.setItem(inputKey, inputValue);
    localStorage.setItem(inputKey+"_complete", false);

    // data-
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"><button class="task_complete">Complete</button> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + ' - ' +  localStorage.getItem(inputKey+"_complete") + '</div>';
    $(".display").prepend(itemHtml);

    $(".task_complete").on('click', function(){
      var _inputKey = $(this).closest('.display-item').attr('data-storage-key');
      $(this).closest('.display-item').attr('style', 'text-decoration: line-through;');
      console.log(_inputKey);
      localStorage.setItem(_inputKey+"_complete", true)
    });

  });

  $(".task_complete").on('click', function(){
    var _inputKey = $(this).closest('.display-item').attr('data-storage-key');
    $(this).closest('.display-item').attr('style', 'text-decoration: line-through;');
    console.log(_inputKey);
    localStorage.setItem(_inputKey+"_complete", true)
  });



   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".user-input-title").val("");
     $(".user-input-body").val("");
     $(".display").html("");
     for (var a = 0; a < localStorage.length; a++) {
    let itemHtml = '<div class="display-item" data-storage-key="' + localStorage.key(a) + '"><span><b>' + localStorage.key(a) + '</b><span> ' + localStorage.getItem(localStorage.key(a));
    $('.display').prepend(itemHtml);
  }
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});