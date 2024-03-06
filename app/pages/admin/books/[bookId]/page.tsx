import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchBookById } from '../../../../api'; 

interface Book {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

const AdminBookDetailPage: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div>
      <h1>Edit Book: {book.title}</h1>
    </div>
  );
};

export default AdminBookDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const bookId = params?.bookId as string;

  if (!bookId) {
    return {
      notFound: true, 
    };
  }

  const res = await fetchBookById(bookId);
  const book: Book = await res.json();

  return {
    props: {
      book,
    },
  };
};