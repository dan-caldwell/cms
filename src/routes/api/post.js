const express = require('express');
const Post = require('../../controllers/Post');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post(`/`, async (req, res, next) => {
  try {
    const { title, content, authorEmail } = req.body;
    const result = await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { email: authorEmail } },
      },
    })
    res.json(result)
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get(`/:email/all`, async (req, res) => {
  try {
    const { email } = req.params;
    const { html } = req.query;
    const posts = await Post.getPostsByAuthorEmail({
      email
    });
    if (html) {
      res.render(`./components/${html}/index`, { posts });
    } else {
      res.json(posts);
    }
  } catch (err) {
    console.error(err);
    res.json([]);
  }

});

module.exports = router;