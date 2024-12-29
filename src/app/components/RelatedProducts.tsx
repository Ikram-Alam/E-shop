import Image from 'next/image';

const products = [
  { id: '1', name: 'Product 1', image: '/i1.jpg', price: '$200' },
  { id: '2', name: 'Product 2', image: '/i5.jpg', price: '$300' },
  { id: '3', name: 'Product 3', image: '/i9.jpg', price: '$100' },
  { id: '4', name: 'Product 4', image: '/i12.jpg', price: '$150' },
  { id: '5', name: 'Product 5', image: '/i15.jpg', price: '$170' },
  { id: '6', name: 'Product 6', image: '/i6.jpg', price: '$300' },
];

export default function RelatedProducts() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-blue-600 text-xl font-bold mb-4">{product.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
