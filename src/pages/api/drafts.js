import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const getDrafts = async (req, res) => {
    const user_id = req.body.user_id
    const result = await prisma.user
        .findUnique({
            where: {
                user_id: user_id,
            },
            select: {
                posts: {
                    where: {
                        published: false,
                    },
                    select: {
                        author: {
                            select: {
                                name: true,
                                user_id: true,
                            },
                        },
                        content: true,
                        id: true,
                        published: true,
                        title: true,
                    },
                    orderBy: {
                        title: 'asc',
                    },
                },
            },
        })
        .finally(async () => {
            await prisma.$disconnect()
        })

    res.json(result.posts)
}

export default getDrafts
