import React, { useState } from "react";
import Layout from "@/app/components/layout";
import { useRouter } from "next/router";

type Book = {
  title: string;
  author: string;
  cover: string;
  description: string;
};

const NewBookPage: React.FC = () => {
  const router = useRouter();
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    cover: "",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }
      );
      if (res.ok) {
        router.push("/admin/books");
      } else {
        console.error("Error creating book");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Layout>
      <h1>Create a new book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cover">Cover URL</label>
          <input
            id="cover"
            name="cover"
            type="text"
            value={book.cover}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </Layout>
  );
};

export default NewBookPage;