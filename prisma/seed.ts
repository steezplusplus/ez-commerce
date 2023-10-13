import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.info('🌱 Starting seed...');

  await prisma.variationOptions.deleteMany();
  await prisma.variation.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  await prisma.store.create({
    data: {
      name: 'My store',
      categories: {
         create: [
          {
            name: 'Bags',
            slug: 'bags',
          },

          { 
            name: 'Drinkware',
            slug: 'drinkware',
            products: {
              create: [
                { 
                  name: 'Cup',
                  slug: 'cup',
                  description: '12oz double wall ceramic body with a padded bottom.',
                  price: 15.00,
                  image: 'https://placehold.co/600x400/png'
                },
                { 
                  name: 'Mug',
                  slug: 'mug',
                  description: '12 oz Beck Cork-Bottom Mug.',
                  price: 15.00,
                  image: 'https://placehold.co/600x400/png'
                }
              ]
            }
          },
          {
            name: 'Electronics',
            slug: 'electronics',
          },
          {
            name: 'Footware',
            slug: 'footware',
          },
          {
            name: 'Headwear',
            slug: 'headwear',
          },
          {
            name: 'Hoodies',
            slug: 'hoodies',
          },
          { 
            name: 'Jackets',
            slug: 'jackets',
            products: {
              create: [
                { 
                  name: 'Bomber Jacket' ,
                  slug: 'bomber-jacket',
                  description: 'The multi-season must-have jacket: light and classic for daily wear, with a soft fleece lining for extra warmth.',
                  price: 50.00,
                  image: 'https://placehold.co/600x400/png'
                }
              ]
            }
          },
          {
            name: 'Kids',
            slug: 'kids',
          },
          {
            name: 'Pets',
            slug: 'pets',
          },
          { 
            name: 'Shirts',
            slug: 'shirts',
            products: {
              create: [
                { 
                  name: 'T-Shirt',
                  slug: 't-shirt',
                  description: '60% combed ringspun cotton/40% polyester jersey tee.',
                  price: 25.00,
                  image: 'https://placehold.co/600x400/png',
                  variations: {
                    create: [
                      { 
                        name: 'size',
                      },
                      {
                        name: 'color',
                      },
                    ],
                  },
                },
                { 
                  name: 'Prism T-Shirt',
                  slug: 'prism-t-shirt',
                  description: '60% combed ringspun cotton/40% polyester jersey tee.',
                  price: 25.00,
                  image: 'https://placehold.co/600x400/png'
                },
                { 
                  name: 'Circles T-Jacket',
                  slug: 'circles-t-shirt',
                  description: '60% combed ringspun cotton/40% polyester jersey tee.',
                  price: 25.00,
                  image: 'https://placehold.co/600x400/png'
                },
              ]
            }
          },
          {
            name: 'Stickers',
            slug: 'stickers',
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