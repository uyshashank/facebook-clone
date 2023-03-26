import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageSender from "../Dashboard/MessageSender";
import StoryReel from "../Story/StoryReel";
import ProfilePic from "../UI/ProfilePic";
import TimelinePost from "./TimelinePost";
const Feed = (props) => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const [timeLinePost, setTimeLinePost] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/timeline/" + userLoggedIn)
      .then((fetchedData) => {
        setTimeLinePost(fetchedData.data);
        console.log(fetchedData.data);
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
        
        {/* {timeLinePost &&
          timeLinePost.map((data) => {
            return (
              <TimelinePost
                key={data.posts}
                post_data={data.posts}
                user_name_fname={data.user_fname}
                user_name_lname={data.user_lname}
                user_profile={data.profile_details.prof_pic}
              />
            );
          })} */}
      </div>
    </>
  );
};

export default Feed;
