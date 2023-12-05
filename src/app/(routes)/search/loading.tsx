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
    </ul>
  );
}

function ProductCardLoading() {
  return (
    <li>
      <div className="h-full w-full">
        <div className="relative aspect-square rounded-md bg-gray-100 dark:bg-gray-700">
          <div className="aspect-square rounded-md object-cover">
            <div className="flex h-full items-center justify-center">
              <p className="text-sm">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
