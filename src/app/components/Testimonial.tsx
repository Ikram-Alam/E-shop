// components/Testimonial.tsx
'use client';

import Image from 'next/image';

export default function Testimonial() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'Absolutely fantastic service! Highly recommend to anyone looking for quality products.',
      imgSrc: '/t1.jpg',
    },
    {
      name: 'Jane Smith',
      review: 'The prices are unbeatable and the shipping was incredibly fast. A+ experience!',
      imgSrc: '/t2.jpg',
    },
    {
      name: 'Michael Brown',
      review: 'Great customer support and amazing discounts. Will definitely shop again.',
      imgSrc: '/t3.jpeg',
    },
    {
      name: 'Emily Davis',
      review: 'The product quality exceeded my expectations. Worth every penny!',
      imgSrc: '/t4.jpeg',
    },
    {
      name: 'Chris Wilson',
      review: 'Quick delivery and amazing deals. Highly satisfied with my purchase.',
      imgSrc: '/t5.jpg',
    },
    {
      name: 'John Doe',
      review: 'I loved the variety of products. The website is easy to navigate as well!',
      imgSrc: '/t6.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>

        {/* Testimonial Slider */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6 snap-center"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2 text-center">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
