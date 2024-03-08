import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to My BookPage</h1>
        <p>Enjoy your search</p>
      </header>
      <div className="vertical-line"></div>
      <main className="home-main">
        <section className="home-section">
          <h2>Explore Books</h2>
          <p>Discover your next favorite book in our extensive library.</p>
          <img src="https://img.freepik.com/premium-photo/books-with-stairs-sky-with-cloudsgenerative-ai_391052-11895.jpg" alt=" image" style={{width: '25%'}} />
          <button>Start Exploring</button>
        </section>
        <section className="home-section">
          <h2>Manage Books</h2>
          <p>Administer your book database with ease.</p>
          <img src="https://assets.brightspot.abebooks.a2z.com/dims4/default/880d935/2147483647/strip/true/crop/1580x760+0+0/resize/998x480!/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.us-west-2.amazonaws.com%2F5d%2Fe6%2F3c6a003a4374bac22e49620dc976%2Fcarousel-coffeetable-collection.png" alt=" image" style={{width: '25%'}} />
          <button>Go to Admin</button>
        </section>
        <section className="store-section">
          <h2>Download Our App</h2>
          <p>Get our app from the App Store or Google Play Store.</p>
          <a href="#"><img src="https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-2013-2017.png" alt="App Store Logo" style={{width: '3.5%'}} /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Google Play Store Logo" style={{width: '2%'}} /></a>
        </section>
      </main>
    </div>
  );
};

export default HomePage;