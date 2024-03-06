import React from 'react';
import Layout from '@/app/components/layout';
import styles from './Book.module.css';
import { GetServerSideProps } from 'next';
import { fetchBookById } from '../../../api'; 

type Book = {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
};

type Props = {
  book: Book;
};

export default function Book({ book }: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <img src={book.cover} alt={book.title} className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.title}>{book.title}</h1>
          <p className={styles.author}>{book.author}</p>
          <p className={styles.description}>{book.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const bookId = params?.id as string;
    const book = await fetchBookById(bookId);

    return {
      props: {
        book,
      },
    };
  } catch (error) {
    console.error('Error fetching book:', error);
    return {
      notFound: true,
    };
  }
};