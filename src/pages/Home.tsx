import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '795px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 1.5rem',
        overflow: 'hidden'
      }}>
        {/* Background Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundColor: '#050505'
        }}>
          <div className="img-placeholder" style={{ opacity: 0.2 }}>
            [High-Resolution Interior Macro Shot - Dashboard & Leather]
          </div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, black, rgba(0,0,0,0.4), transparent)'
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }} className="md:px-24">
          <h1 className="display-lg" style={{ marginBottom: '1.5rem', color: 'var(--on-surface)' }}>
            A certeza do destino e o respeito ao seu tempo.
          </h1>
          <p className="headline-md" style={{ 
            color: 'var(--on-surface-variant)', 
            fontWeight: 300,
            marginBottom: '2.5rem',
            maxWidth: '600px'
          }}>
            O fim da guerra de preços. O início da mobilidade com propósito.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/quero-viajar" className="btn-primary">
              Quero Viajar
            </Link>
            <Link to="/quero-dirigir" className="btn-outline">
              Quero Dirigir
            </Link>
          </div>
        </div>
      </section>

      {/* Matemática da Certeza */}
      <section className="section-padding">
        <div className="md-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="label-sm" style={{ color: 'var(--primary-container)' }}>Transparência Total</span>
            <h2 className="headline-md">Matemática da Certeza</h2>
            <p className="body-md">
              O fim dos cancelamentos. Para corridas acima de 3 km, aplicamos uma taxa de deslocamento extra repassada integralmente ao anfitrião. 
              Você investe o valor justo para financiar a certeza absoluta de que o seu veículo chegará com excelência e prazer.
            </p>
          </div>
          <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
            {[
              { label: 'Variação de Tarifa', value: '0%' },
              { label: 'Taxa de Cancelamento', value: 'Isento' },
              { label: 'Previsibilidade', value: '100%' }
            ].map((stat, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-end',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ color: 'var(--on-surface-variant)' }}>{stat.label}</span>
                <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-container)' }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Santuário Acústico */}
      <section className="section-padding">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          backgroundColor: 'var(--surface-container-low)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          minHeight: '500px'
        }}>
          <div style={{ position: 'relative', minHeight: '300px' }}>
            <div className="img-placeholder">
              [Minimalist Car Interior - Acoustic Focus]
            </div>
          </div>
          <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
            <h2 className="headline-md">Santuário Acústico</h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              Transforme seu deslocamento em um escritório móvel ou em um momento de introspecção. Nossos veículos são selecionados pelo isolamento térmico e acústico superior. O silêncio é o novo luxo.
            </p>
          </div>
        </div>
      </section>

      {/* Lógica Apple da Frota (Bento Grid) */}
      <section className="section-padding" style={{ backgroundColor: '#000000' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="display-lg">Lógica Apple da Frota</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Escassez estratégica para garantir a máxima qualidade.</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '1.5rem' 
        }}>
          {/* Main Card */}
          <div className="bento-card" style={{ gridColumn: 'span 12', gridRow: 'span 1', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="img-placeholder" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
              [Macro Leather Texture Placeholder]
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="label-sm" style={{ color: 'var(--primary-container)' }}>Volume Controlado</span>
              <h3 style={{ fontSize: '8rem', fontWeight: 'bold', lineHeight: 1, letterSpacing: '-0.05em' }}>500</h3>
              <p className="title-sm">Exclusividade Geográfica</p>
            </div>
          </div>
          
          <div className="bento-card" style={{ gridColumn: 'span 12', gridRow: 'span 1', minHeight: '350px' }}>
             <div className="img-placeholder" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
              [Metallic Reflection Image Placeholder]
             </div>
             <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', zIndex: 1 }}>
               <h4 className="title-sm">100% Elétrico</h4>
               <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Zero emissões, torque instantâneo.</p>
             </div>
          </div>

          <div className="bento-card" style={{ gridColumn: 'span 12', gridRow: 'span 1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="label-sm" style={{ color: 'var(--primary-container)' }}>Padrão ZIV</span>
            <h4 className="title-sm">Curadoria de Anfitriões</h4>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Treinados sob os mais altos padrões de hospitalidade e segurança.</p>
          </div>
        </div>
      </section>

      {/* Categorias: Coleção de Experiências */}
      <section className="section-padding" style={{ backgroundColor: '#000000' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="headline-md">Coleção de Experiências</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Esculpidos por luz, desenhados para o seu tempo.</p>
        </div>
        
        <div className="carousel-container no-scrollbar">
          {[
            { id: 'GREEN', name: 'ZIV Green', desc: 'Eficiência urbana e design minimalista.' },
            { id: 'PLUS', name: 'ZIV Plus', desc: 'Espaço ampliado e acabamento premium.', active: true },
            { id: 'XL', name: 'ZIV XL', desc: 'Máximo conforto para grupos ou viagens.' }
          ].map((cat, i) => (
            <div key={i} className="carousel-card bento-card" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              textAlign: 'center',
              backgroundColor: cat.active ? 'var(--surface-container-high)' : 'var(--surface-container-low)',
              border: cat.active ? '1px solid rgba(57,255,20,0.2)' : 'none'
            }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.03, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '10rem', fontWeight: '900' }}>{cat.id}</span>
              </div>
              <div style={{ position: 'relative', height: '240px' }}>
                <div className="img-placeholder" style={{ backgroundColor: 'transparent' }}>
                  [Car Silhouette Placeholder]
                </div>
              </div>
              <div style={{ position: 'relative', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 className="title-sm">{cat.name}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{cat.desc}</p>
                <button className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', fontSize: '0.8rem' }}>Selecionar</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Universo do Anfitrião (B2B) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="headline-md">Lucro e Dignidade</h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              O Anfitrião ZIV não é um número. É um sócio da mobilidade. Oferecemos a maior remuneração líquida do mercado e eliminamos os custos variáveis.
            </p>
            <div style={{ backgroundColor: 'var(--surface-container)', padding: '2rem', borderRadius: '1rem' }}>
              <span className="label-sm" style={{ color: 'var(--primary-container)' }}>Ganhos Estimados</span>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                R$ 15.000 <span style={{ fontSize: '1rem', fontWeight: '300', color: 'var(--on-surface-variant)' }}>a</span> 18.000
              </div>
            </div>
          </div>
          <div className="bento-card" style={{ borderLeft: '4px solid var(--primary-container)' }}>
            <h3 className="title-sm">Corte da Volatilidade</h3>
            <p className="body-md" style={{ fontSize: '0.875rem', marginTop: '1rem', color: 'var(--on-surface-variant)' }}>Proteção contra combustíveis e manutenção.</p>
            {/* Simple CSS Chart */}
            <div style={{ display: 'flex', height: '160px', alignItems: 'flex-end', gap: '0.5rem', marginTop: '2rem' }}>
              <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', height: '70%', borderRadius: '2px' }}></div>
              <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', height: '50%', borderRadius: '2px' }}></div>
              <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', height: '60%', borderRadius: '2px' }}></div>
              <div style={{ flex: 1, backgroundColor: 'var(--primary-container)', height: '100%', borderRadius: '2px', boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }} className="label-sm">
              <span>Mercado</span>
              <span style={{ color: 'var(--primary-container)' }}>Modelo ZIV</span>
            </div>
          </div>
        </div>
      </section>

      {/* ZIV Station */}
      <section className="section-padding">
        <div style={{ 
          position: 'relative', 
          borderRadius: '2rem', 
          overflow: 'hidden', 
          minHeight: '500px', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '4rem' 
        }}>
           <div className="img-placeholder" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
            [Futuristic Showroom & Charging Hub Image Placeholder]
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, black, transparent)' }}></div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="headline-md">ZIV Station</h2>
            <p className="body-md">A infraestrutura física que sustenta a revolução. Locação, carregamento e suporte 24h.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>Locação desde</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>R$ 6.300</div>
              </div>
              <div>
                <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>Rede de Carga</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Exclusiva</div>
              </div>
            </div>
            <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>Seja um Parceiro</button>
          </div>
        </div>
      </section>

      {/* Footer is already global */}
      <div style={{ height: '100px' }} /> {/* Space for Bottom Dock margin */}

      <style>{`
        @media (min-width: 1024px) {
           /* Bento adjustments for desktop */
           #logic-apple-grid {
             grid-template-rows: repeat(2, 450px);
           }
        }
      `}</style>

    </main>
  );
}
