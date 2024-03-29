import { createContext } from 'react';

const DIRECTORY_DATA = [
  {
    title: 'hats',
    imageUrl:
      'https://images.unsplash.com/photo-1552060155-4eac706a5515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
    id: 1,
    linkUrl: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl:
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    id: 2,
    linkUrl: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl:
      'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    id: 3,
    linkUrl: 'shop/sneakers',
  },
  {
    title: 'fairies',
    imageUrl:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens',
  },
  {
    title: 'unicorns',
    imageUrl:
      'https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  },
];

const DirectoryContext = createContext(DIRECTORY_DATA);

export default DirectoryContext;
