import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
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
