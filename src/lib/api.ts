import { prisma } from './db';

export async function getHomePage({ take = 100, skip = 0 }) {
  return await prisma.product.findMany({
    skip: skip,
    take: take,
  });
}

type GetSearchPageParams = {
  searchValue?: string;
  order?: 'asc' | 'desc';
  take?: number;
  skip?: number;
};

export async function getSearchPage(props: GetSearchPageParams) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: props.searchValue,
        mode: 'insensitive',
      },
    },
    orderBy: {
      price: props.order,
    },
    skip: props.skip,
    take: props.take,
  });
}

type GetCategoryPageProps = {
  name: string;
  order?: 'asc' | 'desc';
  take?: number;
  skip?: number;
};

export async function getCategoryPage(props: GetCategoryPageProps) {
  return await prisma.category.findFirstOrThrow({
    where: {
      name: {
        equals: props.name,
        mode: 'insensitive',
      },
    },
    include: {
      products: {
        orderBy: {
          price: props.order,
        },
      },
    },
    skip: props.skip,
    take: props.take,
  });
}

export async function getCategories({ take = 100, skip = 0 }) {
  return await prisma.category.findMany({
    skip: skip,
    take: take,
  });
}

export async function getStore() {
  return await prisma.store.findFirstOrThrow();
}

type GetProductProps = {
  slug: string;
};
export async function getProduct(props: GetProductProps) {
  return await prisma.product.findFirstOrThrow({
    where: {
      slug: props.slug,
    },
  });
}
