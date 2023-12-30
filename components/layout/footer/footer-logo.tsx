import Link from 'next/link';

import { CircleLogo } from '@/components/ui/circle-logo';

export function FooterLogo({ storeName }: { storeName: string }) {
  const href = '/';
  return (
    <div>
      <Link className="flex items-center gap-2" href={href}>
        <CircleLogo />
        <h3>{storeName}</h3>
      </Link>
    </div>
  );
}
