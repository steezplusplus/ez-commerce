import { SortFilterItem } from 'lib/constants';

type FilterOptionProps = {
  option: SortFilterItem;
};

export function FilterOption(props: FilterOptionProps) {
  const { option } = props;
  return <option>{option.title}</option>;
}
