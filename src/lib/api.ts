import { Category, Color, Inventory, Product, Size, Store } from '@prisma/client';
import { prisma } from './db';

export async function getStore(): Promise<Store> {
  return await prisma.store.findFirstOrThrow();
}

export async function getCategories(): Promise<Category[]> {
  return await prisma.category.findMany();
}

export async function getCategory(props: { name: string }): Promise<Category> {
  return await prisma.category.findFirstOrThrow({
    where: {
      slug: {
        equals: props.name,
        mode: 'insensitive',
      },
    },
  });
}

export type ProductWithColor = Product & { colors: Color[] };
export async function getSearchPage(props: {
  name?: string;
  sortKey?: string;
  order?: 'asc' | 'desc';
}): Promise<ProductWithColor[]> {
  return await prisma.product.findMany({
    include: {
      colors: true,
    },
    where: {
      name: {
        contains: props.name,
        mode: 'insensitive',
      },
    },
    orderBy: {
      price: props.sortKey === 'PRICE' ? props.order : undefined,
      createdAt: props.sortKey === 'RELEVANCE' ? props.order : undefined,
    },
  });
}

type CategoryWithProduct = Category & { products: ProductWithColor[] };
export async function getCategoryPage(props: {
  name?: string;
  sortKey?: string;
  order?: 'asc' | 'desc';
}): Promise<CategoryWithProduct> {
  return await prisma.category.findFirstOrThrow({
    include: {
      products: {
        orderBy: {
          price: props.sortKey === 'PRICE' ? props.order : undefined,
          createdAt: props.sortKey === 'RELEVANCE' ? props.order : undefined,
        },
        include: {
          colors: true,
        },
      },
    },
    where: {
      slug: {
        equals: props.name,
        mode: 'insensitive',
      },
    },
  });
}

export type FullProduct = Product & { colors: Color[]; sizes: Size[]; inventory: Inventory[] };
export async function getProductPage(props: { name: string }): Promise<FullProduct> {
  return await prisma.product.findFirstOrThrow({
    where: {
      slug: {
        equals: props.name,
        mode: 'insensitive',
      },
    },
    include: {
      colors: true,
      sizes: true,
      inventory: true,
    },
  });
}

// TODO
export async function getFeaturedProducts(props: { take: number }) {}
export async function getLatestArrivals(props: { take: number }) {}
