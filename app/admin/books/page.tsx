import Link from 'next/link';
import { GetStaticProps } from 'next';

interface Book {
    id: string;
    title: string;
    author: string;
    cover: string;
    description: string;
}

interface Props {
    books: Book[];
}

export default function BooksPage({ books }: Props) {
    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link href={`/admin/books/${book.id}`}>
                            <a>{book.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

async function getBooks(): Promise<Book[]> {
    return [
        { id: '1', title: 'Book 1', author: 'Author 1', cover: 'cover-url-1', description: 'Description 1' },
        { id: '2', title: 'Book 2', author: 'Author 2', cover: 'cover-url-2', description: 'Description 2' },
    ];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const books = await getBooks();
    return {
        props: {
            books,
        },
    };
};