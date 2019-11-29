$(function() {

  $(function() {
		$('.preloader').delay(1500).fadeOut('slow', function(){
      $(this).attr('style', 'display: none !important');
    });
  });
  
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

  baguetteBox.run('.work__gallery');

  $(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.scroll__top').addClass("active");
		} else {
			$('.scroll__top').removeClass("active");
		};
	});

	$('.scroll__top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});

function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoiFrame', {
  playerVars: { 'autoplay': 0, 'showinfo': 0, 'rel': 0, 'origin':'https://neuroticoutsider.github.io'},
  videoId: 'jRcfE2xxSAw'
  });
};