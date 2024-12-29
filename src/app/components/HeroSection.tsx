'use client'
// export default HeroSection;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
        {
          title: '',
          description: '',
          image: 'b2.png',
          link: '/product/graphics-cards'
        },
        {
          title: '',
          description: '',
          image: 'b4.png',
          link: '/product/processors'
        },
        {
          title: '',
          description: '',
          image: 'b1.png',
          link: '/product/ram'
        },
        {
          title: '',
          description: '',
          image: 'b3.png',
          link: '/product/motherboards'
        }
      ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Automatically change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  });

  return (
    <div className="hero-container">
      <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link href= '/products'>
                <button className="shop-now">Shop Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>❮</button>
      <button className="next" onClick={handleNext}>❯</button>

      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: 1;
        }

        .carousel {
          display: flex;
          transition: transform 1s ease;
          width: 100%;
        }

        .carousel-item {
          flex: 0 0 100%; /* Each banner takes up 100% of the width */
          height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .carousel-content {
          text-align: center;
          color: white;
          z-index: 1;
          padding: 0 20px;
        }

        .carousel-content h1 {
          font-size: 3rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }

        .carousel-content p {
          font-size: 1.5rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }

        .shop-now {
          display: inline-block;
          padding: 15px 30px;
          font-size: 1.2rem;
          background-color: green;
          color: white;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          transition: background-color 0.3s;
          position: absolute bottom;   
        }

        .shop-now:hover {
          background-color: red;
        }

        .prev, .next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          font-size: 2rem;
          padding: 10px 15px;
          cursor: pointer;
        }

        .prev {
          left: 20px;
        }

        .next {
          right: 20px;
        }

        @media (max-width: 1024px) {
          .carousel-content h1 {
            font-size: 2.5rem;
          }

          .carousel-content p {
            font-size: 1.3rem;
          }

          .shop-now {
            font-size: 1.1rem;
            padding: 12px 25px;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            height: 60vh;
          }

          .carousel-item {
            height: 60vh;
            background-size: cover;
          }

          .carousel-content h1 {
            font-size: 2rem;
          }

          .carousel-content p {
            font-size: 1.1rem;
          }

          .shop-now {
            font-size: 1rem;
            padding: 10px 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            height: 60vh;
          }

          .carousel-item {
            height: 60vh;
            background-size: cover;
          }

          .carousel-content h1 {
            font-size: 1.5rem;
          }

          .carousel-content p {
            font-size: 1rem;
          }

          .shop-now {
            font-size: 0.9rem;
            padding: 10px 15px;
          }

          .prev, .next {
            font-size: 1.5rem;
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

