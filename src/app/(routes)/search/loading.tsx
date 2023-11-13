import { Grid, GridItem } from 'components/ui/grid';

export default function Loading() {
  return (
    <Grid className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return <GridItem key={index} className="animate-pulse bg-neutral-100 dark:bg-neutral-900" />;
        })}
    </Grid>
  );
}
