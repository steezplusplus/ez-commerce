export type SortFilterItem = {
  title: string;
  slug: string;
  sortKey: 'RELEVANCE' | 'PRICE';
  order: 'asc' | 'desc';
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance: Ascending',
  slug: '',
  sortKey: 'RELEVANCE',
  order: 'asc',
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Relevance: Descending', slug: 'date-desc', sortKey: 'RELEVANCE', order: 'desc' },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', order: 'asc' },
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', order: 'desc' },
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart',
};
