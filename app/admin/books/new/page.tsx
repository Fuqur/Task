import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

const NewBookPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        // Handle success
        console.log('Book added successfully!');
      } else {
        // Handle errors
        console.error('Failed to add book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBookPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Perform any server-side operations here if needed
  // For example, fetch initial data from an external API or database
  return {
    props: {}, // Return any initial data as props
  };
};