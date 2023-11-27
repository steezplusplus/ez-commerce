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
      Color: true,
      Product: true,
    },
    where: {
      Product: {
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
      name: product.Product.name,
      slug: product.Product.slug,
      handle: product.Color.value,
      price: product.Product.price,
      image: product.Color.image,
      altText: product.Color.altText,
    };
  });
}

export async function getCategoryPage(props: { name: string; order?: 'asc' | 'desc' }): Promise<Product[]> {
  const category = await prisma.inventory.findMany({
    include: {
      Color: true,
      Product: true,
    },
    where: {
      Product: {
        Category: {
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
      name: product.Product.name,
      slug: product.Product.slug,
      handle: product.Color.value,
      price: product.Product.price,
      image: product.Color.image,
      altText: product.Color.altText,
    };
  });
}

export async function getLatestProducts(props: { take: number }): Promise<Product[]> {
  const inventory = await prisma.inventory.findMany({
    include: {
      Color: true,
      Product: true,
    },
    orderBy: {
      Color: {
        createdAt: 'desc',
      },
    },
    take: props.take,
  });
  return inventory.map((product) => {
    return {
      id: product.productId,
      name: product.Product.name,
      slug: product.Product.slug,
      handle: product.Color.value,
      price: product.Product.price,
      image: product.Color.image,
      altText: product.Color.altText,
    };
  });
}

export async function getFeaturedProducts(props: { take: number }): Promise<Product[]> {
  const inventory = await prisma.inventory.findMany({
    include: {
      Color: true,
      Product: true,
    },
    where: {
      Color: {
        isFeatured: true,
      },
    },
    take: props.take,
  });

  return inventory.map((product) => {
    return {
      id: product.productId,
      name: product.Product.name,
      slug: product.Product.slug,
      handle: product.Color.value,
      price: product.Product.price,
      image: product.Color.image,
      altText: product.Color.altText,
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
      Inventory: true,
    },
  });
}
