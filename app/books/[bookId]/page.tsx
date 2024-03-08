import React from 'react';

type Book = {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
};

export async function getStaticPaths() {
  const res = await fetch('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53');
  const books: Book[] = await res.json();

  const paths = books.map((book) => ({
    params: { bookId: book._id }, 
  }));

  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps({ params }: { params: { bookId: string } }) {
  const res = await fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53/${params.bookId}`);
  const book: Book = await res.json();

  return {
    props: {
      book,
    },
  };
}

const BookDetailPage = ({ book }: { book: Book }) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetailPage;