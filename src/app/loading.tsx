import { Container } from 'components/ui/container';
import { Grid, GridItem } from 'components/ui/grid';

export default function Loading() {
  return (
    <Container className="flex flex-col gap-8 px-4 pb-4 md:flex-row">
      <div className="order-first w-full flex-none md:max-w-[9rem]" />
      <div className="order-last min-h-screen w-full md:order-none">
        <Grid className="pb-4">
          {Array(12)
            .fill(0)
            .map((_, index) => {
              return (
                <GridItem
                  key={index}
                  className="animate-pulse bg-neutral-100 dark:bg-neutral-900"
                />
              );
            })}
        </Grid>
      </div>
      <div className="order-none flex-none md:order-last md:w-[9rem]" />
    </Container>
  );
}
