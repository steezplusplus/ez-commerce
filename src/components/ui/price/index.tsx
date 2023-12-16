'use client';
import { useEffect, useState } from 'react';

type PriceProps = {
  amount: string;
  currencyCode?: string;
};

export function Price(props: PriceProps) {
  const { amount, currencyCode = 'USD' } = props;
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return <LoadingPrice />;
  }

  return (
    <p>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol',
      }).format(parseFloat(amount))}`}
      <span>{` ${currencyCode}`}</span>
    </p>
  );
}

function LoadingPrice() {
  return <div className="h-5 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />;
}
