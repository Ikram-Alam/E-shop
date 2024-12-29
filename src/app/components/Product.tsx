// components/Product.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

// Define props for the Product component
interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: string;
}

export default function Product({ id, name, image, price }: ProductProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full h-48 object-cover rounded-md mb-4"
        priority
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-2">{price}</p>
      <Link href={`/products/${id}`}>
      <span  className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Buy Now
      </span>
      </Link>
    </div>
  );
}
