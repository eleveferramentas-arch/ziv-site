import BentoCard from '../components/BentoCard';

export default function ZivCast() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <section className="section-padding" style={{ minHeight: '70svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="display-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
          ZIV Cast.
        </h1>
        <p className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: '3rem', maxWidth: '500px' }}>
          Conversas profundas com visionários da mobilidade urbana, design e arquitetura da cidade do futuro.
        </p>
        <div>
          <button className="btn-primary">Listen Now</button>
        </div>
      </section>
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <h2 className="headline-md" style={{ marginBottom: '3rem' }}>Recent Episodes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <BentoCard label="ESTRATÉGIA B2B" title="A Revolução das Frotas" highlight={true} subtitle="Mergulhe nos dados da integração elétrica." />
          <BentoCard label="DESIGN SYSTEM" title="Kinetic Noir" subtitle="Como criamos a interface para a mobilidade de ponta." />
        </div>
      </section>
    </main>
  );
}
