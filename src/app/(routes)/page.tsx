// import { Suspense } from 'react';

// import { Footer } from 'components/footer';
import { Container } from 'components/ui/container';

export default async function HomePage() {
  return (
    <>
      <Container className="px-4 pb-4">
        <p>Todo homepage</p>
      </Container>
      {/* <Suspense>
        <Footer />
      </Suspense> */}
    </>
  );
}

function NoResults() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-neutral-500">No results found.</p>
    </div>
  );
}
