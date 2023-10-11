import { prisma } from '../../lib/db';

export default async function Home() {
  const stores = await prisma.store.findMany();
  const categories = await prisma.category.findMany({
    where: {
      storeId: stores[0].id
    },
  })
  console.log(stores);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {stores.map((store) => {
        return (
          <p key={store.id}>{store.name}</p>
        );
      })}
      {categories.map((store) => {
        return (
          <p key={store.id}>{store.name}</p>
        );
      })}
    </main>
  )
}
