const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  body: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
