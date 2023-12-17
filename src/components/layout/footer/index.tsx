import { getCategories, getStore } from 'lib/api';
import { FooterLogo } from './footer-logo';
import { FooterMenu } from './footer-menu';
import { ProjectInfo } from './project-info';
import { ThemeSelect } from './theme-select';

export async function Footer() {
  const store = await getStore();
  const categories = await getCategories();

  return (
    <footer
      className="
        flex
        flex-col
        gap-6
        border-t 
        border-neutral-200
        p-4
        dark:border-neutral-800
        md:flex-row md:gap-12
      "
    >
      <FooterLogo storeName={store.name} />
      <FooterMenu categories={categories} />
      <ThemeSelect />
      <ProjectInfo />
    </footer>
  );
}
