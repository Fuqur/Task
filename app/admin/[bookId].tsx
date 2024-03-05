import { GetServerSideProps } from 'next';
import Layout from '../components/layout';
import styles from './Book.module.css';
import React, { useState } from 'react';
import { updateBook } from '../api';

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

export default function EditBook({ book }: Props) {
  const [currentBook, setBook] = useState<Book>(book);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await updateBook(currentBook);
      window.location.href = '/admin/books';
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };

  return (
    <Layout>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Title
          <input
            type="text"
            value={currentBook.title}
            onChange={(e) => setBook({ ...currentBook, title: e.target.value })}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Author
          <input
            type="text"
            value={currentBook.author}
            onChange={(e) => setBook({ ...currentBook, author: e.target.value })}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Cover URL
          <input
            type="text"
            value={currentBook.cover}
            onChange={(e) => setBook({ ...currentBook, cover: e.target.value })}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Description
          <textarea
            value={currentBook.description}
            onChange={(e) => setBook({ ...currentBook, description: e.target.value })}
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53`);
    const book: Book = await res.json();

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