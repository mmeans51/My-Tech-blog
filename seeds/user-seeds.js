const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'realuser',
    email: 'realuser@email.com',
    password: 'password1'
  },
  {
    username: 'totallyrealuser',
    email: 'totallyrealpassword@email.com',
    password: 'password2'
  },
  {
    username: 'thisisarealuser',
    email: 'thisisarealuser',
    password: 'password3'
  },
  {
    username: 'iamarealuser',
    email: 'iamarealuser',
    password: 'password4'
  },
  {
    username: 'completelyrealuser',
    email: 'completelyrealuser',
    password: 'password5'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
