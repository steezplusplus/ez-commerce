import { prisma } from './db';
import { Product } from './types';

export async function getStore() {
  return await prisma.store.findFirstOrThrow();
}

export async function getAllCategory() {
  return await prisma.category.findMany();
}

export async function getSearchPage(props: { name?: string; order?: 'asc' | 'desc' }): Promise<Product[]> {
  const products = await prisma.inventory.findMany({
    include: {
      color: true,
      product: true,
    },
    where: {
      product: {
        name: {
          contains: props.name,
          mode: 'insensitive',
        },
      },
    },
  });

  return products.map((product) => {
    return {
      id: product.id,
      name: product.product.name,
      slug: product.product.slug,
      handle: product.color.value,
      price: product.product.price,
      image: product.color.image,
      altText: product.color.altText,
    };
  });
}

export async function getCategoryPage(props: { name: string; order?: 'asc' | 'desc' }): Promise<Product[]> {
  const category = await prisma.inventory.findMany({
    include: {
      color: true,
      product: true,
    },
    where: {
      product: {
        category: {
          name: {
            equals: props.name,
            mode: 'insensitive',
          },
        },
      },
    },
  });

  return category.map((product) => {
    return {
      id: product.id,
      name: product.product.name,
      slug: product.product.slug,
      handle: product.color.value,
      price: product.product.price,
      image: product.color.image,
      altText: product.color.altText,
    };
  });
}

export async function getLatestProducts(props: { take: number }): Promise<Product[]> {
  const inventory = await prisma.inventory.findMany({
    include: {
      color: true,
      product: true,
    },
    orderBy: {
      color: {
        createdAt: 'desc',
      },
    },
    take: props.take,
  });
  return inventory.map((product) => {
    return {
      id: product.productId,
      name: product.product.name,
      slug: product.product.slug,
      handle: product.color.value,
      price: product.product.price,
      image: product.color.image,
      altText: product.color.altText,
    };
  });
}

export async function getFeaturedProducts(props: { take: number }): Promise<Product[]> {
  const inventory = await prisma.inventory.findMany({
    include: {
      color: true,
      product: true,
    },
    where: {
      color: {
        isFeatured: true,
      },
    },
    take: props.take,
  });

  return inventory.map((product) => {
    return {
      id: product.productId,
      name: product.product.name,
      slug: product.product.slug,
      handle: product.color.value,
      price: product.product.price,
      image: product.color.image,
      altText: product.color.altText,
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
