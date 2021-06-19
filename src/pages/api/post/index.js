import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/post
// Required fields in body: title, name, user_id
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content, name, user_id } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      user_id: user_id,
    },
  })

  if (!userExists) {
    await prisma.user.create({
      data: {
        user_id: user_id,
        name: name,
      },
    })
  }

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { user_id: user_id } },
    },
  }).finally(async () => {
      await prisma.$disconnect()
    })
  res.json(result)
}
