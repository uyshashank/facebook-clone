import React from "react";
import MessageSender from "../Dashboard/MessageSender";
// import Post from "../";
import StoryReel from "../Story/StoryReel";
import UserPost from "./UserPost";
const Feed = (props) => {
  return (
    <>
      <div className="feed">
        {/* <StoryReel /> */}
        {/* <MessageSender propsData = {props.propsData} /> */}
        {/* <Post /> */}
        <UserPost />
      </div>
    </>
  );
};

export default Feed;
