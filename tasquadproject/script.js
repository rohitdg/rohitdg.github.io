$(document).ready(function(){

  $(".btn-add").click(function(){
    var task = $(".task-entry-box").val();
    // $('input[type=checkbox]').each(function() { 
    //     $(this).checked = false; 
    // });
    
    var boxes = $('input[important]:checked');
    var boxes = $('input[urgent]:checked');
    if(task.length==0) {
      alert("Oops! You seem to have entered an empty task!");
    } else {
      
      $(".task-entry-box").val("");
      if ($("#important").is(":checked") && $("#urgent").is(":checked")) {
        $(".task-list-1").append('<li class="li-elements<label class="text"><input type="checkbox" value="" class="checkbox_custom">  '  + task + '<button type="button" class="btn btn-default delete-button">Delete</button> </label> </li>');  
      } else if($("#important").not(":checked") && $("#urgent").is(":checked")) {
        $(".task-list-2").append('<li class="li-elements"><label class="text"><input type="checkbox" value="" class="checkbox_custom">  '  + task + '<button type="button" class="btn btn-default delete-button ">Delete</button> </label> </li>')  
      } else if ($("#important").is(":checked") && $("#urgent").not(":checked")) {
        $(".task-list-3").append('<li class="li-elements"><label class="text"><input type="checkbox" value="" class="checkbox_custom">  '  + task + '<button type="button" class="btn btn-default delete-button">Delete</button> </label></li>')  
      } else {
        $(".task-list-4").append('<li class="li-elements"><label class="text"><input type="checkbox" value="" class="checkbox_custom">  '  + task + '<button type="button" class="btn btn-default delete-button">Delete</button> </label></li>')  
      };
      
    };
    $('input[type=checkbox]').each(function() { 
        this.checked = false; 
    }); 
  });


  $("ul").on ('click', 'label',  function() {
    $(this).toggleClass('striked');
    
  }); 



  // $("ul label").mouseover(function() {
  //   $(this).siblings('.delete-button').show();
  // });

  $("ul").on('mouseover', 'label', function() {
    $(this).children('.delete-button').css('visibility', 'visible');
  });

   $("ul").on('mouseleave', 'label', function() {
    $(this).children('.delete-button').css('visibility', 'hidden');
  });


  $("label>button").click(function(){
    console.log("test");
  }); 

  // $('.li-elements').hover(function(){
  //   // $(this).child('.delete-button').css('visibility', 'visible');  
  //   alert("hello");

  // });

  // $(".task").click(function () {
  //   $(this).css('visibility', 'visible');
  // });


});