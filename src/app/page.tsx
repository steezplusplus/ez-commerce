import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Carousel } from 'components/ui/carousel';
import { Container } from 'components/ui/container';
import { Marquee } from 'components/ui/marquee';
import { getFeaturedProducts, getLatestArrivals } from 'lib/api';

export default async function Home() {
  const latestArrivals = await getLatestArrivals({ take: 5 });
  const featuredProducts = await getFeaturedProducts({ take: 5 });

  return (
    <>
      <Container>
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
        <h2 className="my-2 pl-2 text-xl">Latest Arrivals</h2>
        <Carousel items={latestArrivals} />
        <h2 className="my-2 pl-2 text-xl">Featured Products</h2>
        <Carousel items={featuredProducts} />
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
