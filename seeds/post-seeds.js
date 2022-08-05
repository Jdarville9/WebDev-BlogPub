const { Post } = require("../models");

const postdata = [
  {
    title: "What to expect at your Junior Web Developer Interview",
    content:
      "This is a post about what to expect at your Junior Web Developer Interview",
    user_id: 1,
  },
  {
    title: "Whiteboard Coding Interviews: 6 Steps to Solve Any Problem",
    content:
      "This is a post about Whiteboard Coding Interviews: 6 Steps to Solve Any Problem",
    user_id: 2,
  },
  {
    title: "I Challenged The CSS King To A CSS Battle",
    content: "This is a post about I Challenged The CSS King To A CSS Battle",
    user_id: 3,
  },
  {
    title: "How to interview as a Junior Web Developer",
    content: "This is a post about how to interview as a Junior Web Developer",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
