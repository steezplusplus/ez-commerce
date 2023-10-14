'use client';

import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from 'next/navigation';
import React from "react";

import { createUrl } from "lib/utils";

const searchId = 'search-id';
const pathName = 'search';

export function Search() {
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const inputDefaultValue = currentSearchParams?.get('q') || '';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const inputElement = formElement.search as HTMLInputElement;
    const newParams = new URLSearchParams(currentSearchParams.toString());

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
        type="text"
        name="search"
        id={searchId}
        autoComplete="off"
        defaultValue={inputDefaultValue}
        className="w-full rounded-lg border bg-white pr-4 pl-8 py-2 text-sm text-black dark:border-neutral-800 dark:bg-transparent dark:text-white"
      />
      <SearchIcon size="16" color="gray" className="absolute top-3 left-2"/>
    </form>
  );
}