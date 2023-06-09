import styles from "./TimelinePost.module.css";
import { Fragment } from "react";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ProfilePic from "../UI/ProfilePic";
const TimelinePost = (props) => {
  return (
    <Fragment>
      <div className={"container px-0 " + styles.userpost}>
        <div className="row">
          <div className="col-10">
            <CardHeader
              avatar={
                // <Avatar
                //   src={
                //     `http://localhost:4000/public/profpics/` +
                //     props.user_profile
                //   }
                // />
                <ProfilePic userEmail={props.post_owner_email} />
              }
              title={props.post_owner_name}
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
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>{props.post_data}</p>
            </div>
            <div className="col-12 p-0 text-center">
              {props.post_image && (
                <img className={styles.testPost} src="" alt="User Post" />
              )}
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-4 text-center">
              <IconButton>
                <ThumbUpAltOutlinedIcon />
              </IconButton>
            </div>
            <div className="col-4 text-center">
              <IconButton>
                <ChatOutlinedIcon />
              </IconButton>
            </div>
            <div className="col-4 text-center">
              <IconButton>
                <SendOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-2">
            <div className="col-1">
              <Avatar
                alt="Remy"
                className={styles.commentAvatar}
                src=""
                sx={{ width: 30, height: 30 }}
              />
            </div>
            <div className="col-11" style={{ paddingLeft: 0 }}>
              <input
                type="text"
                className={styles.commentForm}
                name="commentForm"
                id="commentForm"
                placeholder="Write a public comment..."
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TimelinePost;
