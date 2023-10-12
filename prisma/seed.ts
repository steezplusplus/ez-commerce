import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.info('🌱 Starting seed...');

  await prisma.product.deleteMany();
  await prisma.variation.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  const store = await prisma.store.create({
    data: {
      name: "Jesse's Store",
    }
  });

  const shirtsCategory = await prisma.category.create({
    data: {
      name: 'Shirts',
      storeId: store.id,
    }
  });

  const shoesCategory = await prisma.category.create({
    data: {
      name: 'Shoes',
      storeId: store.id,
    }
  });

  await prisma.variation.create({
    data: {
      name: 'White',
      categoryId: shirtsCategory.id,
    }
  });

  await prisma.variation.create({
    data: {
      name: 'Blue',
      categoryId: shirtsCategory.id,
    }
  });

  await prisma.variation.create({
    data: {
      name: 'Red',
      categoryId: shirtsCategory.id,
    }
  });

  await prisma.variation.create({
    data: {
      name: '8',
      categoryId: shoesCategory.id,
    }
  });

  await prisma.variation.create({
    data: {
      name: '9',
      categoryId: shoesCategory.id,
    }
  });

  await prisma.variation.create({
    data: {
      name: '10',
      categoryId: shoesCategory.id,
    }
  });

  await prisma.product.create({
    data: {
      name: 'Tee Shirt',
      description: 'A description of a tee shirt',
      categoryId: shirtsCategory.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'Sneakers',
      description: 'A description of sneakers',
      categoryId: shoesCategory.id,
    },
  });

  console.info('🌲 Finished seed!');
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