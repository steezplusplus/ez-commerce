'use client';

import { createUrl } from 'lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type RadioProps = {
  name: string;
  value: string;
};

export function Radio(props: RadioProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParams = (url: string): void => {
    router.replace(url, { scroll: false });
  };

  const valueLowerCase = props.value.toLowerCase();
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set(props.name, props.value);
  const newUrl = createUrl(pathname, newSearchParams);
  const isChecked = searchParams.get(props.name) === props.value;

  return (
    <label className="mr-1 flex justify-center rounded border px-2 py-1">
      {props.value}
      <input
        name={props.name}
        value={props.value}
        onChange={() => updateParams(newUrl)}
        checked={isChecked}
        className="ml-1"
        type="radio"
      />
    </label>
  );
}
