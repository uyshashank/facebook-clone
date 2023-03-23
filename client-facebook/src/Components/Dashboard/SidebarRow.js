import React from "react";
import { Avatar } from "@mui/material";
import styles from "./SidebarRow.module.css"
function SidebarRow({ src, Icon, title }) {
  return (
    <div className={styles.sidebarRow}>
      {src && (
        <Avatar
          src={
            src.includes("avatar")
              ? `http://localhost:4000` + src
              : `http://localhost:4000/public/profpics/` + src
          }
        />
      )}
      {Icon && <Icon/>}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
