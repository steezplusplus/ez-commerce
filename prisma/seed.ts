import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.inventory.deleteMany();
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

  const categoryDrinkware = await prisma.category.create({
    data: {
      name: 'Drinkware',
      slug: 'drinkware',
      storeId: store.id,
    },
  });

  const productMug = await prisma.product.create({
    data: {
      name: 'Mug',
      slug: 'mug',
      description: 'An exquisite blend of style and functionality designed to elevate your sipping experience.',
      categoryId: categoryDrinkware.id,
    },
  });

  const colorMugWhite = await prisma.color.create({
    data: {
      name: 'White',
      value: 'white',
      image: 'https://utfs.io/f/d23f59b0-1296-4ee3-b619-d972500ad60c-rdrw11.jpeg',
      altText: 'An image of a 16 oz white mug.',
      isFeatured: false,
      productId: productMug.id,
    },
  });

  const colorMugBlack = await prisma.color.create({
    data: {
      name: 'Black',
      value: 'black',
      image: 'https://utfs.io/f/a5c84a2e-ebda-4d70-be34-a476c7a50197-m0iy29.jpeg',
      altText: 'An image of a 16 oz black mug.',
      isFeatured: true,
      productId: productMug.id,
    },
  });

  const sizeMugSixteenOunce = await prisma.size.create({
    data: {
      name: '16 oz.',
      value: '16-oz',
      productId: productMug.id,
    },
  });

  await prisma.inventory.create({
    data: {
      inventory: 100,
      sku: 'mug-black-16-oz',
      productId: productMug.id,
      colorId: colorMugBlack.id,
      sizeId: sizeMugSixteenOunce.id,
      price: 30,
    },
  });

  await prisma.inventory.create({
    data: {
      inventory: 100,
      sku: 'mug-white-16-oz',
      productId: productMug.id,
      colorId: colorMugWhite.id,
      sizeId: sizeMugSixteenOunce.id,
      price: 30,
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
