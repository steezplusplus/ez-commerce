export default async function ProductPage({ params }: { params: { handle: string } }) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <p>Gallery</p>
          <p>{params.handle}</p>
        </div>

        <div className="basis-full lg:basis-2/6">
          <p>Description</p>
        </div>
      </div>
      <p>Related Products</p>
    </div>
  );
}
