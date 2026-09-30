import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

function Contactos() {
  return (
    <div style={{ minHeight: '100vh' }}>

      <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)', padding: '5rem 0', color: 'var(--color-white)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Contactos</h1>
            <p style={{ color: 'var(--color-text-light)' }}>Entre em contacto para um orçamento gratuito.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 style={{ color: 'var(--color-navy)', marginBottom: '1.5rem' }}>Informações de Contacto</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
                  <Phone size={24} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                  <div>
                    <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.25rem' }}>Telefone</h3>
                    <a href="tel:+351910000000" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>+351 910 000 000</a>
                    <p style={{ color: '#999999', fontSize: '0.875rem', margin: 0 }}>Chamada para rede móvel nacional</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
                  <Mail size={24} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                  <div>
                    <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.25rem' }}>Email</h3>
                    <a href="mailto:geral@seusite.pt" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>geral@seusite.pt</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
                  <MapPin size={24} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                  <div>
                    <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.25rem' }}>Zona de Atuação</h3>
                    <p style={{ color: 'var(--color-text-light)', margin: 0 }}>Porto, Maia, Matosinhos, Vila Nova de Gaia e arredores</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
                  <Clock size={24} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                  <div>
                    <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.25rem' }}>Horário</h3>
                    <p style={{ color: 'var(--color-text-light)', margin: 0 }}>Segunda a Sexta: 08:00 - 19:00</p>
                    <p style={{ color: '#999999', fontSize: '0.875rem', margin: 0 }}>Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 'var(--spacing-xl)' }}>
                <h3 style={{ color: 'var(--color-navy)', marginBottom: 'var(--spacing-sm)' }}>Redes Sociais</h3>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                  <a href="#" style={{ color: 'var(--color-navy)' }}><Facebook size={32} /></a>
                  <a href="#" style={{ color: 'var(--color-navy)' }}><Instagram size={32} /></a>
                  <a href="#" style={{ color: 'var(--color-navy)' }}><Linkedin size={32} /></a>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contactos