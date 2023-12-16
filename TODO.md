# TODO LIST

## Testing

- Unit test all user interactions with react testing library and jest.
- Setup Coveralls to track code coverage.
- Create GitHub Action to run unit tests, block merging to main.

## Homepage

- Finish design

## Search Page

- Sort by color
- Preview Modal

## Category Page

- None?

## Product page

- Scroll to selected product

## Checkout page

- Loading UI
- On clicking checkout, route to new page to thank the customer, then redirect to the homepage after timeout.

## Mobile

- Search Modal

## CI/CD Pipelines

- Dependabot

## Consistency

- Inconsistent usage of Grid, GridItem.
- Inconsistent usage of Button
- Inconsistent loading UI. Using both spinner and animate-pulse. Stick to animate-pulse

## Cart components

- All these should check if mounted then return jsx from the server if not. Move loading states down I think?

## Images

- Test what happens when there is no color or no size for product
- I know that I dont have fallback `src` attributes for <Image />

## Database

- Rename Color.value -> Color.slug
- Rename Size.value -> Size.slug
