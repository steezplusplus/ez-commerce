import Link from 'next/link';

export function ProjectInfo() {
  return (
    <div>
      <Link
        className="text-blue-500 hover:text-blue-700 hover:underline"
        href="https://github.com/steezplusplus/digital-commerce"
      >
        View source code
      </Link>
      <p className="mt-1 font-thin">Made by Jesse Breuer-Penello</p>
    </div>
  );
}
