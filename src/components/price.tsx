'use client';

type PriceProps = {
  amount: string;
  currencyCode?: string;
}

export function Price(props: PriceProps) {
  const { amount, currencyCode = 'USD' } = props;
  
  return (
    <p>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}`}
      <span>{`${currencyCode}`}</span>
    </p>
  );
}
