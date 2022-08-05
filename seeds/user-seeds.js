const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "JosephIsCool",
    email: "Joeydaboi@ucf.edu",
    password: "password123",
  },
  {
    username: "Janeiscute",
    email: "Janeyfromdablock@ucf.edu",
    password: "password123",
  },
  {
    username: "RyanisDumb",
    email: "Ryanstfu@ucf.edu",
    password: "password123",
  },
  {
    username: "Ganjiisacat",
    email: "Ganjimeowstoomuch@ucf.edu",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
