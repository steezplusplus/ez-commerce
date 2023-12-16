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

// TODO The height that the loading placeholder should be varies depending on the parents font size. This causes CLS issues if the font size of the price is not `text-sm`.
function LoadingPrice() {
  return <div className="h-5 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />;
}
