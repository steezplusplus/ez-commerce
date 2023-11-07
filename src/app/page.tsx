import Link from 'next/link';
import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { Grid, GridItem } from 'components/ui/grid';
import { getHomePage } from 'lib/api';

export default async function Home() {
  const products = await getHomePage({ take: 9 });

  return (
    <>
      <Container className="flex h-full items-center justify-center">
        <Grid className="pb-4">
          {products.map((product) => {
            return (
              <GridItem key={product.id}>
                <Link className="block h-full w-full" href={`/product/${product.slug}`}>
                  <div className="relative flex aspect-square h-full max-h-[550px] w-full flex-col items-center justify-center overflow-hidden">
                    <p className="text-sm">No images found for this product.</p>
                    <div className="absolute bottom-0 left-0">
                      <h3>{product.name}</h3>
                    </div>
                  </div>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
