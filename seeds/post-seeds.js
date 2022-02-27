const { Post } = require('../models');

const postdata = [
  {
    title: 'Millenials these days.',
    user_id: 1
  },
  {
    title: 'whats the deal with this.',
    user_id: 2
  },
  {
    title: 'whats going on.',
    user_id: 3
  },
  {
    title: 'here me out.',
    user_id: 4
  },
  {
    title: 'my blog post.',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
