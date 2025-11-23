import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  isLoading, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles: React.CSSProperties = {
    width: '100%',
    padding: '1rem 1.5rem',
    borderRadius: '0',
    fontSize: '0.875rem',
    fontWeight: '600',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif',
    cursor: props.disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: props.disabled || isLoading ? 0.6 : 1
  };

  const variants = {
    primary: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid transparent'
    },
    secondary: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const hoverStyles = variant === 'primary' ? {
    backgroundColor: '#f3f4f6'
  } : variant === 'secondary' ? {
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  } : {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.5)'
  };

  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      style={{
        ...baseStyles,
        ...variants[variant],
        ...(isHovered && !isLoading && !props.disabled ? hoverStyles : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <Loader2 
          style={{ 
            width: '1rem', 
            height: '1rem',
            animation: 'spin 1s linear infinite'
          }} 
        />
      )}
      
      {/* Button Content */}
      <span style={{ opacity: isLoading ? 0 : 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {children}
      </span>

      {/* Shine Effect for Primary Button */}
      {variant === 'primary' && !isLoading && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: isHovered ? '200%' : '-100%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'skewX(-25deg)',
            transition: 'left 0.6s ease',
            pointerEvents: 'none'
          }}
        />
      )}
      
      {/* Add keyframe animation for spinner */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};