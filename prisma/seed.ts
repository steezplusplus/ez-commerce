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

  // Tops - Hoodie
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

  // Tops - T-shirts
  const productTeeShirt = await prisma.product.create({
    data: {
      name: 'T-shirt',
      slug: 't-shirt',
      price: 15,
      description:
        'Back to basics with this soft and breathable cotton tee. A timeless essential, perfect for everyday wear.',
      categoryId: categoryTops.id,
    },
  });

  const colorTeeShirtWhite = await prisma.color.create({
    data: {
      name: 'White',
      value: 'white',
      image: 'https://utfs.io/f/0b4b9e41-2cae-435c-9aab-b6718f1b0345-rdrr80.jpeg',
      altText: 'An image of a plain white tee shirt.',
      isFeatured: false,
      productId: productTeeShirt.id,
    },
  });

  const colorTeeShirtBlack = await prisma.color.create({
    data: {
      name: 'Black',
      value: 'black',
      image: 'https://utfs.io/f/658ecb31-81fd-452d-b1df-cacd610314d9-m0j2va.jpeg',
      altText: 'An image of a plain black tee shirt.',
      isFeatured: true,
      productId: productTeeShirt.id,
    },
  });

  const sizeTeeShirtSmall = await prisma.size.create({
    data: {
      name: 'Small',
      value: 'small',
      productId: productTeeShirt.id,
    },
  });

  const sizeTeeShirtMedium = await prisma.size.create({
    data: {
      name: 'Medium',
      value: 'medium',
      productId: productTeeShirt.id,
    },
  });

  const sizeTeeShirtLarge = await prisma.size.create({
    data: {
      name: 'Large',
      value: 'large',
      productId: productTeeShirt.id,
    },
  });

  const sizeTeeShirtExtraLarge = await prisma.size.create({
    data: {
      name: 'X-Large',
      value: 'x-large',
      productId: productTeeShirt.id,
    },
  });

  await prisma.inventory.createMany({
    data: [
      {
        inventory: 100,
        sku: 'tee-shirt-black-small',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtBlack.id,
        sizeId: sizeTeeShirtSmall.id,
      },
      {
        inventory: 100,
        sku: 'tee-shirt-black-medium',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtBlack.id,
        sizeId: sizeTeeShirtMedium.id,
      },
      {
        inventory: 100,
        sku: 'tee-shirt-black-large',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtBlack.id,
        sizeId: sizeTeeShirtLarge.id,
      },
      {
        inventory: 100,
        sku: 'tee-shirt-black-extra-large',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtBlack.id,
        sizeId: sizeTeeShirtExtraLarge.id,
      },
      {
        inventory: 100,
        sku: 'tee-shirt-white-small',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtWhite.id,
        sizeId: sizeTeeShirtSmall.id,
      },
      {
        inventory: 100,
        sku: 'tee-shirt-white-medium',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtWhite.id,
        sizeId: sizeTeeShirtMedium.id,
      },
      {
        inventory: 100,
        sku: 'tee-shirt-white-large',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtWhite.id,
        sizeId: sizeTeeShirtLarge.id,
      },
      {
        inventory: 100,
        sku: 'tee-shirt-white-extra-large',
        productId: productTeeShirt.id,
        colorId: colorTeeShirtWhite.id,
        sizeId: sizeTeeShirtExtraLarge.id,
      },
    ],
  });

  // Tops - Tie-Dye T-Shirt
  const productTieDyeTeeShirt = await prisma.product.create({
    data: {
      name: 'Tie-Dye T-shirt',
      slug: 'tie-dye-t-shirt',
      price: 20,
      description: 'An ultimate blend of style and detail. Each tie-dye tee is made unique.',
      categoryId: categoryTops.id,
    },
  });

  const colorTieDyeTeeShirt = await prisma.color.create({
    data: {
      name: 'Tie-Dye',
      value: 'tie-dye',
      image: 'https://utfs.io/f/f78d04b9-0869-48bb-b9e8-874fb6f873b7-pruti1.jpeg',
      altText: 'An image of a tie-dye tee shirt with a logo that says digital.',
      isFeatured: true,
      productId: productTieDyeTeeShirt.id,
    },
  });

  const sizeTieDyeTeeShirtSmall = await prisma.size.create({
    data: {
      name: 'Small',
      value: 'small',
      productId: productTieDyeTeeShirt.id,
    },
  });

  const sizeTieDyeTeeShirtMedium = await prisma.size.create({
    data: {
      name: 'Medium',
      value: 'medium',
      productId: productTieDyeTeeShirt.id,
    },
  });

  const sizeTieDyeTeeShirtLarge = await prisma.size.create({
    data: {
      name: 'Large',
      value: 'large',
      productId: productTieDyeTeeShirt.id,
    },
  });

  const sizeTieDyeTeeShirtExtraLarge = await prisma.size.create({
    data: {
      name: 'X-Large',
      value: 'x-large',
      productId: productTieDyeTeeShirt.id,
    },
  });

  await prisma.inventory.createMany({
    data: [
      {
        inventory: 100,
        sku: 'tie-dye-tee-shirt-small',
        productId: productTieDyeTeeShirt.id,
        colorId: colorTieDyeTeeShirt.id,
        sizeId: sizeTieDyeTeeShirtSmall.id,
      },
      {
        inventory: 100,
        sku: 'tie-dye-tee-shirt-medium',
        productId: productTieDyeTeeShirt.id,
        colorId: colorTieDyeTeeShirt.id,
        sizeId: sizeTieDyeTeeShirtMedium.id,
      },
      {
        inventory: 100,
        sku: 'tie-dye-tee-shirt-large',
        productId: productTieDyeTeeShirt.id,
        colorId: colorTieDyeTeeShirt.id,
        sizeId: sizeTieDyeTeeShirtLarge.id,
      },
      {
        inventory: 100,
        sku: 'tie-dye-tee-shirt-extra-large',
        productId: productTieDyeTeeShirt.id,
        colorId: colorTieDyeTeeShirt.id,
        sizeId: sizeTieDyeTeeShirtExtraLarge.id,
      },
    ],
  });

  // Socks
  const categorySocks = await prisma.category.create({
    data: {
      name: 'Socks',
      slug: 'socks',
      storeId: store.id,
    },
  });

  const productSocks = await prisma.product.create({
    data: {
      name: 'Socks',
      slug: 'socks',
      price: 15,
      description: '',
      categoryId: categorySocks.id,
    },
  });

  const colorSocksBlack = await prisma.color.create({
    data: {
      name: 'Black',
      value: 'black',
      image: 'https://utfs.io/f/ac0edf5e-3a4f-4191-8d9c-8d165b410adb-b2m59b.jpeg',
      altText: 'An image of black socks',
      isFeatured: false,
      productId: productSocks.id,
    },
  });

  const colorSocksWhite = await prisma.color.create({
    data: {
      name: 'White',
      value: 'white',
      image: 'https://utfs.io/f/101eaff9-17da-4963-8e62-ee1379c5c4c7-x6mr91.jpeg',
      altText: 'An image of white socks',
      isFeatured: false,
      productId: productSocks.id,
    },
  });

  const colorSocksGray = await prisma.color.create({
    data: {
      name: 'Gray',
      value: 'gray',
      image: 'https://utfs.io/f/ef6f9c41-9675-46df-acfe-2fc639aadab7-4uybp.jpeg',
      altText: 'An image of gray socks',
      isFeatured: true,
      productId: productSocks.id,
    },
  });

  const socksSmall = await prisma.size.create({
    data: {
      name: 'Small (5-7)',
      value: 'small',
      productId: productSocks.id,
    },
  });

  const socksLarge = await prisma.size.create({
    data: {
      name: 'Medium (7-9)',
      value: 'medium',
      productId: productSocks.id,
    },
  });

  const socksMedium = await prisma.size.create({
    data: {
      name: 'Large (9-12)',
      value: 'large',
      productId: productSocks.id,
    },
  });

  const socksExtraLarge = await prisma.size.create({
    data: {
      name: 'X-Large (12-15)',
      value: 'x-large',
      productId: productSocks.id,
    },
  });

  await prisma.inventory.createMany({
    data: [
      {
        inventory: 100,
        sku: 'socks-black-small',
        productId: productSocks.id,
        colorId: colorSocksBlack.id,
        sizeId: socksSmall.id,
      },
      {
        inventory: 100,
        sku: 'socks-black-medium',
        productId: productSocks.id,
        colorId: colorSocksBlack.id,
        sizeId: socksMedium.id,
      },
      {
        inventory: 100,
        sku: 'socks-black-large',
        productId: productSocks.id,
        colorId: colorSocksBlack.id,
        sizeId: socksLarge.id,
      },
      {
        inventory: 100,
        sku: 'socks-black-extra-large',
        productId: productSocks.id,
        colorId: colorSocksBlack.id,
        sizeId: socksExtraLarge.id,
      },
      {
        inventory: 100,
        sku: 'socks-white-small',
        productId: productSocks.id,
        colorId: colorSocksWhite.id,
        sizeId: socksSmall.id,
      },
      {
        inventory: 100,
        sku: 'socks-white-medium',
        productId: productSocks.id,
        colorId: colorSocksWhite.id,
        sizeId: socksMedium.id,
      },
      {
        inventory: 100,
        sku: 'socks-white-large',
        productId: productSocks.id,
        colorId: colorSocksWhite.id,
        sizeId: socksLarge.id,
      },
      {
        inventory: 100,
        sku: 'socks-white-extra-large',
        productId: productSocks.id,
        colorId: colorSocksWhite.id,
        sizeId: socksExtraLarge.id,
      },
      {
        inventory: 100,
        sku: 'socks-gray-small',
        productId: productSocks.id,
        colorId: colorSocksGray.id,
        sizeId: socksSmall.id,
      },
      {
        inventory: 100,
        sku: 'socks-gray-medium',
        productId: productSocks.id,
        colorId: colorSocksGray.id,
        sizeId: socksMedium.id,
      },
      {
        inventory: 100,
        sku: 'socks-gray-large',
        productId: productSocks.id,
        colorId: colorSocksGray.id,
        sizeId: socksLarge.id,
      },
      {
        inventory: 100,
        sku: 'socks-gray-extra-large',
        productId: productSocks.id,
        colorId: colorSocksGray.id,
        sizeId: socksExtraLarge.id,
      },
    ],
  });

  // Headware
  const categoryHeadware = await prisma.category.create({
    data: {
      name: 'Headware',
      slug: 'headware',
      storeId: store.id,
    },
  });

  // Headware - Baseball Cap
  const productBaseballHat = await prisma.product.create({
    data: {
      name: 'Baseball Hat',
      slug: 'baseball-hat',
      description: 'Made from durable yet lightweight cotton. Caters to various head sizes and shapes.',
      price: 50,
      categoryId: categoryHeadware.id,
    },
  });

  const colorBaseballHatWhite = await prisma.color.create({
    data: {
      name: 'White',
      value: 'white',
      image: 'https://utfs.io/f/831b3317-d7d3-46c2-8655-08e2781af040-rds3wy.jpeg',
      altText: 'An image of a white hat that is embroidered with the word digital.',
      isFeatured: false,
      productId: productBaseballHat.id,
    },
  });

  const colorBaseballHatBlack = await prisma.color.create({
    data: {
      name: 'Black',
      value: 'black',
      image: 'https://utfs.io/f/2a0e339b-265e-4519-b100-2c2d8bf05be7-m0iq6c.jpeg',
      altText: 'An image of a black hat that is embroidered with the word digital.',
      isFeatured: false,
      productId: productBaseballHat.id,
    },
  });

  const colorBaseballHatGreen = await prisma.color.create({
    data: {
      name: 'Green',
      value: 'green',
      image: 'https://utfs.io/f/d3dc985d-6118-4cf1-898e-b560f0360e6e-y5x62w.jpeg',
      altText: 'An image of a green hat that is embroidered with the word digital.',
      isFeatured: true,
      productId: productBaseballHat.id,
    },
  });

  const sizeBaseballHatSmall = await prisma.size.create({
    data: {
      name: 'Small (53 - 58 cm)',
      value: 'small',
      productId: productBaseballHat.id,
    },
  });

  const sizeBaseballHatMedium = await prisma.size.create({
    data: {
      name: 'Medium (58 - 61 cm)',
      value: 'medium',
      productId: productBaseballHat.id,
    },
  });

  const sizeBaseballHatLarge = await prisma.size.create({
    data: {
      name: 'Large (61 - 65 cm)',
      value: 'large',
      productId: productBaseballHat.id,
    },
  });

  await prisma.inventory.createMany({
    data: [
      {
        inventory: 100,
        sku: 'baseball-cap-white-small',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatWhite.id,
        sizeId: sizeBaseballHatSmall.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-white-medium',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatWhite.id,
        sizeId: sizeBaseballHatMedium.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-white-large',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatWhite.id,
        sizeId: sizeBaseballHatLarge.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-black-small',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatBlack.id,
        sizeId: sizeBaseballHatSmall.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-black-medium',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatBlack.id,
        sizeId: sizeBaseballHatMedium.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-black-large',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatBlack.id,
        sizeId: sizeBaseballHatLarge.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-green-small',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatGreen.id,
        sizeId: sizeBaseballHatSmall.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-green-medium',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatGreen.id,
        sizeId: sizeBaseballHatMedium.id,
      },
      {
        inventory: 100,
        sku: 'baseball-cap-green-large',
        productId: productBaseballHat.id,
        colorId: colorBaseballHatGreen.id,
        sizeId: sizeBaseballHatLarge.id,
      },
    ],
  });

  // Headware - Beanie
  const productBeanie = await prisma.product.create({
    data: {
      name: 'Beanie',
      slug: 'beanie',
      description: 'Embrace warmth and style with our cozy Beanie. Crafted from soft knit fabric.',
      price: 45,
      categoryId: categoryHeadware.id,
    },
  });

  const colorBeanieBlack = await prisma.color.create({
    data: {
      name: 'Black',
      value: 'black',
      image: 'https://utfs.io/f/c4be5481-1c42-4661-906f-b436152f9e92-3p70be.jpeg',
      altText: 'An image of a black beanie that is embroidered with the word digital.',
      isFeatured: false,
      productId: productBeanie.id,
    },
  });

  const colorBeanieGreen = await prisma.color.create({
    data: {
      name: 'Green',
      value: 'green',
      image: 'https://utfs.io/f/0daf3012-0965-4054-af61-9fd06fbd1715-86tc8a.jpeg',
      altText: 'An image of a green beanie that is embroidered with the word digital.',
      isFeatured: true,
      productId: productBeanie.id,
    },
  });

  const sizeBeanieSmall = await prisma.size.create({
    data: {
      name: 'Small (53 - 58 cm)',
      value: 'small',
      productId: productBeanie.id,
    },
  });

  const sizeBeanieMedium = await prisma.size.create({
    data: {
      name: 'Medium (58 - 61 cm)',
      value: 'medium',
      productId: productBeanie.id,
    },
  });

  const sizeBeanieLarge = await prisma.size.create({
    data: {
      name: 'Large (61 - 65 cm)',
      value: 'large',
      productId: productBeanie.id,
    },
  });

  await prisma.inventory.createMany({
    data: [
      {
        inventory: 100,
        sku: 'beanie-black-small',
        productId: productBeanie.id,
        colorId: colorBeanieBlack.id,
        sizeId: sizeBeanieSmall.id,
      },
      {
        inventory: 100,
        sku: 'beanie-black-medium',
        productId: productBeanie.id,
        colorId: colorBeanieBlack.id,
        sizeId: sizeBeanieMedium.id,
      },
      {
        inventory: 100,
        sku: 'beanie-black-large',
        productId: productBeanie.id,
        colorId: colorBeanieBlack.id,
        sizeId: sizeBeanieLarge.id,
      },
      {
        inventory: 100,
        sku: 'beanie-green-small',
        productId: productBeanie.id,
        colorId: colorBeanieGreen.id,
        sizeId: sizeBeanieSmall.id,
      },
      {
        inventory: 100,
        sku: 'beanie-green-medium',
        productId: productBeanie.id,
        colorId: colorBeanieGreen.id,
        sizeId: sizeBeanieMedium.id,
      },
      {
        inventory: 100,
        sku: 'beanie-green-large',
        productId: productBeanie.id,
        colorId: colorBeanieGreen.id,
        sizeId: sizeBeanieLarge.id,
      },
    ],
  });

  // Sale
  await prisma.category.create({
    data: {
      name: 'Sale',
      slug: 'sale',
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
