'use client';

import React from 'react';
import Button from './Button';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Top Badge */}
      <div className="mb-8 fade-in">
        <span className="inline-block px-6 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full">
          FREE ONLINE AI COACHING
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 fade-in">
        <span className="text-white">Free AI Coaching.</span>
        <br />
        <span className="text-white">No Courses. No Gurus.</span>
        <br />
        <span className="text-white">No Bullshit.</span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-gray-300 text-center max-w-4xl mb-12 fade-in">
        We&apos;re putting an end to paid coaching courses that make creators rich at the expense of their fans.
        <br />
        <span className="text-purple-400 font-semibold">Learn real AI, development, and creator growth systems — completely free.</span>
      </p>

      {/* CTA Button */}
      <div className="mb-8 fade-in">
        <Button onClick={onOpenModal} variant="primary">
          GET MY FREE TICKET
        </Button>
      </div>

      {/* Feature Bullets */}
      <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400 fade-in">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>No showing your face</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>No experience needed</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>No upsells. Ever.</span>
        </div>
      </div>
    </div>
  );
}
