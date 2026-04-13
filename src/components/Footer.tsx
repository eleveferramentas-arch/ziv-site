import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--surface-container-lowest)',
      padding: '5rem 1.5rem',
      marginTop: 'auto',
      borderTop: '1px solid var(--outline-variant)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem'
      }}>
        
        {/* Brand Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--on-surface-variant)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              color: 'var(--surface)',
              opacity: 0.5
            }}>
              Z
          </div>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '400px', lineHeight: 1.6 }}>
            The new era of conscious and high-performance urban mobility. 
            Defining the future through design, infrastructure, and luxury experience.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          
          {/* Column: Passageiros */}
          <div>
            <h4 className="label-sm" style={{ marginBottom: '1.5rem', color: 'var(--on-surface-variant)', fontWeight: '700' }}>Passageiros</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="body-md">
              <Link to="/ziv-app">App ZIV</Link>
              <Link to="/quero-viajar">Categorias Green / Plus / XL</Link>
              <Link to="/quero-viajar">Agendamento Premium</Link>
            </nav>
          </div>

          {/* Column: Ecossistema B2B */}
          <div>
            <h4 className="label-sm" style={{ marginBottom: '1.5rem', color: 'var(--on-surface-variant)', fontWeight: '700' }}>Ecossistema B2B</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="body-md">
              <Link to="/quero-dirigir">Seja um Anfitrião</Link>
              <Link to="/ziv-station">Investimentos ZIV Station</Link>
              <Link to="/quero-dirigir">Frota 100% Elétrica</Link>
            </nav>
          </div>

          {/* Column: Institucional */}
          <div>
            <h4 className="label-sm" style={{ marginBottom: '1.5rem', color: 'var(--on-surface-variant)', fontWeight: '700' }}>Institucional</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="body-md">
              <Link to="/journal">The Journal</Link>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </nav>
          </div>

          {/* Column: Legal */}
          <div>
            <h4 className="label-sm" style={{ marginBottom: '1.5rem', color: 'var(--on-surface-variant)', fontWeight: '700' }}>Legal</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="body-md">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Cookie Strategy</a>
            </nav>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div style={{ 
          marginTop: '2rem', 
          paddingTop: '3rem', 
          borderTop: '1px solid var(--outline-variant)',
          color: 'var(--on-surface-variant)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }} className="label-sm">
          <span>© {new Date().getFullYear()} ZIV MOBILITY GATEWAY. SILENT VELOCITY.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">INSTAGRAM</a>
            <a href="#">LINKEDIN</a>
            <a href="#">YOUTUBE</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
