import React from 'react'
import { Link } from 'react-router-dom'
import { Sun, Battery, Wrench, Building, Check, Star, MapPin, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import FAQ from '../components/FAQ'

const projects = [
  { id: 1, title: 'Instalação Painéis Solares', location: 'Maia', description: 'Sistema de 6kW com baterias', images: ['/placeholder1.jpg'], category: 'Painéis Solares', fullDescription: 'Instalação completa...', features: ['6kW potência', 'Baterias 10kWh', 'Monitorização app'] },
  { id: 2, title: 'Carregador Condomínio', location: 'Porto', description: '4 wallboxes em garagem', images: ['/placeholder2.jpg'], category: 'Carregadores', fullDescription: 'Instalação de 4 carregadores...', features: ['4 wallboxes 22kW', 'Gestão de carga', 'Acesso por app'] },
  { id: 3, title: 'Remodelação Elétrica', location: 'Matosinhos', description: 'Apartamento T3 completo', images: ['/placeholder3.jpg'], category: 'Instalações', fullDescription: 'Remodelação total...', features: ['Quadro novo', '30+ pontos', 'Certificação'] },
]

const testimonials = [
  { name: 'João Silva', location: 'Porto', text: 'Excelente serviço! Instalaram os painéis solares em 2 dias. Equipa muito profissional.', rating: 5 },
  { name: 'Maria Santos', location: 'Maia', text: 'Coloquei um carregador para o meu carro elétrico. Trabalho impecável e preço justo.', rating: 5 },
  { name: 'Pedro Costa', location: 'Gaia', text: 'Fizeram a remodelação elétrica do meu apartamento. Recomendo vivamente!', rating: 5 },
]

const faqItems = [
  { question: 'Quanto tempo demora uma instalação de painéis solares?', answer: 'Normalmente entre 1-3 dias, dependendo da complexidade do sistema e do tamanho da instalação.' },
  { question: 'Preciso de licença para instalar painéis solares?', answer: 'Para sistemas de autoconsumo até 1500W não é necessário. Para sistemas maiores, tratamos de todo o processo de registo na DGEG.' },
  { question: 'Qual a garantia dos equipamentos?', answer: 'Os painéis solares têm garantia de 25 anos. As baterias e inversores têm garantia entre 5-10 anos, dependendo do fabricante.' },
]

const stats = [
  { value: '+15', label: 'Anos de Experiência' },
  { value: '+600', label: 'Projetos Realizados' },
  { value: '+400', label: 'Clientes Satisfeitos' },
  { value: '100%', label: 'Taxa de Sucesso' },
]

function Home() {
  const [selectedProject, setSelectedProject] = React.useState(null)

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)',
        padding: '6rem 0',
        color: 'var(--color-white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 'var(--spacing-lg)', color: 'var(--color-white)', lineHeight: 1.1 }}>
                Soluções Energéticas para o <span style={{ color: 'var(--color-yellow)' }}>Futuro</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
                Especialistas em painéis solares, carregadores para carros elétricos e instalações elétricas no Porto e região Norte.
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                <Link to="/contactos" className="btn btn-primary btn-lg">Pedir Orçamento Grátis</Link>
                <a href="tel:+351910000000" className="btn btn-outline btn-lg"><Phone size={20} /> Ligar Agora</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-xl)', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: 'var(--color-yellow)', marginBottom: 'var(--spacing-lg)' }}>Por que escolher-nos?</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                  {['Certificação ARC', '+15 anos experiência', 'Orçamento gratuito', 'Garantia estendida', 'Suporte pós-venda', 'Pagamento faseado'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-white)' }}>
                      <Check size={20} color="var(--color-yellow)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'var(--color-yellow)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-navy)' }}>{stat.value}</div>
                <div style={{ color: 'var(--color-navy)', fontWeight: 500 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Os Nossos Serviços</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>Soluções completas em energia solar, mobilidade elétrica e instalações elétricas.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
            <ServiceCard icon={Sun} title="Painéis Solares" description="Instalação de sistemas de autoconsumo com baterias e monitorização inteligente." link="/paineis-solares" delay={0} />
            <ServiceCard icon={Battery} title="Carregadores Elétricos" description="Wallboxes para moradias e condomínios. Instalação certificada e rápida." link="/carregadores-carros-eletricos" delay={0.1} />
            <ServiceCard icon={Wrench} title="Instalações Elétricas" description="Reparações, remodelações e instalações elétricas completas." link="/instalacoes-eletricas" delay={0.2} />
            <ServiceCard icon={Building} title="Condomínios" description="Manutenção de zonas comuns, garagens, portões e intercomunicadores." link="/eletricidade-condominios" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Obras Realizadas</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>Confira alguns dos nossos projetos recentes.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} delay={i * 0.1} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/obras-realizadas" className="btn btn-navy btn-lg">Ver Todas as Obras <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>O Que Dizem os Nossos Clientes</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-surface-dark)' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: 'var(--spacing-sm)' }}>
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={20} color="var(--color-yellow)" fill="var(--color-yellow)" />)}
                </div>
                <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-lg)', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)' }}>{t.name}</div>
                <div style={{ color: '#999999', fontSize: '0.875rem' }}>{t.location}</div>
              </motion.div>
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

      {/* Service Areas */}
      <section className="section section-navy">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
            <MapPin size={48} color="var(--color-yellow)" style={{ marginBottom: 'var(--spacing-lg)' }} />
            <h2 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-sm)' }}>Zonas de Atuação</h2>
            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>Atendemos Porto, Maia, Matosinhos, Vila Nova de Gaia e todos os arredores.</p>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Porto', 'Maia', 'Matosinhos', 'Vila Nova de Gaia', 'Valongo', 'Gondomar', 'Póvoa de Varzim', 'Vila do Conde'].map((city, i) => (
                <span key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', color: 'var(--color-white)' }}>{city}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: 'var(--color-yellow)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Pronto para Começar o Seu Projeto?</h2>
            <p style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-xl)', fontSize: '1.125rem' }}>Peça um orçamento gratuito e sem compromisso.</p>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contactos" className="btn btn-navy btn-lg">Pedir Orçamento Grátis</Link>
              <a href="tel:+351910000000" className="btn btn-outline btn-lg" style={{ borderColor: 'var(--color-navy)', color: 'var(--color-navy)' }}><Phone size={20} /> Ligar Agora</a>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default Home