// // components/EventCountdown.tsx
// 'use client';

// import { useEffect, useState } from 'react';

// export default function EventCountdown() {
//   const [timeLeft, setTimeLeft] = useState<number>(0);
//   const targetDate = new Date('2024-12-31T00:00:00'); // Set your event's target date and time

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate.getTime() - now;
//       setTimeLeft(distance);

//       if (distance <= 0) {
//         clearInterval(interval); // Stop the countdown when the event starts
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   });

//   const calculateTime = (time: number) => {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((time % (1000 * 60)) / 1000);
//     return { days, hours, minutes, seconds };
//   };

//   const { days, hours, minutes, seconds } = calculateTime(timeLeft);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="relative">
//           {/* Image Container */}
//           <div className="relative w-full h-[400px]">
//             <img  src="/e1.png"   className="w-full h-full object-cover"/>
//             {/* Half-Blurred Effect */} 
//             <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-900 opacity-50 blur-lg"></div>
//           </div>

//           {/* Countdown Timer */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//             <h2 className="text-3xl font-bold mb-4">Upcoming Event!</h2>
//             <p className="text-xl mb-4">Hurry up! The sale is coming soon.</p>
//             <div className="flex justify-center space-x-4 text-lg font-semibold">
//               <div>
//                 <p className="text-xl">{days}</p>
//                 <p>Days</p>
//               </div>
//               <div>
//                 <p className="text-xl">{hours}</p>
//                 <p>Hours</p>
//               </div>
//               <div>
//                 <p className="text-xl">{minutes}</p>
//                 <p>Minutes</p>
//               </div>
//               <div>
//                 <p className="text-xl">{seconds}</p>
//                 <p>Seconds</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// components/EventCountdown.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const targetDate = new Date('2024-12-31T00:00:00'); // Set your event's target date and time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      setTimeLeft(distance);

      if (distance <= 0) {
        clearInterval(interval); // Stop the countdown when the event starts
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  });

  const calculateTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateTime(timeLeft);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Image Container */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/e1.png"
              alt="Event Background"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Half-Blurred Effect */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-900 opacity-50 blur-lg"></div>
          </div>

          {/* Countdown Timer */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Upcoming Event!</h2>
            <p className="text-xl mb-4">Hurry up! The sale is coming soon.</p>
            <div className="flex justify-center space-x-4 text-lg font-semibold">
              <div>
                <p className="text-xl">{days}</p>
                <p>Days</p>
              </div>
              <div>
                <p className="text-xl">{hours}</p>
                <p>Hours</p>
              </div>
              <div>
                <p className="text-xl">{minutes}</p>
                <p>Minutes</p>
              </div>
              <div>
                <p className="text-xl">{seconds}</p>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
