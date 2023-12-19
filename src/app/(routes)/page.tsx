import { Carousel } from 'components/ui/carousel';
import { Container } from 'components/ui/container';
import { FastMarquee, SlowMarquee } from 'components/ui/marquee';

// Marquees, Latest arrivals
// https://github.com/steezplusplus/digital-commerce/commit/3d6d4aa5cf8c978b39b1f42bd5e9e861e9c771db#diff-655dc9e3d0aa561e3fa164bf48bd89cb0f5da65e0a567f8ebbf9dd791a0e7f40
export default async function HomePage() {
  return (
    <Container className="px-4 pb-4">
      <FastMarquee />
      <SlowMarquee />
      <Carousel frames={['carousel', 'carousel', 'carousel', 'carousel', 'carousel', 'carousel', 'carousel']} />
    </Container>
  );
}
