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

  $('#play').click(function() {
    setTimeout(function(){
      $('#play').addClass('design__video-btn--hide');
    }, 800);
  });
});

function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoiFrame', {
  playerVars: { 'autoplay': 0, 'showinfo': 0, 'rel': 0},
  videoId: 'jRcfE2xxSAw'
  });
};