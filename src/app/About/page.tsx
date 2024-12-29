// pages/about.tsx
'use client';

import About from '../components/About';
import Partner from '../components/Partner';
import Contact from '../components/Contact';

export default function AboutPage() {
  return (
    <div>
      {/* About Section */}
      <About />

      {/* Partner Section */}
      <Partner />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
