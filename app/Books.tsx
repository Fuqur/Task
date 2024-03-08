import React from 'react';
import { GetServerSideProps } from 'next';
import { getBooks } from './BookService';

interface Book {
    id: string;
    title: string;
    author: string;
    cover: string;
    description: string;
}


interface Props {
  books: Book[];
}

const Books: React.FC<Props> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const books = await getBooks();

  return {
    props: { books },
  };
};