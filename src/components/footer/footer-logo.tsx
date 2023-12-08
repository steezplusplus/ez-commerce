import Link from 'next/link';

import { CircleLogo } from 'components/ui/circle-logo';

export function FooterLogo({ storeName }: { storeName: string }) {
  return (
    <Link className="flex items-center gap-2" href="/">
      <CircleLogo />
      {storeName}
    </Link>
  );
}
