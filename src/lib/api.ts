import { prisma } from './db';

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

export async function getCategories({ take = 100, skip = 0 }) {
  return await prisma.category.findMany({
    skip: skip,
    take: take,
  });
}

export async function getStore() {
  return await prisma.store.findFirstOrThrow();
}
