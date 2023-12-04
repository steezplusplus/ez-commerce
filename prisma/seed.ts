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

  // Drinkware
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
      price: 30,
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

  await prisma.inventory.createMany({
    data: [
      {
        inventory: 100,
        sku: 'mug-black-16-oz',
        productId: productMug.id,
        colorId: colorMugBlack.id,
        sizeId: sizeMugSixteenOunce.id,
      },
      {
        inventory: 100,
        sku: 'mug-white-16-oz',
        productId: productMug.id,
        colorId: colorMugWhite.id,
        sizeId: sizeMugSixteenOunce.id,
      },
    ],
  });

  // Tops
  const categoryTops = await prisma.category.create({
    data: {
      name: 'Tops',
      slug: 'tops',
      storeId: store.id,
    },
  });

  const productHoodie = await prisma.product.create({
    data: {
      name: 'Hoodie',
      slug: 'hoodie',
      price: 60,
      description: 'A hoodie for all seasons. Versatile, cozy, and perfect for any weather.',
      categoryId: categoryTops.id,
    },
  });

  const colorHoodieBlue = await prisma.color.create({
    data: {
      name: 'Blue',
      value: 'blue',
      image: 'https://utfs.io/f/2988b9f7-d850-44f2-a831-9bdaebc77452-cshlo5.jpeg',
      altText: 'An image of a blue hoodie with a logo that says digital',
      isFeatured: false,
      productId: productHoodie.id,
    },
  });

  const colorHoodiePink = await prisma.color.create({
    data: {
      name: 'Pink',
      value: 'pink',
      image: 'https://utfs.io/f/f8e6ff9e-9cb9-4754-b7b6-bd352499d57e-y44oz3.jpeg',
      altText: 'An image of a pink hoodie with a logo that says digital',
      isFeatured: false,
      productId: productHoodie.id,
    },
  });

  const colorHoodiePurple = await prisma.color.create({
    data: {
      name: 'Purple',
      value: 'purple',
      image: 'https://utfs.io/f/9725e90d-4927-462a-90d6-06c281f20d02-sqcqzb.jpeg',
      altText: 'An image of a purple hoodie with a logo that says digital',
      isFeatured: false,
      productId: productHoodie.id,
    },
  });

  const colorHoodieGreen = await prisma.color.create({
    data: {
      name: 'Green',
      value: 'green',
      image: 'https://utfs.io/f/78421ffa-7daa-43f9-861f-b9f33c6289e7-56sxj2.jpeg',
      altText: 'An image of a green hoodie with a logo that says digital',
      isFeatured: true,
      productId: productHoodie.id,
    },
  });

  const colorHoodieOrange = await prisma.color.create({
    data: {
      name: 'Orange',
      value: 'orange',
      image: 'https://utfs.io/f/37053290-f283-47c0-9e39-4d985f84a9a9-8e39e1.jpeg',
      altText: 'An image of a orange hoodie with a logo that says digital',
      isFeatured: false,
      productId: productHoodie.id,
    },
  });

  const sizeHoodieSmall = await prisma.size.create({
    data: {
      name: 'Small',
      value: 'small',
      productId: productHoodie.id,
    },
  });

  const sizeHoodieMedium = await prisma.size.create({
    data: {
      name: 'Medium',
      value: 'medium',
      productId: productHoodie.id,
    },
  });

  const sizeHoodieLarge = await prisma.size.create({
    data: {
      name: 'Large',
      value: 'large',
      productId: productHoodie.id,
    },
  });

  await prisma.inventory.createMany({
    data: [
      {
        inventory: 100,
        sku: 'hoodie-blue-small',
        productId: productHoodie.id,
        colorId: colorHoodieBlue.id,
        sizeId: sizeHoodieSmall.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-blue-medium',
        productId: productHoodie.id,
        colorId: colorHoodieBlue.id,
        sizeId: sizeHoodieMedium.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-blue-large',
        productId: productHoodie.id,
        colorId: colorHoodieBlue.id,
        sizeId: sizeHoodieLarge.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-pink-small',
        productId: productHoodie.id,
        colorId: colorHoodiePink.id,
        sizeId: sizeHoodieSmall.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-pink-medium',
        productId: productHoodie.id,
        colorId: colorHoodiePink.id,
        sizeId: sizeHoodieMedium.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-pink-large',
        productId: productHoodie.id,
        colorId: colorHoodiePink.id,
        sizeId: sizeHoodieLarge.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-purple-small',
        productId: productHoodie.id,
        colorId: colorHoodiePurple.id,
        sizeId: sizeHoodieSmall.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-purple-medium',
        productId: productHoodie.id,
        colorId: colorHoodiePurple.id,
        sizeId: sizeHoodieMedium.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-purple-large',
        productId: productHoodie.id,
        colorId: colorHoodiePurple.id,
        sizeId: sizeHoodieLarge.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-green-small',
        productId: productHoodie.id,
        colorId: colorHoodieGreen.id,
        sizeId: sizeHoodieSmall.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-green-medium',
        productId: productHoodie.id,
        colorId: colorHoodieGreen.id,
        sizeId: sizeHoodieMedium.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-green-large',
        productId: productHoodie.id,
        colorId: colorHoodieGreen.id,
        sizeId: sizeHoodieLarge.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-orange-small',
        productId: productHoodie.id,
        colorId: colorHoodieOrange.id,
        sizeId: sizeHoodieSmall.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-orange-medium',
        productId: productHoodie.id,
        colorId: colorHoodieOrange.id,
        sizeId: sizeHoodieMedium.id,
      },
      {
        inventory: 100,
        sku: 'hoodie-orange-large',
        productId: productHoodie.id,
        colorId: colorHoodieOrange.id,
        sizeId: sizeHoodieLarge.id,
      },
    ],
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
