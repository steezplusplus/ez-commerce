import { ProductForm } from 'components/product/form';
import { Gallery } from 'components/product/gallery';
import { Container } from 'components/ui/container';
import { getProductPage } from 'lib/api';
import { Metadata } from 'next';

type ProductPageProps = {
  params: {
    product: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata({ params }: { params: { product: string } }): Promise<Metadata> {
  const product = await getProductPage({ name: params.product }); // TODO Just create a getProduct. Overfetching? or is this cacheing.

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.colors[0]?.image as string,
          alt: product.colors[0]?.altText as string,
        },
      ],
    },
  };
}

// TODO Use Grid, GridItem
export default async function ProductPage(props: ProductPageProps) {
  const { color: selectedColor, size: selectedSize } = props.searchParams as { [key: string]: string };
  const product = await getProductPage({ name: props.params.product });

  return (
    <Container className="px-4 pb-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          className="
              bottom-0 flex flex-col
              justify-center self-start
              md:sticky md:top-10 md:aspect-square
            "
        >
          <ProductForm product={product} selectedColor={selectedColor} selectedSize={selectedSize} />
        </div>
        <Gallery colors={product.colors} />
      </div>
    </Container>
  );
}
