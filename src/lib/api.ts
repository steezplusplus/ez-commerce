import { prisma } from './db';

export async function getStore() {
  return await prisma.store.findFirstOrThrow();
}

export async function getAllCategory() {
  return await prisma.category.findMany();
}

export async function getSearchPage(props: { name?: string; order?: 'asc' | 'desc' }) {
  const products = await prisma.product.findMany({
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
      colors: true,
    },
  });
  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.colors[0]?.image as string,
      altText: product.colors[0]?.altText as string,
    };
  });
}

export async function getCategoryPage(props: { name: string; order?: 'asc' | 'desc' }) {
  const category = await prisma.category.findFirstOrThrow({
    where: {
      slug: {
        equals: props.name,
      },
    },
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
  });

  return category.products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.colors[0]?.image as string,
      altText: product.colors[0]?.image as string,
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
    },
  });
}

export async function getLatestArrivals(props: { take: number }) {
  const colors = await prisma.color.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Product: {
        select: {
          name: true,
          slug: true,
          price: true,
        },
      },
    },
    take: props.take,
  });

  return colors.map((color) => {
    return {
      id: color.id,
      name: color.name,
      value: color.value,
      image: color.image,
      altText: color.altText,
      productName: color.Product.name,
      productSlug: color.Product.slug,
      price: color.Product.price,
    };
  });
}

export async function getFeaturedProducts(props: { take: number }) {
  const colors = await prisma.color.findMany({
    where: {
      isFeatured: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Product: {
        select: {
          name: true,
          slug: true,
          price: true,
        },
      },
    },
    take: props.take,
  });

  return colors.map((color) => {
    return {
      id: color.id,
      name: color.name,
      value: color.value,
      image: color.image,
      altText: color.altText,
      productName: color.Product.name,
      productSlug: color.Product.slug,
      price: color.Product.price,
    };
  });
}
