import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import FriendRequestCard from "./FriendRequestCard";

const FriendsSuggestionList = () => {
  const [suggestedFriendsList, setSuggestedFriendsList] = useState();
  useEffect(() => {
    const getSuggestedFriendsList = async () => {
      const suggestedFriendsList = await axios
        .get("http://localhost:4000/friends/suggestions")
        .catch((err) => {
          console.log(err);
        });
      return suggestedFriendsList;
    };
    getSuggestedFriendsList().then((data) => {
      setSuggestedFriendsList(data);      
    });
  }, []);

  return (
    <Fragment>
      {suggestedFriendsList && (
        <FriendRequestCard requestersDetails={suggestedFriendsList} />
      )}
    </Fragment>
  );
};

export default FriendsSuggestionList;
