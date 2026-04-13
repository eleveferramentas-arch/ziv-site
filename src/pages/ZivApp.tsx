export default function ZivApp() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 1.5rem 4rem 1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundColor: '#050505'
        }}>
          <div className="img-placeholder" style={{ opacity: 0.5 }}>
            [Macro Close-up: Perforated Luxury Leather with Neon Green Ambient Lighting]
          </div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, black, transparent, transparent)'
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px' }} className="md:px-24">
          <h1 className="display-lg" style={{ marginBottom: '1.5rem', color: 'var(--on-surface)', lineHeight: 1.1 }}>
            Onde o Caos Termina e o Seu Tempo Volta a Ser Seu.
          </h1>
          <p className="headline-md" style={{ 
            color: 'var(--on-surface-variant)', 
            fontWeight: 300,
            marginBottom: '2.5rem',
            maxWidth: '500px',
            lineHeight: 1.4
          }}>
            Uma frota 100% elétrica. Zero ruído, zero vibração e o fim absoluto dos cancelamentos.
          </p>
          <button className="btn-primary" style={{ padding: '1rem 2.5rem', boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)' }}>
            Baixar ZIV App
          </button>
        </div>
      </section>

      {/* X-Ray Section (Engenharia de Experiência) */}
      <section className="section-padding" style={{ backgroundColor: '#000000' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span className="label-sm" style={{ color: 'var(--primary-container)', tracking: '0.2em' }}>Engenharia de Experiência</span>
            <h2 className="display-lg" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>O Interior como Santuário</h2>
          </div>
          
          <div style={{ 
            position: 'relative', 
            aspectRatio: '16/10', 
            backgroundColor: 'var(--surface-container-low)', 
            borderRadius: '2rem', 
            overflow: 'hidden' 
          }}>
            <div className="img-placeholder" style={{ opacity: 0.3, filter: 'grayscale(1)' }}>
              [X-Ray/3D Render: Minimalist Car Cabin Interior]
            </div>
            
            {/* Hotspots */}
            <Hotspot top="25%" left="35%" title="Acústica" desc="O Silêncio como Luxo" />
            <Hotspot top="50%" right="25%" title="Hospitalidade" desc="Anfitriões Premium" align="right" />
            <Hotspot bottom="25%" left="50%" title="Atmosfera" desc="Inspeção Física Constante" />
          </div>
        </div>
      </section>

      {/* Infographic Section (Matemática da Certeza) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 className="display-lg" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Matemática da Certeza</h3>
          <p className="body-md" style={{ fontStyle: 'italic', color: 'var(--on-surface-variant)', marginBottom: '4rem' }}>
            A regra é inegociável: se o Anfitrião aceitou, o seu carro nunca é cancelado.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ backgroundColor: 'var(--surface-container-high)', padding: '1.5rem 2rem', borderRadius: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <span className="label-sm" style={{ opacity: 0.5, fontSize: '0.6rem' }}>Mercado Comum</span>
                <div className="title-sm">Incerteza</div>
              </div>
              <span style={{ color: 'var(--error-container)', fontSize: '0.75rem', fontWeight: 'bold' }}>Cancelamentos livres</span>
            </div>

            <div style={{ backgroundColor: 'var(--primary-container)', padding: '1.5rem 2rem', borderRadius: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 10px 30px rgba(57,255,20,0.1)' }}>
              <div style={{ textAlign: 'left' }}>
                <span className="label-sm" style={{ color: 'var(--on-primary-container)', fontSize: '0.6rem' }}>ZIV Mobility</span>
                <div className="title-sm" style={{ color: 'var(--on-primary)' }}>Compromisso Real</div>
              </div>
              <span className="material-symbols-outlined" style={{ color: 'var(--on-primary)', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>
          
          <p className="body-md" style={{ marginTop: '3rem', fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.6, maxWidth: '600px', margin: '3rem auto 0' }}>
            Implementamos uma taxa de deslocamento para chamadas acima de 3km. Isso garante que o Anfitrião seja remunerado pelo trajeto inicial, eliminando qualquer incentivo para cancelamento.
          </p>
        </div>
      </section>

      {/* Category Showcase (Horizontal) */}
      <section className="section-padding" style={{ overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h3 className="display-lg" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Escolha sua Atmosfera</h3>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          overflowX: 'auto', 
          padding: '2rem 1.5rem 4rem 1.5rem',
          scrollbarWidth: 'none'
        }}>
          {[
            { id: 'GREEN', name: 'ZIV Green', desc: 'O padrão ouro da mobilidade sustentável.' },
            { id: 'PLUS', name: 'ZIV Plus', desc: 'Mais espaço, mais conforto, mesma precisão.' },
            { id: 'XL', name: 'ZIV XL', desc: 'Para quando o seu mundo precisa de espaço.' }
          ].map((cat, i) => (
            <div key={i} className="bento-card" style={{ 
              minWidth: '320px', 
              height: '480px', 
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '50px', 
                left: '0', 
                right: '0', 
                fontSize: '10rem', 
                fontWeight: 900, 
                color: 'rgba(226,226,226,0.03)', 
                textAlign: 'center',
                pointerEvents: 'none'
              }}>{cat.id}</div>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <div className="img-placeholder" style={{ opacity: 0.2, mixBlendMode: 'overlay' }}>
                  [Sleek {cat.name} Vehicle Profile]
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 className="title-sm" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{cat.name}</h4>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O Controle Radical */}
      <section className="section-padding">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          backgroundColor: 'var(--surface-container-low)', 
          borderRadius: '2.5rem', 
          overflow: 'hidden' 
        }}>
          <div style={{ height: '300px' }}>
            <div className="img-placeholder" style={{ opacity: 0.8 }}>
              [High-Tech Vehicle Inspection Station with Green LED Accents]
            </div>
          </div>
          <div style={{ padding: '3rem' }}>
            <h3 className="display-lg" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>O Controle Radical</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Diferente das plataformas de massa, a ZIV limita sua frota a apenas 500 veículos por região. Por quê? Para que cada carro passe por uma inspeção física rigorosa na ZIV Station todas as semanas.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary-container)', fontWeight: 'bold' }}>
              <span className="material-symbols-outlined">verified</span>
              <span>500 Veículos. Zero Desvios.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--surface-container-low)', padding: '4rem 2rem', borderRadius: '2.5rem' }}>
          <h3 className="title-sm" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Comece sua Jornada</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div className="bento-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>phone_iphone</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.6rem', opacity: 0.5, textTransform: 'uppercase' }}>Disponível na</div>
                <div style={{ fontWeight: 'bold' }}>App Store</div>
              </div>
            </div>
            <div className="bento-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>play_arrow</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.6rem', opacity: 0.5, textTransform: 'uppercase' }}>Disponível no</div>
                <div style={{ fontWeight: 'bold' }}>Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '100px' }} />

    </main>
  );
}

function Hotspot({ top, left, right, bottom, title, desc, align = 'left' }: any) {
  return (
    <div style={{ 
      position: 'absolute', 
      top, left, right, bottom,
      display: 'flex',
      flexDirection: align === 'left' ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <div style={{ 
        width: '12px', 
        height: '12px', 
        backgroundColor: 'var(--primary-container)', 
        borderRadius: '50%', 
        boxShadow: '0 0 15px var(--primary-container)',
        animation: 'pulse 2s infinite'
      }}></div>
      <div style={{ 
        backgroundColor: 'rgba(42, 42, 42, 0.8)', 
        backdropFilter: 'blur(10px)', 
        padding: '0.75rem 1.25rem', 
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.05)',
        textAlign: align as any
      }}>
        <h4 style={{ color: 'var(--primary-container)', fontSize: '0.75rem', fontWeight: 'bold', margin: '0' }}>{title}</h4>
        <p style={{ color: 'var(--on-surface)', fontSize: '0.65rem', margin: '0' }}>{desc}</p>
      </div>
    </div>
  );
}
