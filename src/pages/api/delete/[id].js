import { PrismaClient } from '@prisma/client'
import {getSession, withApiAuthRequired} from "@auth0/nextjs-auth0";

const prisma = new PrismaClient()

// DELETE /api/delete/:id
export default withApiAuthRequired(async function handle(req, res) {
  const { user } = getSession(req, res) || {};
  const postId = req.query.id

  const postExist = await prisma.user.findUnique({
    where: {
      user_id: user.sub,
    },
    select: {
      posts: {
        where: {
          id: Number(postId),
        },
      },
    },
  })

  if (postExist) {
    const post = await prisma.post.delete({
      where: {id: Number(postId)},
    }).finally(async () => {
      await prisma.$disconnect()
    })
    res.json(post)
  }
  else
  {
    await prisma.$disconnect()
    res.redirect(500, './')
  }
});
