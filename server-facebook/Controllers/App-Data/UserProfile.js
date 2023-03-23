const pathFile = require("../../config/pathFile");
const userSchema = require(pathFile.userSchemaPath);
const userProfile = async (req, res) => {
  const userEmail = req.params.user_email;
  let user = await userSchema.findOne({ user_email: userEmail });
  let data = {
    user_email: user.user_email,
    user_fname: user.user_fname,
    user_lname: user.user_lname,
    user_mob: user.user_mob,
    total_friends: user.profile_details.total_friends,
    total_posts: user.profile_details.post_count,
    joining_date: user.profile_details.joining_date,
  };
  return res.status(200).json({ data: data });
};

module.exports = {
  userProfile
};
