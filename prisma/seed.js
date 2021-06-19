const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userData = [
  {
    user_id: 'bender',
    name: 'Bender',
    posts: {
      create: [
        {
          title: 'Do a flip!',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et tincidunt nunc, vel sagittis ante. Integer quis gravida tellus. Quisque ut aliquam eros. Ut pellentesque iaculis ex in condimentum. Integer quis vulputate lacus. Vestibulum a auctor dolor. Sed tincidunt vel mauris non congue. Proin metus nibh, vulputate nec dui quis, aliquam ultrices felis. Proin convallis feugiat risus. Nullam neque nisi, maximus a nisl eu, accumsan imperdiet libero. Nulla fringilla lorem nec facilisis gravida. Praesent eu cursus sapien, sit amet fermentum purus. Proin volutpat gravida ante ut feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut luctus justo felis.',
          published: true,
        },
      ],
    },
  },
  {
    user_id: 'data',
    name: 'Data',
    posts: {
      create: [
        {
          title: 'I find it most intriguing.',
          content: "Nam efficitur aliquam leo. Suspendisse quam nibh, pharetra ac volutpat nec, rutrum nec magna. Aliquam quam justo, volutpat quis lorem ut, sodales scelerisque eros. Phasellus non dapibus augue. Duis a leo vehicula dui auctor vehicula. Integer eleifend condimentum pharetra. Sed non porttitor diam. Donec faucibus risus id tellus tempor pellentesque. Etiam id tortor ligula. Nullam ut diam aliquam enim sagittis pulvinar non vehicula odio. Etiam neque nisi, fringilla sit amet lectus vitae, mattis sagittis ante. Integer a metus rhoncus, varius nunc lacinia, fringilla nisi. Integer est augue, imperdiet eget est in, fermentum volutpat ex. Pellentesque et auctor risus. In tincidunt ipsum sed lacus tempus sodales.",
          published: true,
        },
      ],
    },
  },
  {
    user_id: 'nordom',
    name: 'Nordom',
    posts: {
      create: [
        {
          title: 'I think, therefore I am... I think.',
          content: 'Phasellus iaculis felis vitae sem feugiat, efficitur lobortis tortor porta. Aliquam faucibus mattis diam, posuere cursus purus feugiat vel. Aliquam a sollicitudin sem, vel tristique diam. Donec quis sem ligula. Quisque ut efficitur nibh. Donec maximus malesuada porttitor. Vivamus felis metus, pharetra non blandit ac, iaculis sit amet ex. Nulla vitae semper ante. Donec elementum aliquam ligula, eget vehicula dolor interdum vel. Aliquam congue dui eget vestibulum rhoncus. Suspendisse metus massa, accumsan id ultricies id, euismod id ante. Vivamus at lorem ornare, scelerisque velit et, dignissim libero. Vestibulum maximus ex dapibus facilisis sollicitudin. Quisque laoreet tincidunt lectus, at rutrum felis consectetur nec. Nunc ultricies ante nibh, non eleifend enim fermentum non. Fusce sed aliquam urna.',
          published: true,
        },
        {
          title: 'Sense of closure imminent.',
          content: 'Mauris ultricies metus nec felis vulputate, sed tristique arcu tristique. In hac habitasse platea dictumst. Praesent turpis nisl, facilisis at lorem a, sodales luctus felis. Aliquam lobortis vel tortor nec maximus. Curabitur maximus neque scelerisque nisl tempus, et euismod diam pharetra. Curabitur iaculis dui in nunc aliquet vestibulum. Vestibulum sed tellus eu nunc cursus convallis quis ac turpis. Nulla lacinia facilisis metus quis pharetra. Proin orci ligula, tempor fringilla sodales quis, tristique semper arcu. Sed dapibus eros sed dictum tristique. Nullam in risus eros. Suspendisse potenti.',
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with name: ${user.name}`)
  }
  console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
