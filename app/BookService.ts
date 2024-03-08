import axios from 'axios';

const API_URL = 'https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53';

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const getBook = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    return null;
  }
};

export const createBook = async (book: any) => {
  try {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
    return null;
  }
};

export const updateBook = async (id: string, book: any) => {
  try {
    const response = await axios.put(`${API_URL}/books/${id}`, book);
    return response.data;
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error);
    return null;
  }
};