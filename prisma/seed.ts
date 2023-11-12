import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.size.deleteMany();
  await prisma.color.deleteMany();
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
            description:
              'An exquisite blend of style and functionality designed to elevate your sipping experience.',
            colors: {
              create: [
                {
                  name: 'White',
                  value: 'white',
                  image: 'https://utfs.io/f/d23f59b0-1296-4ee3-b619-d972500ad60c-rdrw11.jpeg',
                  altText: 'An image of a 16 oz white mug.',
                  isFeatured: false,
                },
                {
                  name: 'Black',
                  value: 'black',
                  image: 'https://utfs.io/f/a5c84a2e-ebda-4d70-be34-a476c7a50197-m0iy29.jpeg',
                  altText: 'An image of a 16 oz black mug.',
                  isFeatured: false,
                },
              ],
            },
            sizes: {
              create: [
                {
                  name: '16 oz.',
                  value: '16-oz',
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
            description:
              'A fusion of coziness and style designed to be your ultime go-to piece in the fall season.',
            colors: {
              create: [
                {
                  name: 'Pink',
                  value: 'pink',
                  image: 'https://utfs.io/f/f8e6ff9e-9cb9-4754-b7b6-bd352499d57e-y44oz3.jpeg',
                  altText: 'An image of a pink hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Yellow',
                  value: 'yellow',
                  image: 'https://utfs.io/f/f7013618-df2a-4877-b8e3-8eb04fc57a0b-go3rn5.jpeg',
                  altText: 'An image of a yellow hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Tie-Dye',
                  value: 'tie-dye',
                  image: 'https://utfs.io/f/56984cd7-cf23-4f2a-8a9a-e4c2c6af24d2-855r3i.jpeg',
                  altText: 'An image of a tie dye hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Silver',
                  value: 'silver',
                  image: 'https://utfs.io/f/860796f5-18c2-4634-abee-a3ef60a1081c-ykeh2w.jpeg',
                  altText: 'An image of a silver hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Green',
                  value: 'green',
                  image: 'https://utfs.io/f/78421ffa-7daa-43f9-861f-b9f33c6289e7-56sxj2.jpeg',
                  altText: 'An image of a green hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Red',
                  value: 'red',
                  image: 'https://utfs.io/f/9f145f62-bc7b-4de6-9c4c-02684e16c684-8whij0.jpeg',
                  altText: 'An image of a red hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Blue',
                  value: 'blue',
                  image: 'https://utfs.io/f/2988b9f7-d850-44f2-a831-9bdaebc77452-cshlo5.jpeg',
                  altText: 'An image of a blue hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Purple',
                  value: 'purple',
                  image: 'https://utfs.io/f/9725e90d-4927-462a-90d6-06c281f20d02-sqcqzb.jpeg',
                  altText: 'An image of a purple hoodie.',
                  isFeatured: false,
                },
                {
                  name: 'Orange',
                  value: 'orange',
                  image: 'https://utfs.io/f/37053290-f283-47c0-9e39-4d985f84a9a9-8e39e1.jpeg',
                  altText: 'An image of an orange hoodie.',
                  isFeatured: false,
                },
              ],
            },
            sizes: {
              create: [
                {
                  name: 'Small',
                  value: 'small',
                },
                {
                  name: 'Medium',
                  value: 'medium',
                },
                {
                  name: 'Large',
                  value: 'large',
                },
                {
                  name: 'X-Large',
                  value: 'x-large',
                },
              ],
            },
          },
          {
            name: 'T-shirt',
            slug: 't-shirt',
            price: 75,
            description: 'A classic, versatile style that will effortlessly complement any outfit.',
            colors: {
              create: [
                {
                  name: 'Black',
                  value: 'black',
                  image: 'https://utfs.io/f/658ecb31-81fd-452d-b1df-cacd610314d9-m0j2va.jpeg',
                  altText: 'An image of a white tee shirt.',
                  isFeatured: false,
                },
                {
                  name: 'White',
                  value: 'white',
                  image: 'https://utfs.io/f/0b4b9e41-2cae-435c-9aab-b6718f1b0345-rdrr80.jpeg',
                  altText: 'An image of a white tee shirt.',
                  isFeatured: false,
                },
              ],
            },
            sizes: {
              create: [
                {
                  name: 'Small',
                  value: 'small',
                },
                {
                  name: 'Medium',
                  value: 'medium',
                },
                {
                  name: 'Large',
                  value: 'large',
                },
                {
                  name: 'X-Large',
                  value: 'x-large',
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
