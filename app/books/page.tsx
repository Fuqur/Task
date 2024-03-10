import React from 'react';
import Link from 'next/link';

export default async function Page() {
  try {
    const response = await fetch('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    
    return (
      <div>
        <h1>Books</h1>
        {data.map((book) => (
          <div key={book.id}>
            <Link href={`/books/${book.id}`}>
              <a>{book.title}</a>
            </Link>
          </div>
        ))}
      </div>
    );
  } catch (error: any) {
    return <div>Failed to load: {(error as Error).message}</div>; 
  }
}