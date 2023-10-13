import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.info('🌱 Starting seed...');

  await prisma.store.deleteMany();

  const store = await prisma.store.create({
    data: {
      name: 'My store',
      categories: {
         create: [
          { name: 'Jackets' },
          { name: 'Shirts' },
         ],
      },
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