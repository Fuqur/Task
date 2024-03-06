import { useState } from 'react';
import Layout from '@/app/components/layout';
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
  const [bookList, setBookList] = useState(books);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53`, {
        method: 'DELETE',
      });
      setBookList(bookList.filter((book) => book._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1>Admin Books</h1>
      <Link href="/admin/books/new">
        <a className={styles.button}>Add New Book</a>
      </Link>
      <ul className={styles.list}>
        {bookList.map((book) => (
          <li key={book._id} className={styles.item}>
            <Link href={`/admin/books/${book._id}`}>
              <a className={styles.link}>
                <img src={book.cover} alt={book.title} className={styles.image} />
                <div className={styles.info}>
                  <h2 className={styles.title}>{book.title}</h2>
                  <p className={styles.author}>{book.author}</p>
                </div>
              </a>
            </Link>
            <button
              className={styles.delete}
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
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