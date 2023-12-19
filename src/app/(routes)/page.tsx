// import { Container } from 'components/ui/container';
import { Marquee } from 'components/ui/marquee';
import { ProductWithColor } from 'lib/api';

// Marquees, Latest arrivals
// https://github.com/steezplusplus/digital-commerce/commit/3d6d4aa5cf8c978b39b1f42bd5e9e861e9c771db#diff-655dc9e3d0aa561e3fa164bf48bd89cb0f5da65e0a567f8ebbf9dd791a0e7f40

const hoodies: ProductWithColor[] = [
  {
    id: '121807a6-fced-4ab9-aa04-00af4362714a',
    name: 'Hoodie',
    slug: 'hoodie',
    description: 'A hoodie for all seasons. Versatile, cozy, and perfect for any weather.',
    price: 60,
    categoryId: 'f105d599-6d0d-45bc-bcbc-2c6e171b50a0',
    createdAt: new Date('2023-12-09T05:27:47.380Z'),
    updatedAt: new Date('2023-12-09T05:27:47.380Z'),
    colors: [
      {
        id: 'be8ec298-d458-4b58-a1c6-e70ee248223b',
        name: 'Blue',
        value: 'blue',
        altText: 'An image of a blue hoodie with a logo that says digital',
        image: 'https://utfs.io/f/2988b9f7-d850-44f2-a831-9bdaebc77452-cshlo5.jpeg',
        isFeatured: false,
        productId: '121807a6-fced-4ab9-aa04-00af4362714a',
        createdAt: new Date('2023-12-09T05:27:47.454Z'),
        updatedAt: new Date('2023-12-09T05:27:47.454Z'),
      },
      {
        id: '0cecc78c-fbd6-4476-952f-864f7233fff7',
        name: 'Pink',
        value: 'pink',
        altText: 'An image of a pink hoodie with a logo that says digital',
        image: 'https://utfs.io/f/f8e6ff9e-9cb9-4754-b7b6-bd352499d57e-y44oz3.jpeg',
        isFeatured: false,
        productId: '121807a6-fced-4ab9-aa04-00af4362714a',
        createdAt: new Date('2023-12-09T05:27:47.528Z'),
        updatedAt: new Date('2023-12-09T05:27:47.528Z'),
      },
      {
        id: '459e12e7-58e1-46e3-90ef-a456ba527d6c',
        name: 'Purple',
        value: 'purple',
        altText: 'An image of a purple hoodie with a logo that says digital',
        image: 'https://utfs.io/f/9725e90d-4927-462a-90d6-06c281f20d02-sqcqzb.jpeg',
        isFeatured: false,
        productId: '121807a6-fced-4ab9-aa04-00af4362714a',
        createdAt: new Date('2023-12-09T05:27:47.608Z'),
        updatedAt: new Date('2023-12-09T05:27:47.608Z'),
      },
      {
        id: '729294fd-eef7-4536-9f57-2aa1fa27c88c',
        name: 'Green',
        value: 'green',
        altText: 'An image of a green hoodie with a logo that says digital',
        image: 'https://utfs.io/f/78421ffa-7daa-43f9-861f-b9f33c6289e7-56sxj2.jpeg',
        isFeatured: true,
        productId: '121807a6-fced-4ab9-aa04-00af4362714a',
        createdAt: new Date('2023-12-09T05:27:47.681Z'),
        updatedAt: new Date('2023-12-09T05:27:47.681Z'),
      },
      {
        id: 'f68ce35d-a8d7-44e4-926f-344092c7ac83',
        name: 'Orange',
        value: 'orange',
        altText: 'An image of a orange hoodie with a logo that says digital',
        image: 'https://utfs.io/f/37053290-f283-47c0-9e39-4d985f84a9a9-8e39e1.jpeg',
        isFeatured: false,
        productId: '121807a6-fced-4ab9-aa04-00af4362714a',
        createdAt: new Date('2023-12-09T05:27:47.759Z'),
        updatedAt: new Date('2023-12-09T05:27:47.759Z'),
      },
    ],
  },
];

export default async function HomePage() {
  return <Marquee products={hoodies} />;
}
