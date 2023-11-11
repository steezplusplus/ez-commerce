import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Carousel } from 'components/ui/carousel';
import { Container } from 'components/ui/container';
import { Marquee } from 'components/ui/marquee';
import { getLatestArrivals } from 'lib/api';

export default async function Home() {
  const latestProducts = await getLatestArrivals({ take: 9 });

  return (
    <>
      <Container>
        <h2 className="my-2 pl-2 text-xl">Latest Arrivals</h2>
        <Carousel products={latestProducts} />
      </Container>
      <Marquee
        messages={[
          '=Digital=',
          'Traverse the technospace',
          '=Digital=',
          'Electrify your style',
          '=Digital=',
          'Fight mass production',
          '=Digital=',
          'Free Shipping on all orders',
        ]}
      />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
