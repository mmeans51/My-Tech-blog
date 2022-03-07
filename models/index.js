const Comment = require('./Comment');
const Post = require('./Post');
const Vote = require('./Vote');
const User = require('./User');

User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'NULL'
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'user_id',
  onDelete: 'NULL'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'NULL'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'NULL'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };