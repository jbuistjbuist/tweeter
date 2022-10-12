/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {


  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweetData) {
  const oneDay = 1000 * 60 * 60 * 24;
  const currDate = Date.now();
  const dayDiff = Math.floor((currDate - tweetData.created_at) / oneDay);
  

  let $tweet = $('<article><header class="tweetheader"></header><p></p><footer></footer></article>');

  $tweet.children('p').text(tweetData.content.text);

  $tweet.children('.tweetheader').append(`<div><img src="${tweetData.user.avatars}" alt="avatar"><p>${tweetData.user.name}
    </p></div><p>${tweetData.user.handle}</p>`);

  $tweet.children('footer').append(`<p>${dayDiff} days ago</p>
    <div><i class="fa-solid fa-flag flag"></i><i class="fa-solid fa-retweet retweet"></i>
    <i class="fa-solid fa-heart heart"></i></div>`);
  
  return $tweet;
}

const renderTweets = function()

const $tweet = createTweetElement(tweetData)
$('.tweetlist').append($tweet);

});
