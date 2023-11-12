import Image from 'next/image';

// import { getStore } from 'lib/api';

// TODO Dark mode logo
export async function CircleLogo() {
  // const store = await getStore();

  return (
    <Image
      // alt={`${store.name} logo`}
      alt="TODO"
      priority={true}
      src="/logo.jpg"
      className="h-12 w-12 rounded-full"
      width="48"
      height="48"
    />
  );
}
