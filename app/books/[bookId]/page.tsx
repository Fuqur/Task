import React from 'react';
import { useRouter } from 'next/router';

const BookDetailPage: React.FC = () => {
  const router = useRouter();
  const { bookId } = router.query;

  return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book ID: {bookId}</p>
    </div>
  );
};

export default BookDetailPage;