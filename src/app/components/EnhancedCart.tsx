// import React from "react";

// const EnhancedCart = () => {
//   const sampleCartItems = [
//     { id: "1", name: "Graphics Card", price: 299.99, quantity: 1, image: "/i1.jpg" },
//     { id: "2", name: "Processor", price: 199.99, quantity: 2, image: "/i2.jpg" },
//     { id: "3", name: "RAM", price: 99.99, quantity: 3, image: "/i3.jpg" },
//   ];

//   const total = sampleCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 50;

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6 md:flex md:space-x-6">
//         {/* Cart Items */}
//         <div className="flex-1">
//           {sampleCartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border-b pb-4 mb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <img  src={item.image}  alt={item.name}  className="w-16 h-16 rounded-lg object-cover"/>
//                 <div>
//                   <h2 className="font-semibold text-lg">{item.name}</h2>
//                   <p className="text-gray-600">Quantity: {item.quantity}</p>
//                   <p className="text-blue-500 font-semibold">
//                     ${item.price.toFixed(2)} each
//                   </p>
//                 </div>
//               </div>
//               <p className="text-lg font-bold">
//                 ${(item.price * item.quantity).toFixed(2)}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Cart Summary */}
//         <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-shrink-0 w-full md:w-80">
//           <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//           <div className="space-y-2">
//             <div className="flex justify-between text-gray-600">
//               <p>Subtotal:</p>
//               <p>${total.toFixed(2)}</p>
//             </div>
//             <div className="flex justify-between text-gray-600">
//               <p>Shipping:</p>
//               <p>${shipping.toFixed(2)}</p>
//             </div>
//             <div className="flex justify-between font-bold text-xl">
//               <p>Total:</p>
//               <p>${(total + shipping).toFixed(2)}</p>
//             </div>
//           </div>
//           <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
//             Checkout
//           </button>
//           <button className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
//             Clear Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnhancedCart;
import React from "react";
import Image from "next/image";

const EnhancedCart = () => {
  const sampleCartItems = [
    { id: "1", name: "Graphics Card", price: 299.99, quantity: 1, image: "/i1.jpg" },
    { id: "2", name: "Processor", price: 199.99, quantity: 2, image: "/i5.jpg" },
    { id: "3", name: "RAM", price: 99.99, quantity: 3, image: "/i8.jpg" },
  ];

  const total = sampleCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 md:flex md:space-x-6">
        {/* Cart Items */}
        <div className="flex-1">
          {sampleCartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4 mb-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-blue-500 font-semibold">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-shrink-0 w-full md:w-80">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Shipping:</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <p>Total:</p>
              <p>${(total + shipping).toFixed(2)}</p>
            </div>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Checkout
          </button>
          <button className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCart;
