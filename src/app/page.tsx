import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { Marquee } from 'components/ui/marquee';
// import { getLatestArrivals } from 'lib/api';

export default async function Home() {
  // const latestProducts = await getLatestArrivals({ take: 5 });

  return (
    <>
      <Container>
        <h2 className="my-2 pl-2 text-xl">Latest Arrivals</h2>
        {/* <Carousel products={latestProducts} /> */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-2 pl-2 text-xl">More to Explore</h2>
          <div className="grid grid-cols-3 gap-x-2">
            <div className="border">
              <h3>Collection</h3>
              <p>Explore Now</p>
            </div>
            <div className="border">
              <h3>Objects of Desire</h3>
              <p>Shop Gifts</p>
            </div>
            <div className="border">
              <h3>Digital Label</h3>
              <p>Explore Now</p>
            </div>
          </div>
        </div>
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
      </Container>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
