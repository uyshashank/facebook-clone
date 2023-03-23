const pathFile = require("../../config/pathFile");
const userSchema = require(pathFile.userSchemaPath);
const signup = async (req, res) => {
  try {
    let userExist = await userSchema.findOne({ user_email: req.body.email });
    if (userExist) {
      return res.status(500).json({ error: "Email already registered!" });
    } else {
      const data = new userSchema(req.body);
      await data.save();
      return res.status(200).json({ message: "Account created Successfully!" });
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  signup,
};
