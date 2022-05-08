const express = require('express');
const router = express.Router();
const Post = require('../controllers/Post');

/* GET home page. */
router.get('/', async function (req, res, next) {

  try {
    const { email } = req.query;
    const posts = await Post.getPostsByAuthorEmail({
      email
    });
    res.render('index', { title: 'Express', posts });
  } catch (err) {
    console.error(err);
    res.render('index', { title: '', users: '', posts: '' });
  }

});

module.exports = router;
