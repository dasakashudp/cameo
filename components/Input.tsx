import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  icon, 
  type = 'text', 
  error, 
  className = '',
  placeholder,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const isActive = isFocused || hasValue || (props.value && String(props.value).length > 0);

  return (
    <div style={{ position: 'relative', marginBottom: '2.5rem', width: '100%' }} className={className}>
      {/* Floating Label - Always above */}
      <label
        style={{
          display: 'block',
          marginBottom: '0.75rem',
          color: isFocused ? 'var(--color-gold-400)' : 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.75rem',
          fontWeight: '500',
          letterSpacing: '0.08em',
          fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase',
          transition: 'color 0.3s ease'
        }}
      >
        {label}
      </label>

      <div style={{ position: 'relative' }}>
        {/* Icon - stays in place */}
        {icon && (
          <div 
            style={{ 
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              color: isFocused ? 'var(--color-gold-400)' : 'rgba(255, 255, 255, 0.4)',
              transition: 'color 0.3s ease',
              pointerEvents: 'none',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {icon}
          </div>
        )}

        {/* Input Field */}
        <input
          {...props}
          type={inputType}
          placeholder=""
          onFocus={(e) => {
            setIsFocused(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
            if (props.onBlur) props.onBlur(e);
          }}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            if (props.onChange) props.onChange(e);
          }}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: `1px solid ${error ? '#ef4444' : isFocused ? 'var(--color-gold-400)' : 'rgba(255, 255, 255, 0.15)'}`,
            borderRadius: '0',
            paddingLeft: icon ? '2.25rem' : '0',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            paddingRight: type === 'password' ? '2.5rem' : '0',
            color: '#fff',
            fontSize: '0.9375rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '300',
            transition: 'border-color 0.3s ease',
            outline: 'none',
            boxShadow: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none'
          }}
        />

        {/* Password Toggle Button */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              padding: '0.5rem',
              transition: 'color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {/* Animated Gold Underline on Focus */}
        <div 
          style={{
            position: 'absolute',
            bottom: '-1px',
            left: '0',
            width: isFocused ? '100%' : '0',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-gold-400), var(--color-gold-500))',
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transformOrigin: 'left',
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Error Message */}
      {error && (
        <span 
          style={{
            display: 'block',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: '#ef4444',
            fontWeight: '400',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};