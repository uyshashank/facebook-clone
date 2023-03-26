import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageSender from "../Dashboard/MessageSender";
import StoryReel from "../Story/StoryReel";
// import ProfilePic from "../UI/ProfilePic";
import TimelinePost from "./TimelinePost";
const Feed = (props) => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const [timeLinePost, setTimeLinePost] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/timeline/" + userLoggedIn)
      .then((fetchedData) => {
        setTimeLinePost(fetchedData.data);
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
                key={data.post_id+data.post_owner_email}
                post_data={data.post_data}
                post_owner_name={data.post_owner_name}
                post_owner_email={data.post_owner_email}
                post_likes_count={data.post_likes_count}
                post_date_time={data.post_date_time}
              />
            );
          })}
      </div>
    </>
  );
};

export default Feed;
