import React from 'react';
import Link from 'next/link';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

const Page: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <div key={book.id}> 
          <Link href={`/books/${book.id}`}> 
            <a>{book.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;

export async function getServerSideProps() {
  try {
    const res = await fetch('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53');
    const books: Book[] = await res.json();

    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        books: [],
      },
    };
  }
}