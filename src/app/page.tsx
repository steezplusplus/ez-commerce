import { Footer } from 'components/layout/footer/footer';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center">
        <p>Homepage</p>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
