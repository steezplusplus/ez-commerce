import { Categories } from "components/layout/search/categories/categories";
import { Filter } from "components/layout/search/filter/filter";
import { Suspense } from "react";

type CategoryLayoutProps = {
  children: React.ReactNode;
};

export default async function CategoryLayout(props: CategoryLayoutProps) {
  const { children } = props;

  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Categories />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>

        <div className="order-none flex-none md:order-last md:w-[125px]">
          <Filter />
        </div>
      </div>
    </Suspense>
  );
}