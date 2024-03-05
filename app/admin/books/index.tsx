import React from 'react';
import Layout from '../../components/layout';
import Link from 'next/link';
import styles from './Books.module.css';
import { GetServerSideProps } from 'next';
import { fetchAllBooks } from '../../api'; 

type Book = {
  _id: string;
  title: string;
  author: string;
  cover: string;
};

type Props = {
  books: Book[];
};

export default function Books({ books }: Props) {
  return (
    <Layout>
      <h1>Books</h1>
      <ul className={styles.list}>
        {books.map((book) => (
          <li key={book._id} className={styles.item}>
            <Link href={`/books/${book._id}`}>
              <a className={styles.link}>
                <img src={book.cover} alt={book.title} className={styles.image} />
                <div className={styles.info}>
                  <h2 className={styles.title}>{book.title}</h2>
                  <p className={styles.author}>{book.author}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const books = await fetchAllBooks(); 
    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    return {
      notFound: true,
    };
  }
};