const pathFile = require("../../config/pathFile");
const userSchema = require(pathFile.userSchemaPath);
const dashboardData = async (req, res) => {
  const userEmail = req.params.user_email;
  let user = await userSchema.findOne({ user_email: userEmail });
  let data = {
    fname: user.user_fname,
    lname: user.user_lname,
    prof_pic: user.profile_details.prof_pic,
    userEmail: userEmail
  };
  return res.status(200).json({ data: data });
};

module.exports = {
  dashboardData,
};
