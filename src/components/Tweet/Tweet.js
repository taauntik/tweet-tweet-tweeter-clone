import React from "react";
import { Button, Card } from "react-bootstrap";
import { HandThumbsUp } from "react-bootstrap-icons";
import "./Tweet.css";

function Tweet({ tweet, tweets, key, setTweets }) {
  const handleLikeBtn = (id) => {
    let mytweet = tweets.find((post) => post.id == id);
    console.log(tweet);
    let isLiked = mytweet.liked;
    const others = tweets.filter((post) => post.id !== id);
    mytweet.liked = !isLiked;
    setTweets([tweet, ...others]);
  };
  console.log(tweet.id);
  return (
    <div className="tweet">
      <p>{tweet.description}</p>
      <div>
        {tweet.liked ? (
          <Button onClick={() => handleLikeBtn(tweet.id)} variant="primary">
            Liked <HandThumbsUp />
          </Button>
        ) : (
          <Button onClick={() => handleLikeBtn(tweet.id)} variant="success">
            Like <HandThumbsUp />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Tweet;
