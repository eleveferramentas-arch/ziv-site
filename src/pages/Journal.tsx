import BentoCard from '../components/BentoCard';

export default function Journal() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <section className="section-padding" style={{
        minHeight: '60svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h3 className="label-sm" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>EDITION 01</h3>
        <h1 className="display-lg" style={{ marginBottom: '1.5rem' }}>
          The Editorial.
        </h1>
        <p className="headline-md" style={{ 
          color: 'var(--on-surface-variant)',
          marginBottom: '3rem',
          maxWidth: '600px',
          lineHeight: 1.4
        }}>
          Artigos e atualizações de longo formato sobre tecnologia, luxo e a nova escala de veículos urbanos.
        </p>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <h2 className="headline-md" style={{ marginBottom: '3rem' }}>Latest Reads</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <BentoCard 
            label="LUXO" 
            title="Por Que O Silêncio É Luxo" 
            highlight={true}
            subtitle="Explore a vantagem psicológica do veículo elétrico nas metrópoles saturadas e o conceito de 'Silent Velocity'."
          />
          <BentoCard 
            label="DESIGN" 
            title="Kinetic Noir" 
            subtitle="Como criamos a interface para a mobilidade de ponta e o fim da poluição visual."
          />
          <BentoCard 
            label="B2B ESTRATÉGIA" 
            title="A Revolução das Frotas" 
            subtitle="Mergulhe nos dados da integração elétrica e a rentabilidade real para frotistas."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="bento-card" style={{ textAlign: 'center' }}>
          <h2 className="headline-md" style={{ marginBottom: '1rem' }}>Newsletter Editorial</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '2rem' }}>
            Receba as edições mensais do ZIV Journal diretamente no seu radar digital.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              style={{
                backgroundColor: 'var(--surface-container-lowest)',
                border: '1px solid var(--outline-variant)',
                padding: '1rem',
                borderRadius: '0.5rem',
                color: 'var(--on-surface)',
                outline: 'none'
              }}
            />
            <button className="btn-primary">Inscrever-se</button>
          </div>
        </div>
      </section>

    </main>
  );
}
