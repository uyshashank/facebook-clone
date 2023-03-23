import { Fragment } from "react";
import "./FriendRequestCard.modules.css";
const FriendRequestCard = (props) => {
  const suggestedFriendsList = props.requestersDetails.data.suggestedFriends;
  return (
    <Fragment>
      <div className="suggestedFriendsList">
        <h3>Friends you may know!</h3>
        {suggestedFriendsList.map((friends) => {
          return (
            <div className="friend_requester_card">
              <div className="friend_requester_avatar">
                <img
                  className="friend_requester_avatar_img"
                  src={
                    "http://localhost:4000" + friends.profile_details.prof_pic
                  }
                  alt="Avatar"
                />
              </div>
              <div className="friend_requester_details">
                <h5>{friends.user_fname + " " + friends.user_lname}</h5>
              </div>
              <div className="friend_request_actions">
                <button className="addFriendBtn">Add Friend</button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default FriendRequestCard;
