import { GetServerSideProps } from 'next';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  if (!params || typeof params.bookId !== 'string') {
    return {
      notFound: true,
    };
  }

  const bookId = params.bookId;

  try {
    const book = await fetchBookData(bookId);

    return {
      props: { book },
    };
  } catch (error) {
    console.error('Error fetching book data:', error);
    return {
      notFound: true,
    };
  }
};

async function fetchBookData(bookId: string): Promise<Book> {
  return {
    id: bookId,
    title: ' Title',
    author: ' Author',
    cover: ' Cover',
    description: ' Description',
  };
}