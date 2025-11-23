import React from 'react';

export const SocialAuth: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {/* Divider */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1.5rem 0' }}>
        <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
        <span style={{ 
          position: 'relative', 
          background: '#000', 
          padding: '0 1rem', 
          fontSize: '0.75rem', 
          color: 'rgba(255, 255, 255, 0.4)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          fontWeight: '400'
        }}>
          Or continue with
        </span>
      </div>

      {/* Social Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {/* Google Button */}
        <button 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            padding: '0.875rem 1rem',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '0',
            background: 'transparent',
            transition: 'all 0.3s ease',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            letterSpacing: '0.02em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg style={{ width: '1.125rem', height: '1.125rem' }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26+-.19-.58z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </button>

        {/* Apple Button */}
        <button 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            padding: '0.875rem 1rem',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '0',
            background: 'transparent',
            transition: 'all 0.3s ease',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            letterSpacing: '0.02em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg style={{ width: '1.125rem', height: '1.125rem' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.15-.04-.21.02-1.35.586-2.72 1.612-3.71.818-.84 2.05-1.46 2.894-1.46.02 0 .11.01.17.01h.01c.01.07.01.21.01.34zm-8.802 3.09h-.008c-1.46 0-2.65.65-3.4 1.77-.94 1.44-1.22 3.95-.08 6.54.51 1.17 1.22 2.37 2.15 3.53 1.11 1.38 2.2 2.76 3.65 2.76.62 0 1.18-.21 1.83-.55.77-.39 1.64-.54 2.29-.54.67 0 1.55.15 2.32.54.66.34 1.25.55 1.9.55 1.39 0 2.53-1.29 3.73-2.82.72-1.07 1.38-2.22 1.71-3.23-.05-.02-1.89-.59-2.28-2.29-.42-1.82.89-3.32 1.12-3.66-.45-.49-1.05-1.12-1.87-1.48-1.05-.46-2.22-.38-2.76-.11-.53.27-1.22.61-2.02.61-.83 0-1.66-.45-2.29-.72-.94-.39-1.95-.53-2.58-.53z"/>
          </svg>
          Apple
        </button>
      </div>
    </div>
  );
};