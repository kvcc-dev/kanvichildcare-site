import { useState } from "react";
import "./App.css";

const slides = [
  { id: 1, text: "Care" },
  { id: 2, text: "Synergize" },
  { id: 3, text: "Cure" },
];

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Kanvi Child Care Hospital</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Content */}
      <main className="content">
        {/* Slider */}
        <section className="slider">
          <button onClick={prevSlide}>‹</button>
          <div className="slide">
            {slides[current].text}
          </div>
          <button onClick={nextSlide}>›</button>
        </section>

        {/* About Us */}
        <section className="about">
          <h2>About Us</h2>

          <div className="card-container">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                Sed cursus ante dapibus diam. Sed nisi.
                Nulla quis sem at nibh elementum imperdiet.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Values</h3>
              <p>
                Duis sagittis ipsum. Praesent mauris.
                Fusce nec tellus sed augue semper porta.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
