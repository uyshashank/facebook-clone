const pathFile = require("../../config/pathFile");
const userSchema = require(pathFile.userSchemaPath);
const savePosts = async (req, res) => {
  const newPost = req.body;
  try {
    if (!newPost) {
      console.log("Received Empty Object in Newpost from user!");
    }
    let user = await userSchema.findOne({ user_email: newPost.post_owner });
    const newPostID = user.posts.length + 1;
    user.profile_details.post_count++;
    newPost.post_id = newPostID;
    user.posts.push(newPost);
    const data = new userSchema(user);
    await data.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
  return res.status(200).json({ message: "Message Posted" });
};
const getPosts = async (req, res) => {
  const userEmail = req.params.user_email;
  let user = await userSchema.findOne({ user_email: userEmail });
  let user_posts = [];

  for (let i = 0; i < user.posts.length; i++) {
    user_posts.push({
      post_id: user.posts[i].post_id,
      post_data: user.posts[i].post_data,
      post_image: user.posts[i].post_image,
      post_date_time: user.posts[i].post_date_time,
      user_profile: user.profile_details.prof_pic,
      user_name_fname: user.user_fname,
      user_name_lname: user.user_lname,
    });
  }
  return res.status(200).json({ user_posts });
};

const getTimeline = async (req, res) => {
  /**
   * user_fname,
    user_lname,
    post_data,
    post_time,
    post_owner
   */
  const userEmail = req.params.user_email;
  let user = await userSchema.findOne({ user_email: userEmail });
  let userFriendsList = user.friendsList;
  let timelineData = [];
  let friend;
  for (let i = 0; i < userFriendsList.length; i++) {
    friend = await userSchema.findOne(
      { user_email: userFriendsList[i] },
      "posts.post_id posts.post_data posts.post_date_time user_fname user_lname profile_details.prof_pic"
    );
    timelineData.push(friend);    
  }
  console.log(timelineData);
  res.status(200).json(timelineData);
};

module.exports = {
  savePosts,
  getPosts,
  getTimeline,
};
