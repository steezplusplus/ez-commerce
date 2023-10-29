type ProductFormProps = {
  sizes: string[];
  colors: string[];
};

// TODO Form should control search params. Include them in product added to localstorage
export function ProductForm(props: ProductFormProps) {
  const { sizes, colors } = props;
  return (
    <>
      {colors.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Colors</h3>
          <form className="flex flex-wrap gap-1">
            {colors.map((color) => {
              return <Radio name={color} key={color} />;
            })}
          </form>
        </div>
      )}
      {sizes.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Sizes</h3>
          <form className="flex flex-wrap gap-1">
            {sizes.map((size) => {
              return <Radio name={size} key={size} />;
            })}
          </form>
        </div>
      )}
    </>
  );
}

type RadioProps = {
  name: string;
};
function Radio(props: RadioProps) {
  const { name } = props;
  return (
    <label className="mr-1 flex justify-center rounded border px-2 py-1">
      {name}
      <input className="ml-1" type="radio" name="sizes" />
    </label>
  );
}
