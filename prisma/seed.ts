import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.info('🌱 Starting seed');

  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  const store = await prisma.store.create({
    data: {
      name: "Jesse's Store",
    }
  });

  const category = await prisma.category.create({
    data: {
      name: 'Shirts',
      storeId: store.id,
    }
  });

  await prisma.product.create({
    data: {
      name: 'White Tee',
      categoryId: category.id,
    },
  });

  console.info('🌲 Finished seed');
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