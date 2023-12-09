import { Price } from 'components/ui/price';

export function ProductInfo({ name, price }: { name: string; price: number }) {
  return (
    <div>
      <p className="text-lg font-semibold group-hover/card:underline">{name}</p>
      <span className="text-sm text-gray-500">
        <Price amount={String(price)} />
      </span>
    </div>
  );
}
