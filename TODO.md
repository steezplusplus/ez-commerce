# HIGH PRIORITY

- Toasts should show the product name, color and size when added to or removed from cart.
- Refactor database columns Color.value -> Color.slug, Size.value -> Size.slug. Update downstream typings.

# LOW PRIORITY

- Create better testing data in the seed:

  - Product with color and no size
  - Product with size and no color
  - Product with no size or color

- DB Schema has weird unique constraints. Look into proper uniqueness.

- Tab, TabGroup

  - lacks accessability via keyboard navigation.
  - Should be its own component for Gallery
  - Does not show on mobile

- Product page fully incomplete
  - Sroll to product based on color selection via URL
  - loading.tsx
- Handle scenario where a product exists with no Color. Show "no images for this product" in UI.
- Homepage fully incomplete
- Footer should have more information and links for good SEO.
- Utilize `default export` as NextJS recommends.
- Inconsistent loading UI. Using both spinner and animate-pulse.
- <Price /> loading placeholder height depends on parents font size, CLS issues if is not `text-sm`.

# Finalizations

- Manual A11y testing.
- Dependabot
- Unit test all user interactions with react testing library and jest.
- Setup Coveralls to track code coverage.
- Create GitHub Action to run unit tests, block merging to main.

# Stretches

- Create Order model. After checkout, route to a new page that shows the user their order. Thank them, and re-direct to the homepage.
- Sort products by available colors on the search and category page.
- Toasts should be floated to their relevant objects.
