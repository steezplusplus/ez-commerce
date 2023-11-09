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

  await prisma.category.create({
    data: {
      name: 'Drinkware',
      slug: 'drinkware',
      storeId: store.id,
      products: {
        create: [
          {
            name: 'Coffee Mug',
            slug: 'mug',
            description: '16oz double wall ceramic body with a padded bottom.',
            price: 15,
            images: [
              'https://utfs.io/f/a5c84a2e-ebda-4d70-be34-a476c7a50197-m0iy29.jpeg',
              'https://utfs.io/f/d23f59b0-1296-4ee3-b619-d972500ad60c-rdrw11.jpeg',
            ],
            colors: ['Black', 'White'],
            sizes: ['16 oz.'],
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
            price: 200,
            images: [
              'https://utfs.io/f/c4be5481-1c42-4661-906f-b436152f9e92-3p70be.jpeg',
              'https://utfs.io/f/0daf3012-0965-4054-af61-9fd06fbd1715-86tc8a.jpeg',
            ],
            colors: ['Black', 'Green'],
            sizes: [],
          },
          {
            name: 'Baseball Cap',
            slug: 'baseball-cap',
            description: '',
            price: 150,
            images: [
              'https://utfs.io/f/d3dc985d-6118-4cf1-898e-b560f0360e6e-y5x62w.jpeg',
              'https://utfs.io/f/2a0e339b-265e-4519-b100-2c2d8bf05be7-m0iq6c.jpeg',
              'https://utfs.io/f/831b3317-d7d3-46c2-8655-08e2781af040-rds3wy.jpeg',
            ],
            colors: ['Green', 'Black', 'White'],
            sizes: [],
          },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Tops',
      slug: 'tops',
      storeId: store.id,
      products: {
        create: [
          {
            name: 'T-shirt',
            slug: 't-shirt',
            description: 'Fabric blend of Supima Cotton and Micromodal.',
            price: 120,
            images: [
              'https://utfs.io/f/658ecb31-81fd-452d-b1df-cacd610314d9-m0j2va.jpeg',
              'https://utfs.io/f/0b4b9e41-2cae-435c-9aab-b6718f1b0345-rdrr80.jpeg',
            ],
            colors: ['Black', 'White'],
            sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
          },
          {
            name: 'Logo Tie Dye Tee',
            slug: 'logo-tie-dye-tee',
            description:
              'Fabric blend of Supima Cotton and Micromodal. Each tie-dye shirt is unique.',
            price: 160,
            images: [
              'https://utfs.io/f/f78d04b9-0869-48bb-b9e8-874fb6f873b7-pruti1.jpeg',
              'https://utfs.io/f/61f3664a-6b8d-42c7-afb0-0723f1e3b448-pruti0.jpeg',
            ],
            colors: [],
            sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
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
