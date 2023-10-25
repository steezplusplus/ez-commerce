import { SortFilterItem } from 'lib/constants';
import { FilterItem } from './filter-item';
import { FilterOption } from './filter-option';

type FilterProps = {
  list: SortFilterItem[];
  title: string;
};

export async function Filter(props: FilterProps) {
  const { list, title } = props;
  return (
    <nav>
      <h3 className="mb-1 text-sm">{title}</h3>
      <div className="hidden md:block">
        <ul>
          {list.map((item, i) => {
            return <FilterItem key={i} item={item} />;
          })}
        </ul>
      </div>
      <div className="block md:hidden">
        <select>
          {list.map((opt, i) => {
            return <FilterOption key={i} option={opt} />;
          })}
        </select>
      </div>
    </nav>
  );
}
