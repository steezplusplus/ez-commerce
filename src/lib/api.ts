import { prisma } from './db';

// TODO category should be a search param not its own page!

export async function getProducts({ q = '', take = 9, skip = 0 }) {
  return await prisma.product.findMany({
    where: {
      name: q,
    },
    skip: skip,
    take: take,
  });
}

export async function getProductsByPriceAsc({ q = '', take = 9, skip = 0 }) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: q,
      },
    },
    orderBy: {
      price: 'asc',
    },
    skip: skip,
    take: take,
  });
}

export async function getProductsByPriceDesc({ q = '', take = 9, skip = 0 }) {
  return await prisma.product.findMany({
    where: {
      name: q,
    },
    orderBy: {
      price: 'desc',
    },
    skip: skip,
    take: take,
  });
}

export async function getCategories({ take = 100, skip = 0 }) {
  return await prisma.category.findMany({
    skip: skip,
    take: take,
  });
}

export async function getProduct() {
  return await prisma.product.findFirst();
}

export async function getCategory() {
  return await prisma.category.findFirst({
    include: {
      products: true,
    },
  });
}

export async function getStore() {
  return await prisma.store.findFirstOrThrow();
}
