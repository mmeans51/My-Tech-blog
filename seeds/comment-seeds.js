const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I absolutely love this.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I absolutely hate this.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'this is fine, nothing more, nothing less.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'I dont hate this.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'I feel nothing.',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
