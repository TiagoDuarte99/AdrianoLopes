import { Link } from 'react-router-dom'
import { Sun, Zap, MapPin, Phone, ArrowRight, Shield, TrendingUp, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import FAQ from '../components/FAQ'
import SolarForm from '../components/SolarForm'

const faqItems = [
  { question: 'Quanto tempo demora a instalação de painéis solares?', answer: 'A instalação demora normalmente 1-2 dias para moradias. Para sistemas maiores ou condomínios, pode demorar 3-5 dias.' },
  { question: 'Preciso de licença para instalar painéis solares?', answer: 'Para sistemas até 1500W (microprodução) não é necessário licença. Para sistemas maiores, tratamos de todo o processo de registo na DGEG.' },
  { question: 'Qual o retorno do investimento?', answer: 'O payback médio é de 5-7 anos. Com a subida dos preços da energia, este período tem diminuído. Os painéis duram 25+ anos.' },
  { question: 'Posso vender o excedente de energia?', answer: 'Sim, através do regime de autoconsumo com venda de excedentes à rede. A remuneração varia consoante o contrato com a comercializadora.' },
  { question: 'Os painéis funcionam em dias nublados?', answer: 'Sim, os painéis produzem energia mesmo em dias nublados, embora com menor eficiência (cerca de 10-25% da capacidade máxima).' },
]

function PaineisSolares() {
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)', padding: '5rem 0', color: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--spacing-lg)', color: 'var(--color-white)' }}>Instalação de Painéis Solares</h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>Reduza a sua fatura de eletricidade até 80% com um sistema de autoconsumo solar personalizado.</p>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                <a href="#orcamento" className="btn btn-primary btn-lg">Pedir Orçamento</a>
                <a href="tel:+351910000000" className="btn btn-outline btn-lg"><Phone size={20} /> Ligar</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-xl)', backdropFilter: 'blur(10px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)' }}>
                  {[{ icon: TrendingUp, label: 'Poupança', value: 'até 80%' }, { icon: Shield, label: 'Garantia', value: '25 anos' }, { icon: Zap, label: 'Payback', value: '5-7 anos' }, { icon: Home, label: 'Valorização', value: '+10%' }].map((item, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <item.icon size={32} color="var(--color-yellow)" style={{ marginBottom: 'var(--spacing-xs)' }} />
                      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-white)' }}>{item.value}</div>
                      <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problemas que resolve */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Por que Instalar Painéis Solares?</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>Os painéis solares resolvem múltiplos problemas e trazem benefícios imediatos.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {[{ title: 'Faturas Elevadas', desc: 'Reduza a sua fatura de eletricidade até 80% produzindo a sua própria energia.', icon: TrendingUp }, { title: 'Independência Energética', desc: 'Produza a sua própria energia e reduza a dependência da rede elétrica.', icon: Zap }, { title: 'Valorização do Imóvel', desc: 'Um imóvel com painéis solares vale até 10% mais no mercado.', icon: Home }, { title: 'Sustentabilidade', desc: 'Contribua para um planeta mais verde com energia 100% renovável.', icon: Sun }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-lg)' }}>
                  <item.icon size={40} color="var(--color-yellow)" />
                </div>
                <h3 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Como Funciona o Processo</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {[{ step: '1', title: 'Contacto Inicial', desc: 'Fale connosco e descreva o seu projeto.' }, { step: '2', title: 'Visita Técnica', desc: 'Avaliamos o local e identificamos a melhor solução.' }, { step: '3', title: 'Orçamento', desc: 'Apresentamos proposta detalhada sem compromisso.' }, { step: '4', title: 'Instalação', desc: 'Instalamos o sistema em 1-2 dias.' }, { step: '5', title: 'Legalização', desc: 'Tratamos de todo o processo na DGEG.' }, { step: '6', title: 'Acompanhamento', desc: 'Monitorização e suporte pós-venda.' }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ position: 'relative', paddingLeft: '4rem' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: '3rem', height: '3rem', backgroundColor: 'var(--color-yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--color-navy)' }}>{item.step}</div>
                <h3 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-xs)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de imóveis */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Tipos de Imóveis</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Atendemos todos os tipos de imóveis na região Norte.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {[{ title: 'Moradias', desc: 'Sistemas de 3kW a 15kW para autoconsumo familiar.', icon: Home }, { title: 'Prédios', desc: 'Sistemas coletivos para múltiplas frações.', icon: Zap }, { title: 'Condomínios', desc: 'Soluções para zonas comuns e bombeamento de água.', icon: Zap }, { title: 'Empresas', desc: 'Sistemas industriais de grande potência.', icon: Zap }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <item.icon size={40} color="var(--color-yellow)" style={{ marginBottom: 'var(--spacing-sm)' }} />
                <h3 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-xs)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)', margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Galeria de Projetos</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-sm)' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{ height: '250px', backgroundColor: 'var(--color-surface-dark)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img src={`/placeholder${i}.jpg`} alt={`Projeto painéis solares ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Perguntas Frequentes</h2>
          </motion.div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="section section-navy">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
            <MapPin size={48} color="var(--color-yellow)" style={{ marginBottom: 'var(--spacing-lg)' }} />
            <h2 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-sm)' }}>Zonas de Atendimento</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Porto, Maia, Matosinhos, Vila Nova de Gaia e todos os arredores.</p>
          </motion.div>
        </div>
      </section>

      {/* Formulário */}
      <section id="orcamento" className="section section-bg">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SolarForm />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-yellow)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Pronto para Poupar na Eletricidade?</h2>
            <p style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-xl)' }}>Peça um orçamento gratuito e descubra quanto pode poupar.</p>
            <Link to="/contactos" className="btn btn-navy btn-lg">Pedir Orçamento Grátis <ArrowRight size={20} /></Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default PaineisSolares