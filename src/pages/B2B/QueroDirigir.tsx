export default function QueroDirigir() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundColor: '#050505'
        }}>
          <div className="img-placeholder" style={{ opacity: 0.3 }}>
            [Luxury Black Electric Sedan with professional driver in suit]
          </div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, black, rgba(0,0,0,0.4), transparent)'
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '850px' }} className="md:px-24">
          <h1 className="display-lg" style={{ marginBottom: '1.5rem', color: 'var(--on-surface)' }}>
            A Rentabilidade que Você Merece. <span style={{ opacity: 0.5 }}>O Respeito que o Mercado Esqueceu.</span>
          </h1>
          <p className="headline-md" style={{ 
            color: 'var(--on-surface-variant)', 
            fontWeight: 300,
            marginBottom: '3rem',
            maxWidth: '650px',
            lineHeight: 1.4
          }}>
            Abandone a guerra de centavos. Seja um Anfitrião ZIV e alcance até <span style={{ color: 'var(--primary-container)', fontWeight: 'bold' }}>R$ 18.000 líquidos</span> por mês.
          </p>
          <button className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', boxShadow: '0 0 30px rgba(57, 255, 20, 0.3)' }}>
            Seja um Anfitrião ZIV
          </button>
        </div>
      </section>

      {/* Pilares da Oportunidade (Asymmetric Bento Grid) */}
      <section className="section-padding" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '1.5rem' 
        }}>
          {/* Card 1: Volatilidade Chart */}
          <div className="bento-card md:col-span-12 lg:col-span-7" style={{ 
            gridColumn: 'span 12', 
            gridRow: 'span 1', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            minHeight: '400px'
          }}>
            <div>
              <h3 className="title-sm" style={{ fontSize: '1.5rem' }}>O Fim da Volatilidade</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Compare o custo energético mensal entre combustível fóssil e ZIV Elétrico.</p>
            </div>
            {/* CSS Chart */}
            <div style={{ display: 'flex', height: '200px', alignItems: 'flex-end', gap: '2rem', padding: '0 1rem' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '100%', height: '85%', backgroundColor: 'var(--surface-container-highest)', borderRadius: '4px 4px 0 0' }}></div>
                <span className="label-sm" style={{ opacity: 0.4, fontSize: '0.6rem' }}>Combustível</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <div style={{ 
                  width: '100%', 
                  height: '20%', 
                  backgroundColor: 'var(--primary-container)', 
                  borderRadius: '4px 4px 0 0',
                  boxShadow: '0 0 20px rgba(57,255,20,0.3)'
                }}></div>
                <span className="label-sm" style={{ color: 'var(--primary-container)', fontSize: '0.6rem' }}>ZIV Elétrico</span>
              </div>
            </div>
          </div>

          {/* Card 2: Matemática Calculator */}
          <div className="bento-card md:col-span-12 lg:col-span-5" style={{ 
            gridColumn: 'span 12', 
            gridRow: 'span 1', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            gap: '1.5rem'
          }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '3rem' }}>calculate</span>
            <h3 className="title-sm" style={{ fontSize: '1.5rem' }}>A Matemática da Certeza</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Para percursos acima de 3km, a taxa de deslocamento vai <span style={{ color: 'var(--primary-container)', fontWeight: 'bold' }}>100% para o anfitrião</span>. Nós valorizamos o seu tempo de chegada.
            </p>
          </div>

          {/* Card 3: Lucro Massivo (Full Width) */}
          <div className="bento-card md:col-span-12" style={{ 
            gridColumn: 'span 12', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '4rem 2rem'
          }}>
            <span className="label-sm" style={{ opacity: 0.5, marginBottom: '1rem' }}>Lucro Real e Dignidade</span>
            <div style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
              fontWeight: '900', 
              color: 'var(--primary-container)',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            }}>
              R$ 18.000
            </div>
            <span className="label-sm" style={{ marginTop: '1rem', opacity: 0.6, fontSize: '0.875rem' }}>Líquidos / Mês</span>
          </div>
        </div>
      </section>

      {/* ZIV Station (Fortaleza B2B) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
            <div className="img-placeholder" style={{ aspectRatio: '16/9' }}>
              [Studio Shot - ZIV Station Fortaleza Interior]
            </div>
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 1 }}>
              <p className="title-sm" style={{ fontWeight: 'bold' }}>ZIV Station Fortaleza</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="display-lg" style={{ fontSize: '3rem' }}>Infraestrutura que Impulsiona seu Negócio.</h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              Não possui veículo próprio? Sem problemas. Através da ZIV Station, oferecemos planos de locação de frotas elétricas premium com manutenção inclusa.
            </p>
            <div style={{ 
              backgroundColor: 'rgba(0,0,0,0.4)', 
              backdropFilter: 'blur(20px)', 
              padding: '2.5rem', 
              borderRadius: '1.5rem',
              display: 'inline-block'
            }}>
              <span className="label-sm" style={{ opacity: 0.5, marginBottom: '0.5rem', display: 'block' }}>Locação a partir de</span>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-container)' }}>R$ 6.300 <span style={{ fontSize: '1rem', opacity: 0.5 }}>/ mês</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* O Filtro de Excelência */}
      <section className="section-padding" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '5rem', color: 'rgba(226,226,226,0.1)', marginBottom: '3rem' }}>verified_user</span>
        <h2 className="headline-md" style={{ fontWeight: 400, opacity: 0.8, lineHeight: 1.5 }}>
          "Preferimos <span style={{ color: 'var(--on-surface)', fontWeight: 700 }}>não realizar uma viagem</span> a entregar um padrão inferior. Vistorias constantes e treinamento de elite são nossas regras inegociáveis."
        </h2>
        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(57,255,20,0.2)' }}></div>
          <span className="label-sm" style={{ color: 'var(--primary-container)' }}>Protocolo ZIV</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(57,255,20,0.2)' }}></div>
        </div>
      </section>

      <div style={{ height: '100px' }} />

      <style>{`
        @media (max-width: 1024px) {
          .md\\:col-span-12 { grid-column: span 12 !important; }
        }
      `}</style>
    </main>
  );
}
