export default function ZivStation() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
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
          <div className="img-placeholder" style={{ opacity: 0.4 }}>
            [Futuristic EV Charging Station at Night: Minimalist Architecture, Sharp Neon Green LED accents]
          </div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, black, rgba(0,0,0,0.6), transparent)'
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '850px' }} className="md:px-24">
          <h1 className="display-lg" style={{ marginBottom: '1.5rem', color: 'var(--on-surface)', lineHeight: 1 }}>
            Onde a Volatilidade Morre.<br/>
            <span style={{ color: 'var(--primary-container)' }}>A Previsibilidade Começa.</span>
          </h1>
          <p className="headline-md" style={{ 
            color: 'var(--on-surface-variant)', 
            fontWeight: 300,
            marginBottom: '3rem',
            maxWidth: '650px',
            lineHeight: 1.4
          }}>
            A ZIV Station é o Hub B2B de Mobilidade Sustentável. A base física e de engenharia financeira que viabiliza o maior faturamento líquido do mercado.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '1.25rem 2.5rem' }}>
              Aplicar para Anfitrião
            </button>
            <button style={{ 
              padding: '1.25rem 2.5rem', 
              borderRadius: '9999px', 
              backgroundColor: 'transparent', 
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--on-surface)',
              fontWeight: 'bold'
            }}>
              Ver Ecossistema
            </button>
          </div>
        </div>
      </section>

      {/* Dossiê de Alta Performance (Comparison Grid) */}
      <section className="section-padding" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1px',
          backgroundColor: 'rgba(60, 75, 53, 0.1)',
          borderRadius: '2rem',
          overflow: 'hidden'
        }}>
          {/* Matemática Quebrada */}
          <div style={{ backgroundColor: 'var(--surface-container-low)', padding: '4rem 3rem' }}>
            <span className="label-sm" style={{ opacity: 0.5, marginBottom: '1rem', display: 'block' }}>Dossiê Financeiro</span>
            <h2 className="title-sm" style={{ fontSize: '2rem', marginBottom: '3rem' }}>A Matemática Quebrada</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span className="material-symbols-outlined" style={{ opacity: 0.3 }}>trending_down</span>
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Volatilidade de Combustível</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>A oscilação diária do preço da gasolina corrói 40% da sua margem operacional sem aviso prévio.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span className="material-symbols-outlined" style={{ opacity: 0.3 }}>build</span>
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Manutenção Surpresa</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>A falta de padronização mecânica transforma qualquer imprevisto em um rombo no seu fluxo de caixa.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Matemática da Certeza */}
          <div style={{ backgroundColor: '#000000', padding: '4rem 3rem', borderLeft: '1px solid rgba(57, 255, 20, 0.1)' }}>
            <span className="label-sm" style={{ color: 'var(--primary-container)', marginBottom: '1rem', display: 'block' }}>A Vantagem ZIV</span>
            <h2 className="title-sm" style={{ fontSize: '2rem', marginBottom: '3rem' }}>A Matemática da Certeza</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontVariationSettings: "'FILL' 1" }}>shield</span>
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Blindagem de Custos</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Custo fixo de energia e manutenção preditiva integrada. Zero surpresas, 100% de controle.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontVariationSettings: "'FILL' 1" }}>local_gas_station</span>
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Taxa de Relocação 100% Livre</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>A taxa de deslocamento acima de 3km vai integralmente para o Anfitrião. Sem comissões ocultas.</p>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
              <span className="label-sm" style={{ color: 'var(--primary-container)', marginBottom: '0.5rem', display: 'block' }}>Performance Realizada</span>
              <div style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.05em' }}>
                R$ 15k <span style={{ fontSize: '1.5rem', opacity: 0.3 }}>a</span> R$ 18k
              </div>
              <p style={{ fontWeight: 'bold', color: 'var(--primary-container)' }}>líquidos por mês para parceiros ZIV.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hub de Ativos B2B */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>Hub de Ativos B2B</h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>Estrutura física e financeira projetada para o investidor de mobilidade.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: 'car_rental', title: 'Locação de Elite', desc: 'Acesso exclusivo a veículos elétricos e híbridos de alta performance. Frota gerida pela ZIV Station.', value: 'R$ 6.300', suffix: '/mês' },
              { icon: 'ev_station', title: 'Estações de Recarga', desc: 'O Posto do Futuro. Infraestrutura própria de carregamento ultra-rápido disponível 24/7 para membros.', value: 'Rede Própria', suffix: '' },
              { icon: 'business_center', title: 'Vendas e B2B', desc: 'Canal exclusivo para frotistas e investidores institucionais. Condições especiais de aquisição direta.', value: 'Investidores', suffix: '' }
            ].map((pillar, i) => (
              <div key={i} className="bento-card" style={{ padding: '2.5rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--primary-container)', marginBottom: '1.5rem' }}>{pillar.icon}</span>
                <h3 className="title-sm" style={{ marginBottom: '1rem' }}>{pillar.title}</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.6 }}>{pillar.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{pillar.value}<span style={{ fontSize: '0.875rem', opacity: 0.5 }}>{pillar.suffix}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Fortaleza de Qualidade */}
      <section className="section-padding">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '4/5', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
              <div className="img-placeholder">
                [Professional technician inspecting glossy EV interior in dark minimalist garage]
              </div>
            </div>
            <div style={{ 
              position: 'absolute', 
              bottom: '2rem', 
              left: '2rem', 
              right: '2rem', 
              backgroundColor: 'rgba(31, 31, 31, 0.8)', 
              backdropFilter: 'blur(15px)', 
              padding: '1.5rem', 
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <p style={{ color: 'var(--primary-container)', fontWeight: 'bold', marginBottom: '0.25rem' }}>Protocolo 001</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Limpeza e integridade técnica verificadas em cada turno.</p>
            </div>
          </div>
          
          <div>
            <span className="label-sm" style={{ color: 'var(--primary-container)', marginBottom: '1rem', display: 'block' }}>Padrão Operacional</span>
            <h2 className="display-lg" style={{ fontSize: '3rem', marginBottom: '2rem' }}>A Fortaleza da Qualidade</h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              A base da exclusividade. Limitamos nossa frota a cerca de 500 veículos por região. Isso nos permite vistoriar fisicamente cada carro na ZIV Station, garantindo o padrão estético inegociável.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Curadoria rigorosa de Anfitriões', 'Inspeção física pré-jornada', 'Padrão estético inegociável'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span style={{ fontWeight: 'bold' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA (Neon Theme) */}
      <section className="section-padding">
        <div style={{ 
          backgroundColor: 'var(--primary-container)', 
          borderRadius: '3rem', 
          padding: '5rem 2rem', 
          textAlign: 'center',
          color: 'var(--on-primary)'
        }}>
          <span className="label-sm" style={{ fontWeight: '900', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Vagas Limitadas</span>
          <h2 className="display-lg" style={{ fontSize: '4rem', color: 'var(--on-primary)', marginBottom: '2rem', lineHeight: 0.9 }}>
            A elite da mobilidade possui vagas limitadas.
          </h2>
          <p className="body-md" style={{ color: 'var(--on-primary)', opacity: 0.8, maxWidth: '600px', margin: '0 auto 3rem' }}>
            Não buscamos milhares de motoristas. Selecionamos centenas de Anfitriões Premium. Aplique agora para o processo seletivo da ZIV Station.
          </p>
          <button style={{ 
            backgroundColor: 'var(--on-primary)', 
            color: 'var(--primary-container)', 
            padding: '1.5rem 3rem', 
            borderRadius: '9999px', 
            fontWeight: 'bold', 
            fontSize: '1.25rem',
            border: 'none',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            Aplicar para a Lista de Espera
          </button>
        </div>
      </section>

      <div style={{ height: '100px' }} />

    </main>
  );
}
