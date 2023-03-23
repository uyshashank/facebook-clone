import React from "react";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
import userEvent from "@testing-library/user-event";
import SidebarRow from "./SidebarRow";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  userEvent.displayName = props.propsData.fname + " " + props.propsData.lname;
  return (
    <>
      <div className={styles.sidebar}>
        <Link to="/userProfile">
          <SidebarRow
            src={props.propsData.prof_pic}
            title={props.propsData.fname}
          />
        </Link>
        <SidebarRow Icon={LocalHospital} title="Info Center" />
        <SidebarRow Icon={EmojiFlags} title="Pages" />
        <SidebarRow Icon={People} title="Friends" />
        <SidebarRow Icon={Chat} title="Messenger" />
        <SidebarRow Icon={Storefront} title="Marketplace" />
        <SidebarRow Icon={VideoLibrary} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
      </div>
    </>
  );
};

export default Sidebar;
