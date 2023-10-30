import { Radio } from './radio';

type ProductFormProps = {
  sizes: string[];
  colors: string[];
};

export function ProductForm(props: ProductFormProps) {
  const { sizes, colors } = props;

  return (
    <>
      {colors.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Colors</h3>
          <fieldset className="flex flex-wrap gap-1">
            {colors.map((color) => {
              return <Radio name="color" value={color} key={color} />;
            })}
          </fieldset>
        </div>
      )}
      {sizes.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Sizes</h3>
          <form className="flex flex-wrap gap-1">
            {sizes.map((size) => {
              return <Radio name="size" value={size} key={size} />;
            })}
          </form>
        </div>
      )}
    </>
  );
}
