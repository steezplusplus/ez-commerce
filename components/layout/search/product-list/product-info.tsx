import { Price } from '../../../ui/price';

export function ProductInfo({ name, price }: { name: string; price: number }) {
  return (
    <div>
      <h2 className="text-lg font-semibold group-hover/card:underline">{name}</h2>
      <h4 className="text-sm text-gray-500">
        <Price amount={String(price)} />
      </h4>
    </div>
  );
}
