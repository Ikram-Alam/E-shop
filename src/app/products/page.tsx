// app/products/page.tsx
'use client';

import Product from '../components/Product';

export default function ProductsPage() {
  const products = [
    { id: '1', name: 'Product 1', image: '/i1.jpg', price: '$200' },
    { id: '2', name: 'Product 2', image: '/i2.jpg', price: '$300' },
    { id: '3', name: 'Product 3', image: '/i3.jpg', price: '$100' },
    { id: '4', name: 'Product 4', image: '/i4.jpg', price: '$150' },
    { id: '5', name: 'Product 5', image: '/i5.jpg', price: '$170' },
    { id: '6', name: 'Product 6', image: '/i6.jpg', price: '$300' },
    { id: '7', name: 'Product 7', image: '/i7.jpg', price: '$100' },
    { id: '8', name: 'Product 8', image: '/i8.jpg', price: '$200' },
    { id: '9', name: 'Product 9', image: '/i9.jpg', price: '$300' },
    { id: '10', name: 'Product 10', image: '/i10.jpg', price: '$100' },
    { id: '11', name: 'Product 11', image: '/i11.jpg', price: '$200' },
    { id: '12', name: 'Product 12', image: '/i12.jpg', price: '$30' },
    { id: '13', name: 'Product 13', image: '/i13.jpg', price: '$10' },
    { id: '14', name: 'Product 14', image: '/i14.jpg', price: '$20' },
    { id: '15', name: 'Product 15', image: '/i15.jpg', price: '$30' },
  ];
 
  return (
    <>
    <br />
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
