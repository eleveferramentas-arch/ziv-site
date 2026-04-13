export default function QueroViajar() {
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
            [Ultra-Modern Luxury Electric Car Interior - Rear Seat View]
          </div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, black, rgba(0,0,0,0.4), transparent)'
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }} className="md:px-24">
          <h1 className="display-lg" style={{ marginBottom: '1.5rem', color: 'var(--on-surface)' }}>
            A Certeza do Destino.<br/>O Respeito ao Seu Tempo.
          </h1>
          <p className="headline-md" style={{ 
            color: 'rgba(226, 226, 222, 0.8)', 
            fontWeight: 300,
            marginBottom: '2.5rem',
            maxWidth: '650px',
            lineHeight: 1.4
          }}>
            Não vendemos apenas transporte; entregamos a paz necessária para você retomar o controle do seu dia.
          </p>
        </div>
      </section>

      {/* Jornada do Passageiro (Vertical Stepper) */}
      <section className="section-padding" style={{ backgroundColor: '#000000' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="label-sm" style={{ color: 'var(--primary-container)', textAlign: 'center', marginBottom: '4rem' }}>A Jornada ZIV</h2>
          
          <div style={{ position: 'relative' }}>
            {/* Vertical Line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: 'rgba(60, 75, 53, 0.3)',
              zIndex: 1
            }} className="md-line-center"></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
              {[
                { step: '01', title: 'Passo 1: A Escolha do Padrão', text: 'Agendamento Inteligente desenhado para quem não pode deixar o acaso decidir o rumo da agenda profissional.' },
                { step: '02', title: 'Passo 2: A Matemática da Certeza', text: 'Para corridas acima de 3km, a taxa de deslocamento extra vai 100% para o anfitrião. Você paga o justo; nós garantimos o fim dos cancelamentos.' },
                { step: '03', title: 'Passo 3: Controle Radical de Qualidade', text: 'ZIV Station e frota estritamente limitada a 500 carros para assegurar que cada veículo seja um santuário de limpeza e manutenção.' },
                { step: '04', title: 'Passo 4: Santuário Acústico', text: 'Silêncio absoluto da frota 100% elétrica. Onde o barulho da cidade dá lugar aos seus pensamentos.' },
                { step: '05', title: 'Passo 5: Ciclo da Excelência', text: 'Avaliação mútua e rigorosa. Na ZIV, o bom comportamento é o combustível que mantém a comunidade exclusiva.' }
              ].map((item, i) => (
                <div key={i} style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--primary-container)', 
                    boxShadow: '0 0 15px var(--primary-container)',
                    zIndex: 2,
                    marginTop: '8px',
                    flexShrink: 0
                  }}></div>
                  <div className="bento-card" style={{ flex: 1, backgroundColor: 'var(--surface-container-high)', padding: '2rem' }}>
                    <h3 className="title-sm" style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                      {item.title}
                      <span style={{ opacity: 0.1, fontSize: '2rem', fontWeight: 900 }}>{item.step}</span>
                    </h3>
                    <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase de Categorias */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <h2 className="headline-md" style={{ textAlign: 'center', marginBottom: '4rem' }}>A Frota do Futuro</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { id: 'Green', name: 'ZIV Green', desc: 'Eficiência absoluta e consciência ambiental sem abrir mão do conforto premium.' },
            { id: 'Plus', name: 'ZIV Plus', desc: 'Espaço ampliado e acabamento superior para quem exige o máximo em cada detalhe.' },
            { id: 'XL', name: 'ZIV XL', desc: 'Capacidade e versatilidade para grupos ou bagagem extra, mantendo a sofisticação elétrica.' }
          ].map((cat, i) => (
            <div key={i} className="bento-card" style={{ 
              height: '450px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-end',
              backgroundColor: 'var(--surface-container-high)'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                fontSize: '8rem', 
                fontWeight: 900, 
                color: 'rgba(226, 226, 226, 0.03)',
                textTransform: 'uppercase',
                pointerEvents: 'none'
              }}>
                {cat.id}
              </div>
              <div style={{ position: 'absolute', top: '2rem', left: '0', right: '0', height: '200px' }}>
                <div className="img-placeholder" style={{ backgroundColor: 'transparent' }}>
                  [Sleek {cat.id} Electric Vehicle Silhouette]
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 className="headline-md" style={{ color: 'var(--primary-container)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{cat.name}</h3>
                <p className="body-md" style={{ fontSize: '0.875rem', color: 'rgba(226, 226, 226, 0.6)' }}>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Argumento Confrontacional */}
      <section className="section-padding" style={{ backgroundColor: '#000000' }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1px',
          backgroundColor: 'rgba(60, 75, 53, 0.1)'
        }}>
          <div style={{ backgroundColor: '#000000', padding: '3rem' }}>
            <h4 className="label-sm" style={{ opacity: 0.3, marginBottom: '2rem' }}>Mercado Tradicional</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', color: 'rgba(226, 226, 226, 0.5)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>close</span>
                <p className="body-md">Incerteza de aceitação e cancelamentos frequentes.</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'rgba(226, 226, 226, 0.5)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>close</span>
                <p className="body-md">Frota heterogênea e manutenção questionável.</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'rgba(226, 226, 226, 0.5)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>close</span>
                <p className="body-md">Ruído excessivo e ambiente de estresse urbano.</p>
              </li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--surface-container-low)', padding: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '2.5rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h4 className="label-sm" style={{ color: 'var(--primary-container)', marginBottom: '2rem' }}>Experiência ZIV</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '1.2rem' }}>check</span>
                <p className="body-md" style={{ fontWeight: 500 }}>Previsibilidade matemática e compromisso com o horário.</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '1.2rem' }}>check</span>
                <p className="body-md" style={{ fontWeight: 500 }}>Padrão rigoroso de limpeza e conforto premium.</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '1.2rem' }}>check</span>
                <p className="body-md" style={{ fontWeight: 500 }}>Silêncio absoluto para produtividade ou descanso.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding" style={{ textAlign: 'center', backgroundColor: '#000000', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', backgroundColor: 'rgba(57, 255, 20, 0.05)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="headline-md" style={{ marginBottom: '2rem', fontSize: '3rem' }}>Pronto para elevar o seu padrão de mobilidade?</h2>
          <p className="body-md" style={{ color: 'rgba(226, 226, 226, 0.6)', marginBottom: '3rem' }}>Baixe o app e reserve sua primeira experiência em um santuário sobre rodas.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {/* App Store Badge Placeholder */}
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              backgroundColor: 'var(--surface-container-high)', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '1rem', 
              border: '1px solid rgba(255,255,255,0.05)',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>app_store</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6 }}>Disponível na</div>
                <div style={{ fontWeight: 'bold' }}>App Store</div>
              </div>
            </a>
            {/* Google Play Badge Placeholder */}
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              backgroundColor: 'var(--surface-container-high)', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '1rem', 
              border: '1px solid rgba(255,255,255,0.05)',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>play_store</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6 }}>Disponível no</div>
                <div style={{ fontWeight: 'bold' }}>Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Spacing for mobile dock */}
      <div style={{ height: '100px' }} />

      <style>{`
        @media (min-width: 768px) {
          .md-line-center {
            left: 50% !important;
          }
        }
      `}</style>

    </main>
  );
}
