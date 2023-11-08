import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  const store = await prisma.store.create({
    data: {
      name: 'Digital Commerce',
    },
  });

  // await prisma.category.create({
  //   data: {
  //     name: 'Bags',
  //     slug: 'bags',
  //     storeId: store.id,
  //     products: {
  //       create: {
  //         name: 'Drawstring Bag',
  //         slug: 'drawstring-bag',
  //         description: 'Strong nylon drawstring bag. Sturdy, reusable, and resilient',
  //         price: 12,
  //         images: [],
  //         colors: ['Black', 'White'],
  //         sizes: [
  //           '6 x 8 inch',
  //           '7 x 9 inch',
  //           '8 x 11 inch',
  //           '9 x 12 inch',
  //           '10 x 15 inch',
  //           '12 x 16 inch',
  //         ],
  //       },
  //     },
  //   },
  // });

  // await prisma.category.create({
  //   data: {
  //     name: 'Drinkware',
  //     slug: 'drinkware',
  //     storeId: store.id,
  //     products: {
  //       create: [
  //         {
  //           name: 'Cup',
  //           slug: 'cup',
  //           description: '12oz double wall ceramic body with a padded bottom.',
  //           price: 15,
  //           images: [],
  //           colors: ['Black', 'White'],
  //           sizes: [],
  //         },
  //         {
  //           name: 'Mug',
  //           slug: 'mug',
  //           description: '',
  //           price: 15,
  //           images: [],
  //           colors: [],
  //           sizes: [],
  //         },
  //       ],
  //     },
  //   },
  // });

  // await prisma.category.create({
  //   data: {
  //     name: 'Electronics',
  //     slug: 'electronics',
  //     storeId: store.id,
  //     products: {
  //       create: {
  //         name: 'Keyboard',
  //         slug: 'keyboard',
  //         description: '',
  //         price: 150,
  //         images: [],
  //         colors: ['Black', 'White'],
  //         sizes: [],
  //       },
  //     },
  //   },
  // });

  await prisma.category.create({
    data: {
      name: 'Footware',
      slug: 'footware',
      storeId: store.id,
      products: {
        create: [
          {
            name: 'Skate shoes',
            slug: 'skate-shoes',
            description: 'These shoes are the perfect middle ground between style and convenience.',
            price: 45,
            images: ['https://utfs.io/f/85b4d11a-0355-41d5-a5c9-a95f0ca9a320-y6i364.jpeg'],
            colors: ['Gray'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
          {
            name: 'Running shoes',
            slug: 'running-shoes',
            description: 'These shoes are the perfect middle ground between style and convenience.',
            price: 70,
            images: ['https://utfs.io/f/8f169975-771a-40ee-aed6-a8fd228ac723-y6i365.jpeg'],
            colors: ['White'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
          {
            name: 'Tennis shoes',
            slug: 'tennis-shoes',
            description: 'These shoes are the perfect middle ground between style and convenience.',
            price: 70,
            images: ['https://utfs.io/f/94d8183b-3be9-4ddd-b86c-eb382474d48c-y6i366.jpeg'],
            colors: ['Off White'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
          {
            name: 'Dad shoes',
            slug: 'dad-shoes',
            description: 'These shoes are the perfect middle ground between style and convenience.',
            price: 70,
            images: ['https://utfs.io/f/b36b1c10-9267-413f-9619-dca9404044c8-y6i367.jpeg'],
            colors: ['White'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
        ],
      },
    },
  });

  // await prisma.category.create({
  //   data: {
  //     name: 'Headwear',
  //     slug: 'headwear',
  //     storeId: store.id,
  //     products: {
  //       create: [
  //         {
  //           name: 'Beanie',
  //           slug: 'beanie',
  //           description: '100% combed ringspun cotton.',
  //           price: 10,
  //           images: [],
  //           colors: ['Black', 'Gray', 'White'],
  //           sizes: [],
  //         },
  //         {
  //           name: 'Cowboy Hat',
  //           slug: 'cowboy-hat',
  //           description: `
  //             Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt.
  //             Its classic Western profile features a classic cattleman crease, a 4" brim and a 4 1/2" regular oval crown.
  //             Additional details include a leather sweatband, satin lining, and a self-matching hat band with a three-piece silver-toned buckle set, as well as a hat box.
  //           `,
  //           price: 1000,
  //           images: [],
  //           colors: ['Black', 'Tan'],
  //           sizes: ['6 3/4', '6 7/8', '7', '7 1/8', '7 1/4', '7 3/8', '7 1/2', '7 5/8', '7 3/4'],
  //         },
  //         {
  //           name: 'Dad Hat',
  //           slug: 'dad-hat',
  //           description: '100% peach-washed cotton.',
  //           price: 20,
  //           images: [],
  //           colors: [],
  //           sizes: [],
  //         },
  //       ],
  //     },
  //   },
  // });

  // await prisma.category.create({
  //   data: {
  //     name: 'Hoodies',
  //     slug: 'hoodies',
  //     storeId: store.id,
  //     products: {
  //       create: {
  //         name: 'Hoodie',
  //         slug: 'hoodie',
  //         description: 'Fabric blend of Supima Cotton and Micromodal.',
  //         price: 50,
  //         images: [],
  //         colors: [],
  //         sizes: [],
  //       },
  //     },
  //   },
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
