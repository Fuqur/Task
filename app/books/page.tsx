import React from "react";
import Link from "next/link";
import { getBooks } from "../utils";

export default async function Page() {
  const data = await getBooks();

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
}