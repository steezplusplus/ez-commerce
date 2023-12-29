import Image from 'next/image';

export function CircleLogo() {
  return (
    <Image
      alt="A logo image for the website"
      priority={true}
      src="/logo.jpg"
      className="h-12 w-12 rounded-full dark:grayscale dark:hover:grayscale-0"
      width="48"
      height="48"
    />
  );
}
