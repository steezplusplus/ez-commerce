import { SortFilterItem } from '../../../../lib/constants';
import { FilterItem } from './filter-item';
import { FilterSelect } from './filter-select';

type FilterProps = {
  list: SortFilterItem[];
  title: string;
};

export async function Filter(props: FilterProps) {
  const { list, title } = props;
  return (
    <nav className="md:sticky md:top-10">
      <h3 className="mb-1 text-sm">{title}</h3>
      <div className="hidden md:block">
        <ul>
          {list.map((item, i) => {
            return <FilterItem key={i} item={item} />;
          })}
        </ul>
      </div>
      <div className="block md:hidden">
        <FilterSelect list={list} />
      </div>
    </nav>
  );
}
