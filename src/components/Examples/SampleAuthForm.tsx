'use client';

import { useAuthStore } from '@/store';
import { useState } from 'react';
import toast from 'react-hot-toast';

/**
 * Example component showing how to use the Auth Store (Zustand)
 * Demonstrates fake login/signup and profile management
 */
export function SampleAuthForm() {
  const { user, isLoggedIn, login, signup, logout } = useAuthStore();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'login') {
      login(email, password);
      toast.success('Logged in successfully!');
    } else {
      signup(email, password, name);
      toast.success('Account created!');
    }

    // Reset form
    setEmail('');
    setPassword('');
    setName('');
  };

  if (isLoggedIn && user) {
    return (
      <div className="max-w-md mx-auto p-6 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        
        <div className="space-y-3 mb-6">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
          {user.address && <p><strong>Address:</strong> {user.address}</p>}
        </div>

        <button
          onClick={logout}
          className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              placeholder="John Doe"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
          className="text-blue-500 hover:underline font-medium"
        >
          {mode === 'login' ? 'Sign up' : 'Login'}
        </button>
      </p>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-sm text-yellow-800">
          <strong>⚠️ Demo Mode:</strong> This is fake authentication. Any email/password works. Data is stored only in browser localStorage.
        </p>
      </div>
    </div>
  );
}
