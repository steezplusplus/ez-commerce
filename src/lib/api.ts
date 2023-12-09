import { Category, Color, Product, Store } from '@prisma/client';
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

// TODO Add explicit return type
export async function getCategoryPage(props: { name?: string; sortKey?: string; order?: 'asc' | 'desc' }) {
  const category = await prisma.category.findFirstOrThrow({
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

  return category.products.flatMap((product) => {
    return product.colors.map((color) => {
      return {
        id: color.id,
        handle: color.value,
        image: color.image,
        altText: color.altText,
        name: product.name,
        slug: product.slug,
        price: product.price,
      };
    });
  });
}

// TODO Add explicit return type
export async function getProductPage(props: { name: string }) {
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
