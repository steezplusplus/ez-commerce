import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  const store = await prisma.store.create({
    data: {
      name: 'Digital Commerce',
    },
  });

  // Drinkware
  await prisma.category.create({
    data: {
      name: 'Drinkware',
      slug: 'drinkware',
      storeId: store.id,
      products: {
        create: [
          {
            name: 'Mug',
            slug: 'mug',
            price: 50,
            variants: {
              create: [
                {
                  color: 'White',
                  slug: 'white',
                  size: '16 oz',
                  image: 'https://utfs.io/f/d23f59b0-1296-4ee3-b619-d972500ad60c-rdrw11.jpeg',
                  altText: 'An image of a 16 oz white mug.',
                  description:
                    'An exquisite blend of style and functionality designed to elevate your sipping experience.',
                  isFeatured: false,
                  inventory: 10000,
                },
                {
                  color: 'Black',
                  slug: 'black',
                  size: '16 oz',
                  image: 'https://utfs.io/f/a5c84a2e-ebda-4d70-be34-a476c7a50197-m0iy29.jpeg',
                  altText: 'An image of a 16 oz black mug.',
                  description:
                    'An exquisite blend of style and functionality designed to elevate your sipping experience.',
                  isFeatured: false,
                  inventory: 10000,
                },
              ],
            },
          },
        ],
      },
    },
  });

  // Tops
  await prisma.category.create({
    data: {
      name: 'Tops',
      slug: 'tops',
      storeId: store.id,
      products: {
        create: [
          {
            name: 'Hoodie',
            slug: 'hoodie',
            price: 100,
            variants: {
              create: [
                {
                  color: 'Pink',
                  slug: 'pink',
                  size: '',
                  image: 'https://utfs.io/f/f8e6ff9e-9cb9-4754-b7b6-bd352499d57e-y44oz3.jpeg',
                  altText: 'An image of a pink hoodie.',
                  description: '',
                  isFeatured: false,
                  inventory: 10000,
                },
                {
                  color: 'Yellow',
                  slug: 'yellow',
                  size: '',
                  image: 'https://utfs.io/f/f7013618-df2a-4877-b8e3-8eb04fc57a0b-go3rn5.jpeg',
                  altText: 'An image of a yellow hoodie.',
                  description: '',
                  isFeatured: false,
                  inventory: 10000,
                },
              ],
            },
          },
          {
            name: 'T-shirt',
            slug: 't-shirt',
            price: 75,
            variants: {
              create: [
                {
                  color: 'Black',
                  slug: 'black',
                  size: '',
                  image: 'https://utfs.io/f/658ecb31-81fd-452d-b1df-cacd610314d9-m0j2va.jpeg',
                  altText: 'An image of a white tee shirt.',
                  description: '',
                  isFeatured: false,
                  inventory: 10000,
                },
                {
                  color: 'White',
                  slug: 'white',
                  size: '',
                  image: 'https://utfs.io/f/0b4b9e41-2cae-435c-9aab-b6718f1b0345-rdrr80.jpeg',
                  altText: 'An image of a white tee shirt.',
                  description: '',
                  isFeatured: false,
                  inventory: 10000,
                },
              ],
            },
          },
        ],
      },
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
