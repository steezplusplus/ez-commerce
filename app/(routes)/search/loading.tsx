export default function Loading() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
    </ul>
  );
}

function ProductCardLoading() {
  return (
    <li>
      {/* Product Image */}
      <div className="aspect-square animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
      {/* Product Name */}
      <div className="mt-1 h-6 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
      {/* Product Price */}
      <div className="mt-1 h-5 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
    </li>
  );
}
