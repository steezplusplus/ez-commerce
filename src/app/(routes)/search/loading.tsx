import { Grid, GridItem } from 'components/ui/grid';

export default function Loading() {
  return (
    <Grid>
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <GridItem key={index} className="animate-pulse bg-neutral-100 dark:bg-neutral-900" />
          );
        })}
    </Grid>
  );
}
