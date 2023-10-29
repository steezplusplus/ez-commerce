'use client';

import { createUrl } from 'lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type ProductFormProps = {
  sizes: string[];
  colors: string[];
};

// TODO messy af
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
              const colorLowerCase = color.toLowerCase();
              const colorSearchParams = new URLSearchParams(searchParams.toString());
              colorSearchParams.set('color', colorLowerCase);
              const colorUrl = createUrl(pathname, colorSearchParams);
              const isChecked = searchParams.get('color') === colorLowerCase;
              return (
                <Radio
                  displayName="Sizes"
                  name="color"
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
              const sizeLowerCase = size.toLowerCase();
              const sizeSearchParams = new URLSearchParams(searchParams.toString());
              sizeSearchParams.set('size', sizeLowerCase);
              const sizeUrl = createUrl(pathname, sizeSearchParams);
              const isChecked = searchParams.get('size') === sizeLowerCase;
              return (
                <Radio
                  displayName="Sizes"
                  name="size"
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
  displayName: string;
  onChange: () => void;
  checked?: boolean;
};
function Radio(props: RadioProps) {
  return (
    <label className="mr-1 flex justify-center rounded border px-2 py-1">
      {props.displayName}
      <input
        checked={props.checked}
        onChange={props.onChange}
        name={props.name}
        className="ml-1"
        type="radio"
      />
    </label>
  );
}
