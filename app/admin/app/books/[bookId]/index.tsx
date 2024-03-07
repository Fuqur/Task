import React from 'react';
import Link from 'next/link';

const AdminIndexPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/admin/books">
              <a>Manage Books</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminIndexPage;