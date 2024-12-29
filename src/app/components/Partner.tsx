// components/PartnerBrands.tsx
'use client';

import Image from 'next/image';

export default function PartnerBrands() {
  const brands = [
    { name: 'Nvidia', logoSrc: '/p1.jpg', link: 'https://www.nvidia.com' },
    { name: 'AMD', logoSrc: '/p2.jpg', link: 'https://www.amd.com' },
    { name: 'Intel', logoSrc: '/p3.jpg', link: 'https://www.intel.com' },
    { name: 'HP', logoSrc: '/p4.jpg', link: 'https://www.hp.com' },
    { name: 'Bloody', logoSrc: '/p5.jpg', link: 'https://www.bloody.com' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Partners</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <a
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={brand.logoSrc}
                  alt={brand.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
