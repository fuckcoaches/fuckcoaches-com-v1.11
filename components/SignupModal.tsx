'use client';

import React, { useState } from 'react';
import Button from './Button';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    discord: '',
    telegram: '',
    solana: '',
    vipTicket: false
  });
  
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // FUTURE INTEGRATION POINT:
    // - Add Dynamic.xyz authentication here
    // - Connect to Supabase to insert form data
    // - Process crypto payment if VIP ticket is selected
    // - Send Discord/Telegram auto-invite
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBackToSite = () => {
    setSubmitted(false);
    setFormData({
      email: '',
      discord: '',
      telegram: '',
      solana: '',
      vipTicket: false
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black border border-purple-500/30 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            {/* Modal Title */}
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Reserve your free spot
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address...*"
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-full px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
              </div>

              {/* Discord Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  name="discord"
                  value={formData.discord}
                  onChange={handleChange}
                  placeholder="Discord Username..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-full px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
              </div>

              {/* Telegram Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.84 8.673c-.137.613-.5.76-1.016.474l-2.807-2.068-1.352 1.302c-.15.15-.274.274-.562.274l.2-2.84 5.172-4.67c.226-.2-.05-.312-.35-.112l-6.39 4.025-2.753-.864c-.6-.187-.611-.6.125-.889l10.76-4.145c.5-.187.937.112.774.869z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="Telegram Username..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-full px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
              </div>

              {/* Solana Wallet Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="solana"
                  value={formData.solana}
                  onChange={handleChange}
                  placeholder="Solana Wallet Address..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-full px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
              </div>

              {/* VIP Checkbox */}
              <div className="flex items-center gap-3 px-2">
                <input
                  type="checkbox"
                  name="vipTicket"
                  id="vipTicket"
                  checked={formData.vipTicket}
                  onChange={handleChange}
                  className="w-5 h-5 bg-gray-800 border-gray-700 rounded text-green-500 focus:ring-2 focus:ring-purple-500"
                />
                <label htmlFor="vipTicket" className="text-white cursor-pointer">
                  I want the VIP Ticket
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full">
                  GET MY FREE TICKET
                </Button>
              </div>
            </form>
          </>
        ) : (
          // Confirmation State
          <div className="text-center py-8 fade-in">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              You&apos;re in.
            </h2>
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">
              We&apos;ll be in touch soon.
            </h3>
            
            <p className="text-gray-400 mb-8">
              No spam. No upsells. Just real lessons.
            </p>

            <Button onClick={handleBackToSite} variant="secondary">
              Back to site
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
