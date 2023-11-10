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
        <Marquee
          messages={[
            '=Digital=',
            'Traverse the technospace',
            '=Digital=',
            'Electrify your style',
            '=Digital=',
            'Fight mass production',
          ]}
        />
        <h2 className="my-2 pl-2 text-xl">Something</h2>
        <Carousel products={products} />
        <h2 className="my-2 pl-2 text-xl">Something</h2>
        <Carousel products={products} />
        <h2 className="my-2 pl-2 text-xl">Something</h2>
        <Carousel products={products} />
      </Container>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
