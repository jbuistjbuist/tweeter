$(document).ready(function(){

  const navbtn = $(".tweetlink");
  const scrollbtn = $('#scrollbtn');
  scrollbtn.hide();
  

  navbtn.on("click", function() {
    $('html, body').animate({
      scrollTop: $('.tweetform').offset().top - 400
    }, 0)

    $('#tweet-text').trigger("focus");
  })

  scrollbtn.on("click", function() {

    $('html, body').animate({
      scrollTop: $('.tweetform').offset().top - 400
    }, 0)

    $('#tweet-text').trigger("focus");

  })

  $(window).scroll(function() {
      var scroll = $(window).scrollTop()
      if (scroll >= 330) {
        $('.logo').addClass("nav-el-bg");
        navbtn.fadeOut(200);
        scrollbtn.fadeIn(100)
      }
      if (scroll < 330) {
        $('.logo').removeClass("nav-el-bg");
        navbtn.fadeIn(200);
        scrollbtn.fadeOut(200);
      }
  })

})

///references: https://www.abeautifulsite.net/posts/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
//https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll
