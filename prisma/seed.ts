import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const shirtSizes = [];

async function main() {
  console.info('🌱 Starting seed...');

  await prisma.options.deleteMany();
  await prisma.variation.deleteMany();
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
          variations: {
            create: [
              {
                name: 'Color',
                options: {
                  create: [
                    { name: 'Black', inventory: 0 },
                    { name: 'White', inventory: 0 },
                  ],
                },
              },
              {
                name: 'Size',
                options: {
                  create: [
                    { name: '6 x 8 inch', inventory: 0 },
                    { name: '7 x 9 inch', inventory: 0 },
                    { name: '8 x 11 inch', inventory: 0 },
                    { name: '8 x 12 inch', inventory: 0 },
                    { name: '10 x 15 inch', inventory: 0 },
                    { name: '12 x 16 inch', inventory: 0 },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  });

  prisma.category.create({
    data: {
      name: 'Drinkware',
      slug: 'drinkware',
      storeId: store.id,
    },
  });

  prisma.category.create({
    data: {
      name: 'Electronics',
      slug: 'electronics',
      storeId: store.id,
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
