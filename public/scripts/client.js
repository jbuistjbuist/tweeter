
$(document).ready(function() {

  $("aside").hide(); //hide error message on load

  const createTweetElement = function(tweetData) { //function to create a new tweet element with the tweet data

    let time = timeago.format(tweetData.created_at);
    
    let $tweet = $('<article><header class="tweetheader"></header><p></p><footer></footer></article>');

    $tweet.children('p').text(tweetData.content.text); //use 'text' to avoid cross scripting

    $tweet.children('.tweetheader').append(`<div><img src="${tweetData.user.avatars}" alt="avatar"><p>${tweetData.user.name}
      </p></div><p>${tweetData.user.handle}</p>`);

    $tweet.children('footer').append(`<p>${time}</p>
      <div><i class="fa-solid fa-flag flag"></i><i class="fa-solid fa-retweet retweet"></i>
      <i class="fa-solid fa-heart heart"></i></div>`);
    
    return $tweet;
  };

  //takes in an array of tweet objects and converts addends them to the container for the tweets
  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      let $el = createTweetElement(tweet);
      $('.tweetlist').prepend($el);
    });
  };

  //getts the tweets from the server, or console.logs an error message
  const loadTweets = function() {
    $.get('/tweets')
      .then((data) => renderTweets(data))
      .catch((error) => console.log(error));
  };

  loadTweets(); //invoking this to load tweets on page load

  $('.tweetform').submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    const textLength = $('#tweet-text').val().length;

    //check text length. if it is zero, prompt the user with an error message without sending the data to the server
    if (!textLength) {
      $("aside p").text("Please fill out the form to submit a tweet!");
      $("aside").slideDown(200);
      return;
    }

    //if text length (original not serialized) is over the limit, prompt user with error message
    if (textLength > 140) {
      $("aside p").text("Your tweet exceeds 140 characters.");
      $("aside").slideDown(200);
      return;
    }

    //on successful submission, hide the error message if shown. then reset the form, reset the character count to 140,
   
    $("aside").hide(200);
    $(this).trigger('reset');
    $(this).find('output').html('140');

    //send tweet to server, wait for it to finish, then append the new tweet to the
    //top of the tweets container (it will be last object in the array)

    $.post('/tweets', data).then(() => {
      $.get('/tweets').then((data) => {
        let $tweet = createTweetElement(data[data.length - 1]);
        $('.tweetlist').prepend($tweet);
      }).catch((error) => console.log(error));
    });

  });

});
