import { LoadingLatestArrivalsList } from '@/components/layout/home/latest-arrivals-list';
import { Container } from '@/components/ui/container';

export default function Loading() {
  return (
    <Container className="px-4">
      <section className="py-2">
        <h2 className="mb-2 text-xl font-medium">Shop Latest Arrivals</h2>
        <LoadingLatestArrivalsList />
      </section>

      <section className="py-2">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-1 text-xl font-medium">Build your dream closet</h2>
          <h3 className="mb-3 font-thin">& inspire your next style</h3>
        </div>
        <div className="space-y-2">
          <div>marquee1</div>
          <div>marquee2</div>
        </div>
      </section>
    </Container>
  );
}
