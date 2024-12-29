import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import RelatedProducts from '@/app/components/RelatedProducts';

const products = [
  { id: '1', name: 'Product 1', image: '/i1.jpg', price: '$200', description: 'This is Product 1.' },
  { id: '2', name: 'Product 2', image: '/i2.jpg', price: '$300', description: 'This is Product 2.' },
  { id: '3', name: 'Product 3', image: '/i3.jpg', price: '$100', description: 'This is Product 3.' },
  { id: '4', name: 'Product 4', image: '/i4.jpg', price: '$150', description: 'This is Product 4.' },
  { id: '5', name: 'Product 5', image: '/i5.jpg', price: '$170', description: 'This is Product 5.' },
  { id: '6', name: 'Product 6', image: '/i6.jpg', price: '$300', description: 'This is Product 6.' },
  { id: '7', name: 'Product 7', image: '/i7.jpg', price: '$100', description: 'This is Product 7.' },
  { id: '8', name: 'Product 8', image: '/i8.jpg', price: '$200', description: 'This is Product 8.' },
  { id: '9', name: 'Product 9', image: '/i9.jpg', price: '$300', description: 'This is Product 9.' },
  { id: '10', name: 'Product 10', image: '/i10.jpg', price: '$100', description: 'This is Product 10.' },
  { id: '11', name: 'Product 11', image: '/i11.jpg', price: '$200', description: 'This is Product 11.' },
  { id: '12', name: 'Product 12', image: '/i12.jpg', price: '$30', description: 'This is Product 12.' },
  { id: '13', name: 'Product 13', image: '/i13.jpg', price: '$10', description: 'This is Product 13.' },
  { id: '14', name: 'Product 14', image: '/i14.jpg', price: '$20', description: 'This is Product 14.' },
  { id: '15', name: 'Product 15', image: '/i15.jpg', price: '$30', description: 'This is Product 15.' },
];

export default async function ProductDetails({ params }: { params: { id: string } }) {
  // Await params to resolve asynchronously
  const id = params?.id;

  // Validate the product ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound(); // Return a 404 page if the product is not found
  }

  return (
    <>
      <section className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center"> Products  Details</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain w-full h-full"
              />
            </div>

            {/* Product Details Section */}
            {/* Product Details Section */}
            <div className="p-8 flex flex-col justify-between">
            <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>
            </div>
              <Link href="/cart">
                  <span className="mt-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                    Add to Cart
                  </span>
              </Link>
            </div>
            </div>
            </div>

        <RelatedProducts />
      </section>
    </>
  );
}
