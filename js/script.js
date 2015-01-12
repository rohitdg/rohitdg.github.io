$(document).ready(function(){
  // $(window).scroll(function() {
  // if ($(document).scrollTop() > 0) {
  //   alert('hello');
  //   });
  
  $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $(".top").addClass('scroll_up');
    $(".middle").addClass('scroll_up_middle')
  } else {
    $(".top").removeClass('scroll_up');
    $(".middle").removeClass('scroll_up_middle');
  }

  });


  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  });


  $(".project").mouseOver(function() {
    $(this).toggleClass('project_hover')
  });

});