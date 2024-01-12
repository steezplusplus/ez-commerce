# HIGH PRIORITY

- Add links to categories in navbar
- New images in header
- "Add to Cart" in "Quick Shop Modal"
- Circular colors for images
- Cart Modal
- Related products on Product page
- Toasts should show the product name, color and size when added to or removed from cart.
- Refactor database columns Color.value -> Color.slug, Size.value -> Size.slug. Update downstream typings.
- Footer should have more information and links for good SEO.

- Create better testing data in the seed:
  - Product with color and no size
  - Product with size and no color
  - Product with no size or color

# LOW PRIORITY

- Cleanup metadata in root layout

- DB Schema has weird unique constraints. Look into proper uniqueness.

- Tab, TabGroup

  - lacks accessability via keyboard navigation.
  - Should be its own component for Gallery
  - Does not show on mobile

- Product page fully incomplete
  - Sroll to product based on color selection via URL OR show gallery
  - loading.tsx?

# Finalizations

- Manual A11y testing.
- Dependabot
- Code coverage

- Remake ThemeSelect with HeadlessUI ListBox
- Remake Product Form Radio with HeadlessUI RadioGroup
- Remake ReactHotToast with HeadlessUI Popover

# Stretches

- Create Order model. After checkout, route to a new page that shows the user their order. Thank them, and re-direct to the homepage.
- Sort products by available colors on the search and category page.
- Toasts should be floated to their relevant objects.
