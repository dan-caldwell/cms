const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post(`/`, async (req, res, next) => {
  try {
    const { title, content, authorEmail } = req.body
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

router.get(`/:authorEmail/all`, async (req, res) => {
  res.json('post api');
});

module.exports = router;