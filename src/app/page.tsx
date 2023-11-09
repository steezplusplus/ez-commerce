import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Carousel } from 'components/ui/carousel';
import { Container } from 'components/ui/container';
import { Marquee } from 'components/ui/marquee';
import { getHomePage } from 'lib/api';

export default async function Home() {
  const products = await getHomePage({ take: 9 });

  return (
    <>
      <Container>
        <Marquee />
        <Carousel products={products} />
      </Container>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
