import styles from "./UserPost.module.css";
import { Fragment } from "react";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
const UserPost = () => {
  const userData = {
    post_owner_name: "Shashank Yenurkar",
    post_time: "1h",
  };
  return (
    <Fragment>
      <div className={"container-fluid " + styles.userpost}>
        <div className="row">
          <div className="col-11">
            <CardHeader
              avatar={<Avatar alt="Remy" src="" />}
              title={userData.post_owner_name}
            />
          </div>

          <div className="col-1">
            <CardHeader
              avatar={
                <IconButton>
                  <MoreHorizTwoToneIcon />
                </IconButton>
              }
            />
          </div>
          <div className="col-10">
            <img src="" alt="" />
          </div>
        </div>
        <div className="row bg-secondary justify-content-center">
          <div className="col-11 bg-warning">
            <p>This is content</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserPost;
