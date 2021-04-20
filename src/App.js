import { createContext, useState } from "react";
import "./App.css";
import { Twitter } from "react-bootstrap-icons";
import Tweet from "./components/Tweet/Tweet";
import TweetForm from "./components/TweetForm/TweetForm";

function App() {
  const [tweets, setTweets] = useState([
    {
      id: 0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti repudiandae laborum fugit! Mollitia perspiciatis ab qui, at id dolorib autem architecto, explicabo recusandae quia delectus dicta vel ex odio.",
      liked: false,
    },
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti repudiandae laborum fugit! Mollitia perspiciatis ab qui, at id dolorib autem architecto, explicabo recusandae quia delectus dicta vel ex odio.",
      liked: false,
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti repudiandae laborum fugit! Mollitia perspiciatis ab qui, at id dolorib autem architecto, explicabo recusandae quia delectus dicta vel ex odio.",
      liked: false,
    },
  ]);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="main-container">
      <div style={{ position: "relative" }}>
        <button onClick={openModal} className="btn btn-success m-5">
          <Twitter /> Add Your Tweets
        </button>
      </div>
      <div className="">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweets={tweets}
            setTweets={setTweets}
            tweet={tweet}
          />
        ))}
      </div>
      <TweetForm
        setTweets={setTweets}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        openModal={openModal}
        tweets={tweets}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
