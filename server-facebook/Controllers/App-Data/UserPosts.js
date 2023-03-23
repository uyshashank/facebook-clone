const pathFile = require("../../config/pathFile");
const userSchema = require(pathFile.userSchemaPath);
const savePosts = async (req, res) => {
  const newPost = req.body;
  try {
    if(!newPost){
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
      post_data: user.posts[i].post_data,
      post_date_time: user.posts[i].post_date_time,
    });
  }
  return res.status(200).json({ user_posts });
};

module.exports = {
  savePosts,
  getPosts,
};
