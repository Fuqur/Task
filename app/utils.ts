import { cache } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

export const getBooks = cache(async () => {
  const res = await fetch('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53');
  const books: Book[] = await res.json();
  return books;
})
