import { Link } from 'react-router-dom'
import { Wrench, Zap, MapPin, Phone, ArrowRight, Home, Building, AlertTriangle, Check, Shield, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'

import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'

const faqItems = [
  { question: 'Quanto tempo demora uma remodelação elétrica?', answer: 'Depende da dimensão do imóvel. Para um apartamento T2-T3, demora normalmente 2-4 dias. Moradias podem demorar 5-10 dias.' },
  { question: 'Preciso de sair de casa durante as obras?', answer: 'Não é necessário, mas pode ser mais confortável. Trabalhamos por fases para minimizar o incómodo. Em alguns casos, recomendamos estar fora durante 1-2 dias.' },
  { question: 'O que inclui uma remodelação completa?', answer: 'Substituição do quadro elétrico, nova fiação, tomadas, interruptores, pontos de luz e certificação da instalação.' },
  { question: 'A instalação antiga precisa de ser toda substituída?', answer: 'Nem sempre. Avaliamos o estado da instalação e recomendamos apenas o necessário. Instalações anteriores a 1990 geralmente precisam de substituição total.' },
  { question: 'Fazem pequenas reparações?', answer: 'Sim, fazemos desde pequenas reparações (tomadas, interruptores) até remodelações completas e instalações industriais.' },
]

function InstalacoesEletricas() {
  return (
    <div style={{ minHeight: '100vh' }}>


      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)', padding: '5rem 0', color: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--spacing-lg)', color: 'var(--color-white)' }}>Instalações e Reparações Elétricas</h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>Serviços elétricos completos para habitações, condomínios e empresas. Do quadro às tomadas, garantimos segurança e qualidade.</p>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                <a href="#orcamento" className="btn btn-primary btn-lg">Pedir Orçamento</a>
                <a href="tel:+351910000000" className="btn btn-outline btn-lg"><Phone size={20} /> Ligar</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-xl)', backdropFilter: 'blur(10px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)' }}>
                  {[{ icon: Award, label: 'Certificação', value: 'ARC' }, { icon: Shield, label: 'Garantia', value: '2 anos' }, { icon: Clock, label: 'Resposta', value: '24-48h' }, { icon: Check, label: 'Projetos', value: '+600' }].map((item, i) => (
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

      {/* Serviços */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Os Nossos Serviços</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>Soluções elétricas completas para todas as necessidades.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {[{ title: 'Quadros Elétricos', desc: 'Substituição e montagem de quadros elétricos novos, com disjuntores e diferenciais certificados.', icon: Zap }, { title: 'Remodelações', desc: 'Remodelação completa de instalações elétricas em apartamentos, moradias e escritórios.', icon: Home }, { title: 'Iluminação', desc: 'Instalação de pontos de luz, candeeiros, fitas LED e sistemas de iluminação inteligente.', icon: Zap }, { title: 'Tomadas e Interruptores', desc: 'Substituição e adição de tomadas, interruptores e outros pontos de ligação.', icon: Wrench }, { title: 'Deteção de Avarias', desc: 'Diagnóstico e reparação de falhas elétricas, curtos-circuitos e outros problemas.', icon: AlertTriangle }, { title: 'Certificação', desc: 'Certificação de instalações elétricas e emissão de certificado de instalação (CIE).', icon: Award }].map((item, i) => (
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

      {/* Sinais de que precisas de remodelação */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Sinais de Que Precisas de Remodelação</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>Atenta nestes sinais que indicam que a tua instalação elétrica precisa de atualização.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {[{ title: 'Disjuntor Salta Frequentemente', desc: 'Indica sobrecarga ou falha na instalação.', icon: AlertTriangle }, { title: 'Luzes Tremem ou Piscam', desc: 'Pode ser mau contacto ou fiação antiga.', icon: Zap }, { title: 'Tomadas Quentes ou com Cheiro', desc: 'Sinal de sobrecarga perigosa. Desliga imediatamente!', icon: AlertTriangle }, { title: 'Fiação com Mais de 30 Anos', desc: 'Instalações anteriores a 1990 não cumprem normas atuais.', icon: Clock }, { title: 'Falta de Tomadas', desc: 'Uso excessivo de extensões indica necessidade de mais pontos.', icon: Wrench }, { title: 'Quadro Elétrico Antigo', desc: 'Quadros com fusíveis em vez de disjuntores precisam de substituição.', icon: Zap }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'flex-start' }}>
                <item.icon size={24} color="var(--color-yellow)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-xs)', fontSize: '1.0625rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.9375rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Como Funciona o Processo</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {[{ step: '1', title: 'Contacto', desc: 'Entra em contacto e descreve o teu projeto ou problema.' }, { step: '2', title: 'Avaliação', desc: 'Visitamos o local e avaliamos a instalação existente.' }, { step: '3', title: 'Orçamento', desc: 'Apresentamos proposta detalhada sem compromisso.' }, { step: '4', title: 'Execução', desc: 'Realizamos o trabalho com mínimo incómodo.' }, { step: '5', title: 'Testes', desc: 'Testamos tudo e explicamos o funcionamento.' }, { step: '6', title: 'Certificação', desc: 'Emitimos certificado e garantimos o trabalho.' }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ position: 'relative', paddingLeft: '4rem' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: '3rem', height: '3rem', backgroundColor: 'var(--color-yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--color-navy)' }}>{item.step}</div>
                <h3 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-xs)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)', margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de imóveis */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Tipos de Imóveis</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Trabalhamos em todos os tipos de imóveis e instalações.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {[{ title: 'Apartamentos', desc: 'Remodelações e instalações em T0 a T4+.', icon: Home }, { title: 'Moradias', desc: 'Instalações completas em moradias unifamiliares.', icon: Home }, { title: 'Escritórios', desc: 'Instalações elétricas para espaços comerciais.', icon: Building }, { title: 'Lojas', desc: 'Iluminação, tomadas e quadros para comércio.', icon: Building }].map((item, i) => (
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
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Galeria de Trabalhos</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-sm)' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{ height: '250px', backgroundColor: 'var(--color-surface-dark)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img src={`/placeholder${i}.jpg`} alt={`Instalação elétrica ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bg">
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
            <ContactForm serviceType="Instalações Elétricas" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-yellow)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Precisas de Eletricista?</h2>
            <p style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-xl)' }}>Desde pequenas reparações a remodelações completas, estamos aqui para ajudar.</p>
            <Link to="/contactos" className="btn btn-navy btn-lg">Pedir Orçamento Grátis <ArrowRight size={20} /></Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default InstalacoesEletricas