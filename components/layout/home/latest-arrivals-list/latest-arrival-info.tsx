import { Price } from '@/components/ui/price';

export function LatestArrivalInfo({ name, price }: { name: string; price: number }) {
  return (
    <div>
      <h2 className="text-lg font-semibold group-hover/card:underline">{name}</h2>
      <h4 className="text-sm text-gray-500">
        <Price amount={String(price)} />
      </h4>
    </div>
  );
}

export function LoadingLatestArrivalInfo() {
  return (
    <div className="mt-1 space-y-1">
      {/* Product name */}
      <div className="h-6 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
      {/* Price */}
      <div className="h-5 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
    </div>
  );
}
