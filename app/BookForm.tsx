import React, { useState } from 'react';
import axios from 'axios';

interface Book {
    id?: string;
    title: string;
    author: string;
    cover?: string;
    description?: string;
}

interface Props {
  book?: Book;
  onSubmit: () => void;
}

const BookForm: React.FC<Props> = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bookData: Book = { title, author };

    try {
      if (book) {
        await axios.put(`https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53`, bookData);
      } else {
        await axios.post('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53', bookData);
      }
      onSubmit();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;