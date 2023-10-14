'use client';

import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from 'next/navigation';

import { createUrl } from "lib/utils";

const searchId = 'search-id';
const pathName = '/search';

export function Search() {
  const router = useRouter();
  const readOnlySearchParams = useSearchParams();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const inputElement = formElement.search as HTMLInputElement;
    const newParams = new URLSearchParams(readOnlySearchParams.toString());

    if (inputElement.value) {
      newParams.set('q', inputElement.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl(pathName, newParams));
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <label className="sr-only" htmlFor={searchId}>Search products</label>
      <input
        key={readOnlySearchParams?.get('q')}
        type="text"
        name="search"
        id={searchId}
        autoComplete="off"
        defaultValue={readOnlySearchParams?.get('q') || ''}
        className="w-full rounded-lg border bg-white pr-4 pl-8 py-2 text-sm text-black dark:border-neutral-800 dark:bg-transparent dark:text-white"
      />
      <SearchIcon size="16" color="gray" className="absolute top-3 left-2"/>
    </form>
  );
}