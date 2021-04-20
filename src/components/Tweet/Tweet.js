import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { HandThumbsUp } from "react-bootstrap-icons";
import TweetContext from "../../App";
import "./Tweet.css";

function Tweet({ tweet, tweets, setTweets }) {
  // const [tweets, setTweets] = useContext(TweetContext);
  const handleLikeBtn = (id) => {
    const likedTweet = [...tweets];
    const liked = likedTweet.find((post) => post.id == id);
    const isLiked = liked.liked;
    liked.liked = !isLiked;
    setTweets(likedTweet);
  };
  console.log(tweet.id);
  return (
    <div className="tweet">
      <p>{tweet.description}</p>
      <div>
        {tweet.liked ? (
          <Button onClick={() => handleLikeBtn(tweet.id)} variant="success">
            Liked <HandThumbsUp />
          </Button>
        ) : (
          <Button onClick={() => handleLikeBtn(tweet.id)} variant="primary">
            Like <HandThumbsUp />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Tweet;
