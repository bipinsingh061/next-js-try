const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
app.use(cors()); // Use this after the variable declaration

const bodyParser = require("body-parser");
let Post = require("./models/post");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.end("hello world!! bitches");
});

// create post

app.post("/addpost", (req, res, next) => {
  res.send(req.body.content);
  let post = new Post(req.body);
  post.save((err) => {
    if (err) {
      console.log("this worked");
      return res.sendStatus(400);
    } else {
      console.log("this worked too");
      next();
      //   return res.sendStatus(200);
    }
  });
});

app.get("/posts", (req, res, next) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error" + err));
});

app.listen(4000, () => {
  console.log("server up and running");
  // mongoose connection
  mongoose.connect(
    "mongodb+srv://bipinsingh061:zebronicmedia1313@cluster0.2xsuy.mongodb.net/RumBum?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
      console.log("database connnected");
    }
  );
});
