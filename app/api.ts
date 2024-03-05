const API_URL = 'https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53';

export type Book = {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
};

export async function fetchBookById(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch book');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
}

export async function fetchAllBooks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error('Failed to fetch books');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

export async function updateBook(book: Book) {
  try {
    const res = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    if (!res.ok) {
      throw new Error('Failed to update book');
    }
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
}

export async function deleteBook(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete book');
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
}