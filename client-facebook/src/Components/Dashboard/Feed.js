import axios from "axios";
import React, { useEffect, useState } from "react";
// import MessageSender from "../Dashboard/MessageSender";
// import Post from "../";
// import StoryReel from "../Story/StoryReel";
import TimelinePost from "./TimelinePost";
const Feed = (props) => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const [timeLinePost, setTimeLinePost] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getPost/" + userLoggedIn)
      .then((fetchedData) => {
        setTimeLinePost(fetchedData.data.user_posts);
        console.log(fetchedData.data.user_posts);
      })
      .catch((err) => {
        console.log("Data fetch failed ");
      });
  }, [userLoggedIn]);
  return (
    <>
      <div className="feed">
        {/* <StoryReel /> */}
        {/* <MessageSender propsData = {props.propsData} /> */}
        {/* <Post /> */}
        {timeLinePost && 
        Object.keys(timeLinePost).forEach((key,index)=>{
          <TimelinePost post_data={timeLinePost[key]}/>
        })
        }        
      </div>
    </>
  );
};

export default Feed;
