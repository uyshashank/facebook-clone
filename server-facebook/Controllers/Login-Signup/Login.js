const pathFile = require("../../config/pathFile");
const userSchema = require(pathFile.userSchemaPath);
const login = async (req, res) => {
  let user = await userSchema.findOne({ user_email: req.body.email });
  if (user) {
    user = await userSchema.findOne({ user_pass: req.body.password });
    if (user) {
      return res.status(200).json({ userEmail: req.body.email });
    } else {
      return res.status(500).json({ error: "Wrong password!" });
    }
  } else {
    return res.status(500).json({ error: "Invalid email!" });
  }
};

module.exports = {
  login,
};
