$(document).ready(function() {


	new TypeIt('.type-it', {
    strings: ["HTML", "CSS", "JavaScript", "Python", "Ruby on Rails"],
    speed: 100,
    breakLines: false,
    autoStart: false,
    loop: true,
    nextStringDelay: 2200
  });


	$(".learn-more").click(function() {
		$('html,body').animate({
			scrollTop: $(".about").offset().top
		}, 800);
	});


  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scroll-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });


});

