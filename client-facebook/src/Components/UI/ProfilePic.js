import { Avatar } from "@mui/material";
import axios from "axios";
import { React, Fragment, useEffect, useState } from "react";

const ProfilePic = (props) => {
  const userEmail = props.userEmail;
  const [profilePic, setProfilePic] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getProfilePic/" + userEmail)
      .then((data) => {
        setProfilePic(data.data.prof_pic);
      })
      .catch((err) => {
        console.log("Error fetching user profile!", err);
      });
  }, [userEmail]);
  return (
    <Fragment>
      {profilePic && (
        <Avatar src={`http://localhost:4000` + profilePic} />
      )}
    </Fragment>
  );
};

export default ProfilePic;
