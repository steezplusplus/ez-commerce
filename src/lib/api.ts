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
      colors: true,
      sizes: true,
    },
  });
}

// TODO Why search where name instead of slug?
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
          colors: true,
        },
      },
    },
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
