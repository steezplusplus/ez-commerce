'use client';

import { createUrl } from 'lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type ProductFormProps = {
  sizes: string[];
  colors: string[];
};

// TODO Form should control search params. Include them in product added to localstorage
export function ProductForm(props: ProductFormProps) {
  const { sizes, colors } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParams = (url: string): void => {
    router.replace(url, { scroll: false });
  };

  return (
    <>
      {colors.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Colors</h3>
          <fieldset className="flex flex-wrap gap-1">
            {colors.map((color) => {
              const colorSearchParams = new URLSearchParams(searchParams.toString());
              colorSearchParams.set('color', color);
              const colorUrl = createUrl(pathname, colorSearchParams);
              const isChecked = searchParams.get('color') === color;
              return (
                <Radio
                  name={color}
                  key={color}
                  onChange={() => updateParams(colorUrl)}
                  checked={isChecked}
                />
              );
            })}
          </fieldset>
        </div>
      )}
      {sizes.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Sizes</h3>
          <form className="flex flex-wrap gap-1">
            {sizes.map((size) => {
              const sizeSearchParams = new URLSearchParams(searchParams.toString());
              sizeSearchParams.set('size', size);
              const sizeUrl = createUrl(pathname, sizeSearchParams);
              const isChecked = searchParams.get('size') === size;
              return (
                <Radio
                  name={size}
                  key={size}
                  onChange={() => updateParams(sizeUrl)}
                  checked={isChecked}
                />
              );
            })}
          </form>
        </div>
      )}
    </>
  );
}

type RadioProps = {
  name: string;
  onChange: () => void;
  checked?: boolean;
};
function Radio(props: RadioProps) {
  const { name } = props;
  return (
    <label className="mr-1 flex justify-center rounded border px-2 py-1">
      {name}
      <input
        checked={props.checked}
        onChange={props.onChange}
        className="ml-1"
        type="radio"
        name="sizes"
      />
    </label>
  );
}
