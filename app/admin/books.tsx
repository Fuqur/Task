import { GetServerSideProps } from 'next';
import axios from 'axios';

interface Book {
    id: string;
    title: string;
    author: string;
    cover: string;
    description: string;
}

const AdminBooksPage = ({ books }: { books: Book[] }) => (
  <div>
    {books.map((book) => (
      <div key={book.id}>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <a href={`/admin/books/${book.id}`}>Edit</a>
      </div>
    ))}
    <a href="/admin/books/new">Create new book</a>
  </div>
);

export default AdminBooksPage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53');
    const books: Book[] = res.data;

    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        books: [],
      },
    };
  }
};