// import { Container } from 'components/ui/container';
import { Carousel } from 'components/ui/carousel';
import { Container } from 'components/ui/container';
import { Marquee } from 'components/ui/marquee';
import { getFeaturedProducts } from 'lib/api';

// Marquees, Latest arrivals
// https://github.com/steezplusplus/digital-commerce/commit/3d6d4aa5cf8c978b39b1f42bd5e9e861e9c771db#diff-655dc9e3d0aa561e3fa164bf48bd89cb0f5da65e0a567f8ebbf9dd791a0e7f40

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts({ take: 9 });
  return (
    <Container className="px-4">
      <h2 id="featured-products-id" className="mb-2 text-xl font-medium">
        Featured Products
      </h2>
      <Marquee ariaLabelledBy="featured-products-id" products={featuredProducts} />

      <div className="flex flex-col gap-x-8 md:flex-row">
        <div className="my-2 w-full p-1">
          <h2 id="carousel-category1-id" className="my-2 text-xl font-medium">
            Category 1
          </h2>
          <Carousel ariaLabelledBy="carousel-category1-id" products={featuredProducts} />
        </div>
        <div className="my-2 w-full p-1">
          <h2 id="carousel-category2-id" className="my-2 text-xl font-medium">
            Category2
          </h2>
          <Carousel ariaLabelledBy="carousel-category2-id" products={featuredProducts} />
        </div>
      </div>
    </Container>
  );
}
