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
            price: 450,
            images: ['https://utfs.io/f/85b4d11a-0355-41d5-a5c9-a95f0ca9a320-y6i364.jpeg'],
            colors: ['Gray'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
          {
            name: 'Running shoes',
            slug: 'running-shoes',
            description: 'These shoes are the perfect middle ground between style and convenience.',
            price: 700,
            images: ['https://utfs.io/f/8f169975-771a-40ee-aed6-a8fd228ac723-y6i365.jpeg'],
            colors: ['White'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
          {
            name: 'Tennis shoes',
            slug: 'tennis-shoes',
            description: 'These shoes are the perfect middle ground between style and convenience.',
            price: 750,
            images: ['https://utfs.io/f/94d8183b-3be9-4ddd-b86c-eb382474d48c-y6i366.jpeg'],
            colors: ['Off White'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
          {
            name: 'Dad shoes',
            slug: 'dad-shoes',
            description: 'These shoes are the perfect middle ground between style and convenience.',
            price: 500,
            images: ['https://utfs.io/f/b36b1c10-9267-413f-9619-dca9404044c8-y6i367.jpeg'],
            colors: ['White'],
            sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13'],
          },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Headwear',
      slug: 'headwear',
      storeId: store.id,
      products: {
        create: [
          {
            name: 'Beanie',
            slug: 'beanie',
            description: '100% combed ringspun cotton.',
            price: 10,
            images: [],
            colors: ['Black', 'Gray', 'White'],
            sizes: [],
          },
          {
            name: 'Embroidered Cap',
            slug: 'embroidered-cap',
            description:
              'Classic design, comfortable fit. Velcro closure for easy adjustability. One size fits all.',
            price: 1000,
            images: ['https://utfs.io/f/93ad8c1d-5b67-433b-b5d3-bee04fa64380-is1517.jpeg'],
            colors: ['Black'],
            sizes: [],
          },
          {
            name: 'Embroidered Flag Cap',
            slug: 'embroidered-flag-cap',
            description:
              'Classic design, comfortable fit. Velcro closure for easy adjustability. One size fits all.',
            price: 1000,
            images: ['https://utfs.io/f/ec7157f0-2107-4e95-ae51-40d3b1e89323-is1516.jpeg'],
            colors: ['Black'],
            sizes: [],
          },
          {
            name: 'Embroidered Logo Cap',
            slug: 'embroidered-logo-cap',
            description:
              'Classic design, comfortable fit. Velcro closure for easy adjustability. One size fits all.',
            price: 1000,
            images: ['https://utfs.io/f/29594051-cb9f-4fb6-b82e-80068ff538b7-is1515.jpeg'],
            colors: ['Black'],
            sizes: [],
          },
        ],
      },
    },
  });

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
