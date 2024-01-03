import { LatestArrivalList } from '@/components/layout/home/latest-arrivals-list';
import { Container } from '@/components/ui/container';
import { FastMarquee, SlowMarquee } from '@/components/ui/marquee';
import { getFeaturedProducts, getLatestArrivals } from '@/lib/api';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts({ take: 9 });
  const latestArrivals = await getLatestArrivals({ take: 4 });

  return (
    <Container className="px-4">
      <section className="py-2">
        <h2 className="mb-2 text-xl font-medium">Shop Latest Arrivals</h2>
        <LatestArrivalList products={latestArrivals} />
      </section>

      <section className="py-2">
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
