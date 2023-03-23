import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import axios from "axios";
import Header from "../Header-Footer/Header";
import Feed from "../Dashboard/Feed";
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/dashboard/${userLoggedIn}`)
      .then((fetchedData) => {
        setUserData(fetchedData.data.data);
      })
      .catch((err) => {
        console.log("Dashboard Fetch failed with error => " + err);
      });
  }, [userLoggedIn]);

  return (
    <>
      <Header />
      <div className="app__body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block p-0 m-0">
              {/* {userData && <Sidebar propsData={userData} />} */}
            </div>
            <div className="col-md-8">
              <Feed propsData={userData} />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
