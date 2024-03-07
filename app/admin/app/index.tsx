import React from 'react';
import Link from 'next/link';

const BooksIndexPage = () => {
  return (
    <div>
      <h1>All Books</h1>
      <ul>
        <li>
          <Link href="/books/1">
            <a>Book 1</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BooksIndexPage;