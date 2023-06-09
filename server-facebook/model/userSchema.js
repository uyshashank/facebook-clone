const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    user_email: {
      type: String,
    },
    user_fname: {
      type: String,
    },
    user_lname: {
      type: String,
    },
    user_mob: {
      type: String,
    },
    user_pass: {
      type: String,
    },
    profile_details: {
      prof_pic: { type: String, default: "/public/profpics/avatar.jpg" },
      cover_pic: { type: String, default: "/public/coverpics/avatar.jpg" },
      total_friends: { type: Number, default: 0 },
      total_posts: { type: Number , default: 0 },
      joining_date: { type: Date, default: Date.now },
    },
    posts: [
      {
        post_id: { type: Number },
        post_likes_count: { type: Number, default: 0 },
        post_date_time: { type: Date, default: Date.now },
        post_owner_email: { type: String },
        post_owner_name: { type: String },
        post_data: { type: String },
      },
    ],
    friendsList: [],
  },
  {
    collection: "facebook-clone-collection",
  }
);

module.exports = mongoose.model("userDetails", userSchema);
