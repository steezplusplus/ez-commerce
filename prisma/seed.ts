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
      products: {
        create: {
          name: 'Shoes',
          slug: 'shoes',
          description: `
            Sleek, easy, and effortlessly stylish. Acme Slip-On Shoes are the ultimate get-up-and-go footwear. 
            The low-profile slip-on canvas upper offers unbeatable convenience, while the clean design makes this all-white slip-on the perfect choice for anyone with places to go and things to do.
            One of the most popular designs, these shoes are the perfect middle ground between style and convenience.
          `,
          price: 45,
          images: ['/shoes-1.png', '/shoes-2.png', '/shoes-3.png', '/shoes-4.png'],
          colors: ['Black', 'White'],
          sizes: [
            '1',
            '1.5',
            '2',
            '2.5',
            '3',
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
          ],
        },
      },
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
