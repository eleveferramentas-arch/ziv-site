import { Link, useLocation } from 'react-router-dom';

export default function MenuOverlay({ onClose }: { onClose: () => void }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Quero Viajar', path: '/quero-viajar' },
    { label: 'Quero Dirigir', path: '/quero-dirigir' },
    { label: 'ZIV App', path: '/ziv-app' },
    { label: 'Ziv Station', path: '/ziv-station' },
    { label: 'Ziv Cast', path: '/ziv-cast' },
    { label: 'Journal', path: '/journal' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'var(--surface)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem' }}>
        <button 
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--on-surface)',
            cursor: 'pointer',
            padding: '8px'
          }}
          aria-label="Close menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {links.map((link) => {
          const isActive = currentPath === link.path;
          return link.path !== '#' ? (
            <Link 
              key={link.label} 
              to={link.path}
              onClick={onClose}
              className={`display-lg ${isActive ? 'active' : ''}`}
              style={{ 
                fontSize: '2.5rem',
                letterSpacing: '-0.02em',
                fontWeight: 600,
                color: isActive ? 'var(--primary)' : 'inherit'
              }}
            >
              {link.label}
            </Link>
          ) : (
             <a 
              key={link.label} 
              href="#"
              className="display-lg"
              style={{ 
                fontSize: '2.5rem',
                letterSpacing: '-0.02em',
                fontWeight: 600,
                opacity: 0.5
              }}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <footer style={{ marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '2rem' }}>
        <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>INSTAGRAM</span>
        <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>LINKEDIN</span>
        <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>YOUTUBE</span>
      </footer>
    </div>
  );
}
