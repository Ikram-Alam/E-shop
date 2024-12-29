// components/FAQSection.tsx
'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the return policy?',
      answer: 'You can return any product within 30 days of purchase. The product must be unused and in its original packaging.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping takes between 3 to 7 business days depending on your location.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we do offer international shipping. Shipping costs vary based on the destination.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email to monitor your package.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers.',
    },
  ];

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the selected question
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
