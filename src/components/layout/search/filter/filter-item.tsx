import { SortFilterItem } from 'lib/constants';

type FilterItemProps = {
  item: SortFilterItem;
};

export function FilterItem(props: FilterItemProps) {
  const { item } = props;
  return <li>{item.title}</li>;
}
