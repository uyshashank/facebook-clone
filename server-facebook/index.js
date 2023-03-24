const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;
const cors = require("cors");
const bodyParser = require("body-parser");

/**
 * * DB-Libraries
 */
let mongoose = require("mongoose");
let dbConfig = require("./database/db_connection");

/**
 * * Route management libraries
 */
let login = require('./Controllers/Login-Signup/Login');
let signup = require("./Controllers/Login-Signup/Signup");
let dashboard = require("./Controllers/App-Data/Dashboard");
let timelinePosts = require("./Controllers/App-Data/TimelinePosts");
let userProfile = require("./Controllers/App-Data/UserProfile");
let friendsSuggestion = require("./Controllers/App-Data/FriendsSuggestion");
/**
 * * Middlewares
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname + "/public")));

/**
 * * GET Requests Routes
 */

app.get("/dashboard/:user_email", dashboard.dashboardData);
app.get("/userProfile/:user_email", userProfile.userProfile);
app.get("/getPost/:user_email", timelinePosts.getPosts);
app.get("/friends/suggestions", friendsSuggestion.friendsSuggestion);
app.get("/friends/suggestions", friendsSuggestion.friendsSuggestion);

/**
 * * POST Request Routes
 */

app.post("/login", login.login);
app.post("/signup", signup.signup);
app.post("/savePost", timelinePosts.savePosts);

/**
 * * Lets Start the Server
 */

app.listen(PORT, () => {
  console.log(`Server is up at ${PORT}`);
  mongoose.set("strictQuery", false);
  mongoose.Promise = global.Promise;
  mongoose.connect(dbConfig.db_url).then(
    () => {
      console.log("Database successfully connected");
      console.log("Connected to port " + PORT);
    },
    (error) => {
      console.log(
        "Could not connect to database. Below is the error\n" + error
      );
    }
  );
});
