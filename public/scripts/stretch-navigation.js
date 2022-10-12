$(document).ready(function(){

  const navbtn = $(".tweetlink");
  

  navbtn.on("click", function() {
    $('.container').animate({
      scrollTop: $('.tweetform').offset().top
    }, 1000)

    $('#tweet-text').trigger("focus");
  })

})

///reference: https://www.abeautifulsite.net/posts/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
