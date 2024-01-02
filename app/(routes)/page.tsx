import { Carousel } from '@/components/ui/carousel';
import { Container } from '@/components/ui/container';
import { FastMarquee, SlowMarquee } from '@/components/ui/marquee';
import { getFeaturedProducts, getLatestArrivals } from '@/lib/api';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts({ take: 9 });
  const latestArrivals = await getLatestArrivals({ take: 4 });

  return (
    <Container className="px-4">
      <section>
        <div className="mb-2 w-full p-1">
          <h2 id="carousel-latest-id" className="my-2 text-xl font-medium">
            Shop Latest Arrivals
          </h2>
          <Carousel ariaLabelledBy="carousel-latest-id" products={latestArrivals} />
        </div>
      </section>

      <section className="flex flex-col gap-x-8 md:flex-row">
        <div className="my-2 w-full p-1">
          <h2 id="carousel-headware-id" className="my-2 text-xl font-medium">
            Shop Headware
          </h2>
          <Carousel ariaLabelledBy="carousel-headware-id" products={featuredProducts} />
        </div>
        <div className="my-2 w-full p-1">
          <h2 id="carousel-tops-id" className="my-2 text-xl font-medium">
            Shop Tops
          </h2>
          <Carousel ariaLabelledBy="carousel-tops-id" products={featuredProducts} />
        </div>
      </section>

      <section className="flex flex-col gap-x-8 md:flex-row">
        <div className="my-2 w-full p-1">
          <h2 id="carousel-socks-id" className="my-2 text-xl font-medium">
            Shop Socks
          </h2>
          <Carousel ariaLabelledBy="carousel-socks-id" products={featuredProducts} />
        </div>
        <div className="my-2 w-full p-1">
          <h2 id="carousel-drinkware-id" className="my-2 text-xl font-medium">
            Shop Drinkware
          </h2>
          <Carousel ariaLabelledBy="carousel-drinkware-id" products={featuredProducts} />
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-1 text-xl font-medium">Build your dream closet</h2>
          <h3 className="mb-3 font-thin">& inspire your next style</h3>
        </div>
        <div className="space-y-2">
          <SlowMarquee products={featuredProducts} />
          <FastMarquee products={featuredProducts} />
        </div>
      </section>
    </Container>
  );
}
