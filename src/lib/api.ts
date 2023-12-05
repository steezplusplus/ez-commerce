import { Category } from '@prisma/client';
import { prisma } from './db';
import { Product } from './types';

export async function getStore() {
  return await prisma.store.findFirstOrThrow();
}

export async function getCategories() {
  return await prisma.category.findMany();
}

export async function getCategory(props: { name: string }): Promise<Category> {
  return await prisma.category.findFirstOrThrow({
    where: {
      name: {
        contains: props.name,
        mode: 'insensitive',
      },
    },
  });
}

export async function getSearchPage(props: { name?: string; order?: 'asc' | 'desc' }): Promise<Product[]> {
  const products = await prisma.product.findMany({
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
      price: props.order,
    },
  });

  return products.flatMap((product) => {
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

export async function getCategoryPage(props: { name: string; order?: 'asc' | 'desc' }) {
  const category = await prisma.category.findFirstOrThrow({
    include: {
      products: {
        orderBy: {
          price: props.order,
        },
        include: {
          colors: true,
        },
      },
    },
    where: {
      name: {
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

export async function getFeaturedProducts(props: { take: number }): Promise<Product[]> {
  // TODO Not every product has a featured color
  const products = await prisma.product.findMany({
    include: {
      colors: {
        where: {
          isFeatured: true,
        },
      },
    },
    take: props.take,
  });

  // TODO assertions that every product has an image
  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      handle: product.colors[0]?.value as string,
      image: product.colors[0]?.image as string,
      altText: product.colors[0]?.altText as string,
    };
  });
}

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
