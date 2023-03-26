import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "../Header-Footer/Header";

const UserProfile = () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/userProfile/${userLoggedIn}`)
      .then((fetchedData) => {
        setProfileData(fetchedData.data.data);
        console.log(fetchedData.data.data);
      })
      .catch((err) => {
        console.log("Fetching Data for Userprofile failed with error -> ", err);
      });
  }, [userLoggedIn]);

  return (
    <>
      <Header />
      {profileData && (
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src={
                        `http://localhost:4000/public/profpics/` +
                        profileData.user_email +
                        "@profile.jpg"
                      }
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                    <h5 className="my-3">
                      {profileData.user_fname + " " + profileData.user_lname}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">First Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{profileData.user_fname}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Last Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{profileData.user_lname}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Contact</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{profileData.user_mob}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{profileData.user_email}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Joinning Date</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{profileData.joining_date}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Your Posts</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{profileData.total_posts}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserProfile;
