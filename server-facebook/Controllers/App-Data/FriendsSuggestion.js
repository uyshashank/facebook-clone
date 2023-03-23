const pathFile = require("../../config/pathFile");
const userSchema = require(pathFile.userSchemaPath);
const friendsSuggestion = async (req,res) => {
    const suggestedFriends = await userSchema.find({}, 'user_fname user_lname profile_details.prof_pic');
    return res.status(200).json({suggestedFriends});
}
module.exports = {
    friendsSuggestion
}