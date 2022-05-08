const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = class Post {

  static async getPostsByAuthorEmail({
    numPosts = 'all',
    email = null,
  }) {
    if (!email) return [];
    const posts = await prisma.user.findUnique({
      where: {
        email
      }
    })
      .posts();

    return posts;
  }

}