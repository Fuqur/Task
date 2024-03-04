import React from 'react'
import Layout from '../components/layout'
import styles from './Book.module.css'

type Book = {
  _id: string
  title: string
  author: string
  cover: string
  description: string
}

type Props = {
  book: Book
}

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
  )
}

export async function getStaticPaths() {
  const res = await fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53`)
  const books = await res.json()
  const paths = books.map
}