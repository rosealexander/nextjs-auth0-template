import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const posts = await prisma.post.findMany({
        where: {published: true},
        include: {author: true},
    }).finally(async () => {
        await prisma.$disconnect()
    })
    res.json(posts)
}
