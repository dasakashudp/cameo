import React, { useState } from 'react';
import { ShoppingBag, Mail, Lock, ArrowRight } from 'lucide-react';
import { Input } from './Input';
import { Button } from './Button';
import { SocialAuth } from './SocialAuth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      alert("Welcome back to Cameo.");
    }, 2000);
  };

  return (
    <div className="form-wrapper">
      {/* Header / Logo */}
      <div className="brand-header">
        <div className="brand-logo-row">
          <ShoppingBag size={32} color="var(--color-gold-400)" strokeWidth={1.5} />
          <span className="brand-name">CAMEO</span>
        </div>
        <p className="brand-subtitle">Welcome Back</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        
        <Input 
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          icon={<Mail size={20} />}
          placeholder="name@example.com"
        />

        <div style={{ marginBottom: '2rem' }}>
          <Input 
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            icon={<Lock size={20} />}
            placeholder="Enter your password"
          />
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          isLoading={isLoading}
          variant="primary"
        >
          {!isLoading && (
             <>
               Sign In
               <ArrowRight size={16} />
             </>
          )}
          {isLoading && "Signing in..."}
        </Button>

      </form>

      {/* Social Auth Section */}
      <SocialAuth />

      {/* Footer */}
      <div className="footer-text">
        <p>
          Don't have an account?
          <a href="#" className="link-gold">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};