import Image from 'next/image';

import { getStore } from 'lib/api';

// TODO Dark mode logo
export async function CircleLogo() {
  const store = await getStore();

  return (
    <Image
      alt={`${store.name} logo`}
      src="/logo.jpg"
      className="mb-2 h-12 w-12 rounded-full"
      width="48"
      height="48"
    />
  );
}
