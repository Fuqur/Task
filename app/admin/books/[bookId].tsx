import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Book {
    id: string;
    title: string;
    author: string;
    cover: string;
    description: string;
}

interface EditBookPageProps {
  book: Book;
}

export const getServerSideProps: GetServerSideProps<EditBookPageProps> = async (context) => {
  const { bookId } = context.params as ParsedUrlQuery;
  
  if (!bookId) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53/`);
    const book: Book = await res.json();
    
    return {
      props: {
        book,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const EditBookPage: React.FC<EditBookPageProps> = ({ book }) => {
  return <div>Edit Book Page {book.title}</div>;
};

export default EditBookPage;