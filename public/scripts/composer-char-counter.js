$(document).ready(function() {

  const form = $('#tweet-text');

  //on an input event to the form, count the length of the input and place it in the html of the character counter.
  //if the length is over 140, add the class 'red' (to style with css), and return a negative number

  form.on('input', function() {
    let twtLength = $(this).val().length;
    let counter = $(this).parent().find(".counter");

    if (twtLength <= 140) {
      $(counter).removeClass("red").html(140 - twtLength);
    }
    if (twtLength > 140) {
      $(counter).addClass("red").html(140 - twtLength);
    }

  });
});