// components/FeatureStore.tsx
'use client';

export default function FeatureStore() {
  const features = [
    {
      title: 'Best Quality',
      description: 'We provide top-notch products ensuring the highest quality standards.',
      icon: '🌟',
    },
    {
      title: 'Best Price',
      description: 'Get the best deals and unbeatable prices on all our products.',
      icon: '💰',
    },
    {
      title: 'Fast Shipping',
      description: 'Enjoy quick and reliable delivery to your doorstep.',
      icon: '🚚',
    },
    {
      title: 'Discount Coupons',
      description: 'Earn rewards and save more with our exclusive discount coupons.',
      icon: '🎟️',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
