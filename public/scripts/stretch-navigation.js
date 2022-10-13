$(document).ready(function(){

  const navbtn = $(".tweetlink");
  const scrollbtn = $('#scrollbtn');
  

  navbtn.on("click", function() {
    $('.container').animate({
      scrollTop: $('.tweetform').offset().top
    }, 1000)

    $('#tweet-text').trigger("focus");
  })

  scrollbtn.on("click", function() {
    $('.container').animate({
      scrollTop: $('.tweetform').offset().top
    }, 1000)

    $('#tweet-text').trigger("focus");
  })

  $(window).scroll(function() {
      var scroll = $(window).scrollTop()
      if (scroll >= 500) {
        $('nav > div').addClass("nav-el-bg")
      }
      if (scroll <= 500) {
        $('nav > div').removeClass("nav-el-bg")
      }
  })

})

///references: https://www.abeautifulsite.net/posts/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
//https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll
