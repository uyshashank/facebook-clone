import React from "react";
import { useState } from "react";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import axios from "axios";

const MessageSender = (props) => {
  const userData = props.propsData;
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const sendUserPost = (input) => {
    axios({
      method: "post",
      url: `http://localhost:4000/savePost`,
      data: input,
    })
      .then((response) => {
        console.log("SUCCESS: Sending user posted data to DB!");
      })
      .catch((err) => {
        console.log("ERROR: Error while Sending user posted data to DB!", err);
      });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    sendUserPost({
      post_data:input,
      post_owner: userData.userEmail,
    });

    setInput("");
    setImageUrl("");
  };
  return (    
    <>
      <div className="messageSender">
        <div className="messageSender__top container-fluid">
        {userData && (
            <Avatar
              src={
                userData.prof_pic.includes("avatar")
                  ? `http://localhost:4000` + userData.prof_pic
                  : `http://localhost:4000/public/profpics/` + userData.prof_pic
              }
            />
          )}
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="messageSender__input"
              placeholder={`What's on your mind?`}
            />
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL (Optional)"
            />
            <button onClick={handlerSubmit} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <Videocam style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>

          <div className="messageSender__option">
            <PhotoLibrary style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>

          <div className="messageSender__option">
            <InsertEmoticon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSender;
