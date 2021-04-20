import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "700px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function TweetForm({ setTweets, modalIsOpen, setIsOpen, closeModal, tweets }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const tweetData = {
      id: tweets.length + 1,
      description: data.tweet,
      like: false,
    };
    setTweets([tweetData, ...tweets]);
    closeModal();
    console.log(tweetData);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Create New Tweet</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <textarea
              rows="6"
              className="form-control"
              placeholder="Make Your New Tweet"
              name="tweet"
              ref={register({ required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.tweet && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default TweetForm;
