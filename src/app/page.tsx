import { Container } from 'components/container/container';
import { Footer } from 'components/layout/footer/footer';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <Container className="flex h-full items-center justify-center">
        <p>Homepage</p>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
