const postRoutes = require('./post-routes');

const router = require('express').Router();

const commentRoutes = require('./comment-routes');

const userRoutes = require('./user-routes.js');



router.use('/users', userRoutes);

router.use('/posts', postRoutes);

router.use('/comments', commentRoutes);




module.exports = router;