import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// TODO REMEMBER IMAGES AND SIZES AND COLORS HAVE NO CORRELATION!!!

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  const store = await prisma.store.create({
    data: {
      name: 'My store',
    },
  });

  // bags
  await prisma.category.create({
    data: {
      name: 'Bags',
      slug: 'bags',
      storeId: store.id,
      products: {
        create: {
          name: 'Drawstring Bag',
          slug: 'drawstring-bag',
          description: 'Strong nylon drawstring bag. Sturdy, reusable, and resilient',
          price: 12,
          images: ['/bag-black.png', '/bag-white.png'],
          colors: ['Black', 'White'],
          sizes: [
            '6 x 8 inch',
            '7 x 9 inch',
            '8 x 11 inch',
            '9 x 12 inch',
            '10 x 15 inch',
            '12 x 16 inch',
          ],
        },
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Drinkware',
      slug: 'drinkware',
      storeId: store.id,
      products: {
        create: [
          {
            name: 'Cup',
            slug: 'cup',
            description: '12oz double wall ceramic body with a padded bottom.',
            price: 15,
            images: ['/cup-black.png', '/cup-white.png'],
            colors: ['Black', 'White'],
            sizes: [],
          },
          {
            name: 'Mug',
            slug: 'mug',
            description: '',
            price: 15,
            images: ['/mug-1.png', '/mug-2.png'],
            colors: [],
            sizes: [],
          },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Electronics',
      slug: 'electronics',
      storeId: store.id,
      products: {
        create: {
          name: 'Keyboard',
          slug: 'keyboard',
          description: '',
          price: 150,
          images: ['/keyboard.png'],
          colors: ['Black', 'White'],
          sizes: [],
        },
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Footware',
      slug: 'footware',
      storeId: store.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Headwear',
      slug: 'headwear',
      storeId: store.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Hoodies',
      slug: 'hoodies',
      storeId: store.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Jackets',
      slug: 'jackets',
      storeId: store.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Kids',
      slug: 'kids',
      storeId: store.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Pets',
      slug: 'pets',
      storeId: store.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Shirts',
      slug: 'shirts',
      storeId: store.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Stickers',
      slug: 'stickers',
      storeId: store.id,
    },
  });
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
