// components/About.tsx
'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We are a passionate team dedicated to delivering exceptional products and services that exceed expectations.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To deliver innovative and reliable solutions while fostering trust, integrity, and continuous improvement.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              To become a globally recognized leader in our industry, creating value for customers and communities.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-gray-800">Integrity</h4>
              <p className="text-gray-600 mt-2">We maintain the highest ethical standards in all our actions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-gray-800">Innovation</h4>
              <p className="text-gray-600 mt-2">We embrace creativity and forward-thinking solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-gray-800">Collaboration</h4>
              <p className="text-gray-600 mt-2">We work together to achieve shared success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-gray-800">Excellence</h4>
              <p className="text-gray-600 mt-2">We strive for perfection in everything we do.</p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Example Team Members */}
            {[
              { name: 'John Doe', role: 'CEO & Founder', img: '/t6.jpg' },
              { name: 'Jane Smith', role: 'Lead Developer', img: '/t4.jpeg' },
              { name: 'Michael Brown', role: 'Marketing Director', img: '/t5.jpg' },
              { name: 'Emily Davis', role: 'Product Manager', img: '/t4.jpeg' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center text-gray-800">{member.name}</h4>
                <p className="text-center text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 bg-blue-500 text-white py-12 rounded-lg">
          <h3 className="text-3xl font-semibold text-center mb-8">Our Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
            <div>
              <h4 className="text-4xl font-bold">10+</h4>
              <p className="text-lg">Years in Business</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">500+</h4>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">1000+</h4>
              <p className="text-lg">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">50+</h4>
              <p className="text-lg">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
