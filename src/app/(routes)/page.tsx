import { Carousel } from 'components/ui/carousel';
import { Container } from 'components/ui/container';
import { SlowMarquee } from 'components/ui/marquee';
import { ProductWithColor, getFeaturedProducts } from 'lib/api';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts({ take: 9 });
  return (
    <Container className="px-4">
      <Marquees featuredProducts={featuredProducts} />
    </Container>
  );
}

function Marquees({ featuredProducts }: { featuredProducts: ProductWithColor[] }) {
  return (
    <section>
      <h2 id="featured-products-id" className="mb-2 text-xl font-medium">
        Build your dream closet
      </h2>
      <h3 className="text-sm font-thin">Inspire your style</h3>
      <SlowMarquee ariaLabelledBy="featured-products-id" products={featuredProducts} />
    </section>
  );
}

function Carousels({ featuredProducts }: { featuredProducts: ProductWithColor[] }) {
  return (
    <section className="flex flex-col gap-x-8 md:flex-row">
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
    </section>
  );
}
