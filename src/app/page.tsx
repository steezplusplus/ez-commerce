import { prisma } from '../../lib/db';

export default async function Home() {
  const stores = await prisma.store.findMany();
  console.log(stores);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {stores.map((store) => {
        return (
          <p key={store.id}>{store.name}</p>
        );
      })}
    </main>
  )
}
