import React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { fetchAllBooks } from '../../api';

interface Book {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

const AdminBooksPage: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div>
      <h1>Admin Books Page</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <Link href={`/admin/books/${book._id}`}>
              <a>{book.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBooksPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetchAllBooks();
  const books: Book[] = await res.json();

  return {
    props: {
      books,
    },
  };
};