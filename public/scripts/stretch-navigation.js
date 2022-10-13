$(document).ready(function() {

  const navbtn = $(".tweetlink");
  const scrollbtn = $('#scrollbtn');
  const newTwt =   $('.new-tweet');

  //on page load,  hide the scroll button and compose tweet buttons
  scrollbtn.hide();
  newTwt.hide();

  //adding a spinning interaction to the navbar button icon when hovered over.
  navbtn.hover(function() {
    $(this).find('i').addClass("hovered");
  },
  
  function() {
    $(this).find('i').removeClass("hovered");
  });
  

  //if you are near the top of the page and click the nav compose button, it will toggle the compose tweet form and focus it if shown.
  //if you are scrolled down and press the button, it will always open (not toggle) the compose tweet form and focus it.

  navbtn.on("click", function() {

    $('html, body').animate({
      scrollTop: $('.tweetform').offset().top - 400
    }, 0);

    if (window.scrollY < 250) {
      newTwt.slideToggle();
    }  else {
      newTwt.slideDown();
    }

    $('#tweet-text').trigger("focus");

  });

  //when you click the scroll button, it will scroll near the top of the page and auto-focus the compose tweet form

  scrollbtn.on("click", function() {

    $('html, body').animate({
      scrollTop: $('.tweetform').offset().top - 400
    }, 0);

    newTwt.slideDown();

    $('#tweet-text').trigger("focus");

  });


  //actions for window scroll

  $(window).scroll(function() {

    let scroll = $(window).scrollTop();

    //as you scroll down enough (if not in desktop mode), the appearance of the logo will change by adding a class
    //the nav compose button will dissapear, and the scroll button will appear on the page
    if (scroll >= 330 && window.innerWidth < 1024) {
      $('.logo').addClass("nav-el-bg");
      navbtn.fadeOut(200);
      scrollbtn.fadeIn(100);
    }

    //as you scroll near the top (if not in desktop mode), the navbar compose button will reappear, the appearance of the logo will change back,
    //and the scroll button will dissapear from view
    if (scroll < 330 && window.innerWidth < 1024) {
      $('.logo').removeClass("nav-el-bg");
      navbtn.fadeIn(200);
      scrollbtn.fadeOut(200);
    }

    //if in desktop mode, the nav button should always be visible and the scroll button should never be visible

    if (window.innerWidth > 1024) {
      navbtn.fadeIn(200);
      scrollbtn.fadeOut(200);
    }
  });

});

///references: https://www.abeautifulsite.net/posts/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
//https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll
