import { Link, useLocation } from 'react-router-dom';

export default function BottomNavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', icon: 'explore', label: 'Início', active: currentPath === '/' },
    { path: '/quero-viajar', icon: 'directions_car', label: 'Viajar', active: currentPath === '/quero-viajar' },
    { path: '/quero-dirigir', icon: 'business_center', label: 'Dashboard', active: currentPath === '/quero-dirigir' },
    { path: '/journal', icon: 'person', label: 'Perfil', active: currentPath === '/journal' },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '0',
      right: '0',
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }}>
      <nav className="glass-panel" style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem',
        borderRadius: '9999px',
        maxWidth: '500px',
        width: 'calc(100% - 3rem)',
        justifyContent: 'space-between',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        pointerEvents: 'auto'
      }}>
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.75rem 1.25rem',
              borderRadius: '9999px',
              color: item.active ? 'var(--on-primary)' : 'var(--on-surface)',
              background: item.active ? 'linear-gradient(135deg, var(--primary-fixed-dim), var(--primary-container))' : 'transparent',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}>
              {item.icon}
            </span>
            {item.active && (
              <span style={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="mobile-hide">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
      
      <style>{`
        @media (max-width: 600px) {
          .mobile-hide { display: none; }
        }
      `}</style>
    </div>
  );
}
