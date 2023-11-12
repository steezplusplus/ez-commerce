import { prisma } from './db';

export async function getStore() {
  return await prisma.store.findFirstOrThrow();
}

export async function getAllCategory() {
  return await prisma.category.findMany();
}

export async function getSearchPage(props: { name?: string; order?: 'asc' | 'desc' }) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: props.name,
        mode: 'insensitive',
      },
    },
    orderBy: {
      price: props.order,
    },
    include: {
      variants: true,
    },
  });
}

export async function getCategoryPage(props: { name: string; order?: 'asc' | 'desc' }) {
  return await prisma.category.findFirstOrThrow({
    where: {
      name: {
        contains: props.name,
        mode: 'insensitive',
      },
    },
    include: {
      products: {
        orderBy: {
          price: props.order,
        },
        include: {
          variants: true,
        },
      },
    },
  });
}

export async function getProductPage(props: { name: string }) {
  return await prisma.product.findFirstOrThrow({
    where: {
      name: {
        contains: props.name,
        mode: 'insensitive',
      },
    },
    include: {
      variants: true,
    },
  });
}
