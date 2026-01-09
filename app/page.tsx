'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import SignupModal from '@/components/SignupModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
