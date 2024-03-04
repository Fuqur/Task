import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import styles from './Book.module.css'
import { useRouter } from 'next/router'

type Book = {
  _id: string
  title: string
  author: string
  cover: string
  description: string
}

export default function EditBook() {
  const router = useRouter()
  const { bookId } = router.query

  const [book, setBook] = useState<Book | null>(null)

  useEffect(() => {
    fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53`)
      .then((res) => res.json())
      .then((data) => setBook(data))
  }, [bookId])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const res = await fetch(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })

    if (res.ok) {
      window.location.href = '/admin/books'
    }
  }

  if (!book) {
    return <Layout>Loading...</Layout>
  }

  return (
    <Layout>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Title
          <input type="text" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} className={styles.input} />
        </label>
        <label className={styles.label}>
          Author
          <input type="text" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} className={styles.input} />
        </label>
        <label className={styles.label}>
          Cover URL
          <input type="text" value={book.cover} onChange={(e) => setBook({ ...book, cover: e.target.value })} className={styles.input} />
        </label>
        <label className={styles.label}>
          Description
          <textarea value={book.description} onChange={(e) => setBook({ ...book, description: e.target.value })} className={styles.textarea} />
        </label>
        <button type="submit" className={styles.button}>Update</button>
      </form>
    </Layout>
  )
}