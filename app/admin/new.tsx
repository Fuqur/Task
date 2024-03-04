import React, { useState } from "react";
import Layout from "../components/layout";
import { useRouter } from "next/router";

type Book = {
  title: string;
  author: string;
  cover: string;
  description: string;
};

const NewBookPage: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const book: Book = {
      title,
      author,
      cover,
      description,
    };
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

  return (
    <Layout>
      <h1>Create a new book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cover">Cover URL</label>
          <input
            id="cover"
            type="text"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </Layout>
  );
};

export default NewBookPage;