$(document).ready(function(){


    $('#pillBar').click(function(){
      $('.menuSlide').addClass('moved'); 
    });
    $('#closeMenu').click(function(){
      $('.menuSlide').removeClass('moved');
      $('.menuSlide').addClass('before'); 
    });

    $('a.js-scroll-trigger').click(function(){
      $('.menuSlide').removeClass('moved');
      $('.menuSlide').addClass('before'); 
    });

    // change menu on scroll

    $(function() {
      var header = $(".navBack");
    
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          if (scroll >= 50) {
              header.addClass("bg-black");
          } else {
              header.removeClass("bg-black");
          }
      });
    
  });
  
  });

  

  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    var menuHeight = $( "#fullMenu" ).height();
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top- menuHeight
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
       
      });
    }
  }
});
