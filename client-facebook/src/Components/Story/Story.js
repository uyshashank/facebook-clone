import React from "react";
import { Avatar } from "@mui/material";
import styles from "./Story.module.css";
const Story = ({ image, profileSrc, title }) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${image})` }} className={styles.story}>
        <Avatar className={styles.story__avatar} src={profileSrc} />
        <h4>{title}</h4>
      </div>
    </>
  );
};

export default Story;
