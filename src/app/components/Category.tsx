// components/Category.tsx
'use client'
import Link from 'next/link';

export default function Category() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Category 1 */}
          <div className="relative group min-h-[300px]">
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(c2.png)' }}>
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-4">
              <Link href="/products">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  CPU
                </button>
              </Link>
            </div>
          </div>

          {/* Category 2 */}
          <div className="relative group min-h-[300px]">
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(c1.png)' }}>
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-4">
              <Link href="/products">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  GPU
                </button>
              </Link>
            </div>
          </div>

          {/* Category 3 */}
          <div className="relative group min-h-[300px]">
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(c3.png)' }}>
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-4">
              <Link href="/products">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  RAM/ROM
                </button>
              </Link>
            </div>
          </div>

          {/* Category 4 */}
          <div className="relative group min-h-[300px]">
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(c5.png)' }}>
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-4">
              <Link href="/products">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Accessories
                </button>
              </Link>
            </div>
          </div>

          {/* Category 5 (Optional) */}
          <div className="relative group min-h-[300px]">
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(c4.png)' }}>
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-4">
              <Link href="/products">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Cases
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

