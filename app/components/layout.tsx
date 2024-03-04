import React from 'react'
import Link from 'next/link'
import styles from './Layout.module.css'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.logo}>Book Database</a>
          </Link>
          <Link href="/books">
            <a className={styles.link}>Books</a>
          </Link>
          <Link href="/admin/books">
            <a className={styles.link}>Admin</a>
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2024 Book Database. All rights reserved.</p>
      </footer>
    </div>
  )
}
