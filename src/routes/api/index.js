const express = require('express');
const postRouter = require('./post');
const router = express.Router({ mergeParams: true });

router.use('/post', postRouter);

router.get('/', async function (req, res, next) {
  res.json('you got the api endpoint');
});

module.exports = router;