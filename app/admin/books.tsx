import React from 'react';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53');
  const books = await res.json();

  return {
    props: {
      books,
    },
  };
};

const AdminBooksPage: React.FC<{ books: any[] }> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

export default AdminBooksPage;