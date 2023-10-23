import { getCategories } from 'lib/api';
import { MobileCategoriesSelect } from './mobile-categories-select';

export async function MobileCategories() {
  const categories = await getCategories({});

  return <MobileCategoriesSelect categories={categories} />;
}
