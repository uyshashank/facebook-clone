import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageSender from "../Dashboard/MessageSender";
import StoryReel from "../Story/StoryReel";
import TimelinePost from "./TimelinePost";
const Feed = (props) => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const [timeLinePost, setTimeLinePost] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getPost/" + userLoggedIn)
      .then((fetchedData) => {
        setTimeLinePost(fetchedData.data.user_posts);
      })
      .catch((err) => {
        console.log("Data fetch failed ");
      });
  }, [userLoggedIn]);
  return (
    <>
      <div className="feed">
        <StoryReel />
        <MessageSender propsData={props.propsData} />
        {timeLinePost &&
          timeLinePost.map((data) => {
            return (
              <TimelinePost
                key={data.post_id}
                post_data={data.post_data}
                user_name_fname={data.user_name_fname}
                user_name_lname={data.user_name_lname}
                user_profile={data.user_profile}
              />
            );
          })}
      </div>
    </>
  );
};

export default Feed;
