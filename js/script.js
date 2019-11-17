$(function() {
  $('.navbar-toggler').click(function(){
    var menuBtn = $('.navbar-toggler .fa'),
        body = $('body');

    $(this).toggleClass('clicked');

    if ($(this).hasClass('clicked')) {
      menuBtn.removeClass('fa-bars');
      menuBtn.addClass('fa-times');
      body.addClass('bg-dark');
    } else {
      menuBtn.removeClass('fa-times');
      menuBtn.addClass('fa-bars');
      body.removeClass('bg-dark');
    }
  });
});