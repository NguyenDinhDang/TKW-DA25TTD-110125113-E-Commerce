"use client";

import React, { useEffect } from 'react';
import { useAuthModalStore } from '@/store/authModalStore';
import Signin from './Signin';
import Signup from './Signup';

const AuthModal = () => {
  const { isOpen, view, closeModal } = useAuthModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-dark/60 backdrop-blur-sm px-4" 
      onClick={closeModal}
    >
      <div 
        className="w-full max-w-[500px] rounded-xl bg-white shadow-1 p-5 sm:p-6 relative overflow-y-auto max-h-[95vh]" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-dark duration-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {view === 'signin' ? <Signin /> : <Signup />}
      </div>
    </div>
  );
};

export default AuthModal;
