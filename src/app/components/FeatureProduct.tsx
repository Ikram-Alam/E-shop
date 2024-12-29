// // components/FeatureProduct.tsx
// 'use client';
// import Link from 'next/link';

// export default function FeatureProduct() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Featured Product</h2>

//         <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Product Image */}
//           <div className="lg:w-1/2 w-full">
//             <img  src="f1.png" alt="Featured Product" className="w-full h-full object-cover"/> 
//           </div>

//           {/* Product Details */}
//           <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">High-Performance GPU</h3>
//               <p className="text-gray-700 mb-6">
//                 Experience next-level performance and stunning visuals with this high-performance GPU.
//                 Perfect for gaming, content creation, and AI applications.
//               </p>
//               <p className="text-xl font-bold text-yellow-600 mb-4">$799.99</p>
//             </div>

//             <Link href="/cart">
//               <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 w-full lg:w-auto">
//                 Buy Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// components/FeatureProduct.tsx
// components/FeatureProduct.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FeatureProduct() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Product</h2>

        <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Product Image */}
          <div className="lg:w-1/2 w-full">
            <Image 
              src="/f1.png" 
              alt="Featured Product" 
              width={500} 
              height={400} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">High-Performance GPU</h3>
              <p className="text-gray-700 mb-6">
                Experience next-level performance and stunning visuals with this high-performance GPU.
                Perfect for gaming, content creation, and AI applications.
              </p>
              <p className="text-xl font-bold text-yellow-600 mb-4">$799.99</p>
            </div>

            <Link href="/cart">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 w-full lg:w-auto">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
