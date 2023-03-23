import React from "react";
import Header from "../Header-Footer/Header";
import Sidebar from "../Dashboard/Sidebar";
import FriendsSuggestionList from "./FriendsSuggestionsList";

const FriendsSuggestion = () => {
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <FriendsSuggestionList />
      </div>
    </>
  );
};
export default FriendsSuggestion;