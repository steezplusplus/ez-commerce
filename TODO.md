# HIGH PRIORITY

- Toasts should show the product name, color and size when added to or removed from cart.

- Modal

  - Should accept header prop

- Product Modal

  - Update useProduct API to accept type `ProductWithColor` from API.
  - Pass product data from search page to the ProductModal.
  - Display the product name, description images, sizes, colors, and allow add to cart.

- Search Modal....

- Refactor database columns Color.value -> Color.slug, Size.value -> Size.slug. Update downstream typings.

# LOW PRIORITY

- Product page fully incomplete
  - Sroll to product based on color selection via URL
  - loading.tsx
- Show "No image" for products without colors. Currently all products have images, so it won't happen currently but its not safe.
- Put all providers into a RootProvider component.
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
