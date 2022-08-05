const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Where is all the cat photos!?",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I can't find any cat photos!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Seriously, where are all the cat photos!?",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "This is ridiculous! Why can't I find cat photos!?",
    user_id: 4,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
