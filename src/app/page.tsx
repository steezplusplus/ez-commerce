import { prisma } from '../../lib/db';

export default async function Home() {
  const stores = await prisma.store.findMany();

  const categories = await prisma.category.findMany({
    where: {
      storeId: stores[0].id
    },
  })

  const shirtsVariants = await prisma.variation.findMany({
    where: {
      categoryId: categories[0].id,
    }
  });
  
  const shirtsProducts = await prisma.product.findMany({
    where: {
      categoryId: categories[0].id
    },
  });

  const shoesVariants = await prisma.variation.findMany({
    where: {
      categoryId: categories[1].id,
    }
  });
  
  const shoesProducts = await prisma.product.findMany({
    where: {
      categoryId: categories[1].id
    },
  });

  console.log(stores);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {stores.map((store) => {
        return (
          <h1 key={store.id}>{store.name}</h1>
        );
      })}
      <hr className='bg-slate-400 w-full m-2'/>
      <h2>{categories[0].name}</h2>
      <div className='flex gap-x-2'>
        {shirtsVariants.map((variant) => {
          return (
            <h2 key={variant.id}>{variant.name}</h2>
          );
        })}
      </div>
      {shirtsProducts.map((product) => {
        return (
          <p key={product.id}>{product.name} - {product.description}</p>
        );
      })}

      <hr className='bg-slate-400 w-full m-2'/>
      <h2>{categories[1].name}</h2>
      <div className='flex gap-x-2'>
        {shoesVariants.map((variant) => {
          return (
            <h2 key={variant.id}>{variant.name}</h2>
          );
        })}
      </div>
      {shoesProducts.map((product) => {
        return (
          <p key={product.id}>{product.name} - {product.description}</p>
        );
      })}
    </main>
  );
}
