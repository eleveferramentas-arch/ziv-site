import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="glass-panel" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        zIndex: 50,
        boxShadow: '0 40px 40px rgba(0,0,0,0.5)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => setIsMenuOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--on-surface)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>menu</span>
          </button>
          
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase' 
          }}>
            ZIV
          </span>
        </div>
        
        <button 
          className="btn-primary"
          style={{
            padding: '0.5rem 1.5rem',
            fontSize: '0.875rem'
          }}
        >
          Solicitar Viagem
        </button>
      </header>

      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
