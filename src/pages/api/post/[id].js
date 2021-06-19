import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/post/:id
export default async function handle(req, res) {
    const postId = req.query.id
    const post = await prisma.post.findUnique({
        where: {id: Number(postId)},
        include: {author: true},
    }).finally(async () => {
        await prisma.$disconnect()
    })
    res.json(post)
}
