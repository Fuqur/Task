import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import styles from './Books.module.css'

type Book = {
  _id: string
  title: string
  author: string
  cover: string
}

type Props = {
  books: Book[]
}

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
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53`)
  const books = await res.json()
  return {
    props: {
      books,
    },
  }
}