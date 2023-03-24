import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OutlinedFlagSharpIcon from "@mui/icons-material/OutlinedFlagSharp";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
//
import { Avatar, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Header = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/dashboard/${userLoggedIn}`)
      .then((fetchedData) => {
        setUserData(fetchedData.data.data);
      })
      .catch((err) => {
        console.log("Header Fetch failed with error => " + err);
      });
  }, [userLoggedIn]);

  const logoutHandler = () => {
    localStorage.removeItem("userLoggedIn");
    navigate("/");
  };

  return (
    <>
      {userData && (
        <nav className="navbar navbar-expand-lg bg-body-tertiary header">
          <div className="container-fluid">
            <a className="navbar-brand" href="##">
              <img
                width="40"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt="Facebook Logo"
              />
            </a>
            <form className="d-flex" role="search">
              <div className="header__input">
                <SearchIcon fontSize="small" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Facebook"
                />
              </div>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0 w-100">
                  <Link to="/dashboard">
                    <li className="nav-item mx-4">
                      <HomeOutlinedIcon fontSize="large" />
                    </li>
                  </Link>
                  <li className="nav-item mx-4">
                    <OutlinedFlagSharpIcon fontSize="large" />
                  </li>
                  <li className="nav-item mx-4">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                  </li>
                  <li className="nav-item mx-4">
                    <StorefrontOutlinedIcon fontSize="large" />
                  </li>
                  <li className="nav-item mx-4">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                  </li>
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-10">
                  <li className="nav-item mx-1">
                    <Avatar
                      src={
                        userData.prof_pic.includes("avatar")
                          ? `http://localhost:4000` + userData.prof_pic
                          : `http://localhost:4000/public/profpics/` +
                            userData.prof_pic
                      }
                    />
                  </li>
                  <li className="nav-item mx-1">
                    <h5 className="mx-2 pt-2">{userData.fname}</h5>
                  </li>
                  <li className="nav-item mx-1">
                    <IconButton>
                      <NotificationsActiveIcon />
                    </IconButton>
                  </li>

                  <li className="nav-item mx-1">
                    <IconButton onClick={logoutHandler}>
                      <LogoutIcon />
                    </IconButton>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
