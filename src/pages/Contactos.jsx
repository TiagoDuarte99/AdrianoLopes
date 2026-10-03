import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { siteConfig } from '../config/site';

function Contactos() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          backgroundImage: `
      url(${siteConfig.images.contactos})
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          padding: '6rem 0',
          color: 'var(--color-white)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>
              Contactos
            </h1>
            <p style={{ color: 'var(--color-text-light)' }}>
              Entre em contacto para um orçamento gratuito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Informações de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{ color: 'var(--color-navy)', marginBottom: '1.5rem' }}
              >
                Informações de Contacto
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-lg)',
                }}
              >
                {/* Telefone */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--spacing-sm)',
                  }}
                >
                  <Phone
                    size={24}
                    color="var(--color-yellow)"
                    style={{ flexShrink: 0 }}
                  />
                  <div>
                    <h3
                      style={{
                        color: 'var(--color-navy)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Telefone
                    </h3>
                    <a
                      href={siteConfig.phoneLink}
                      style={{
                        color: 'var(--color-text-light)',
                        textDecoration: 'none',
                      }}
                    >
                      {siteConfig.phone}
                    </a>
                    <p
                      style={{
                        color: 'var(--color-text-light)',
                        fontSize: '0.875rem',
                        margin: 0,
                      }}
                    >
                      Chamada para rede móvel nacional
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--spacing-sm)',
                  }}
                >
                  <Mail
                    size={24}
                    color="var(--color-yellow)"
                    style={{ flexShrink: 0 }}
                  />
                  <div>
                    <h3
                      style={{
                        color: 'var(--color-navy)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Email
                    </h3>
                    <a
                      href={siteConfig.emailLink}
                      style={{
                        color: 'var(--color-text-light)',
                        textDecoration: 'none',
                      }}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Morada / Zona */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--spacing-sm)',
                  }}
                >
                  <MapPin
                    size={24}
                    color="var(--color-yellow)"
                    style={{ flexShrink: 0 }}
                  />
                  <div>
                    <h3
                      style={{
                        color: 'var(--color-navy)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Morada
                    </h3>
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'var(--color-text-light)',
                        textDecoration: 'none',
                      }}
                    >
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                      <br />
                      {siteConfig.address.country}
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--spacing-sm)',
                  }}
                >
                  <Clock
                    size={24}
                    color="var(--color-yellow)"
                    style={{ flexShrink: 0 }}
                  />
                  <div>
                    <h3
                      style={{
                        color: 'var(--color-navy)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Horário
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-light)',
                        margin: 0,
                      }}
                    >
                      {siteConfig.schedule.weekdays}
                    </p>
                    <p
                      style={{
                        color: 'var(--color-text-light)',
                        fontSize: '0.875rem',
                        margin: 0,
                      }}
                    >
                      {siteConfig.schedule.saturday}
                    </p>
                    <p
                      style={{
                        color: 'var(--color-text-light)',
                        fontSize: '0.875rem',
                        margin: 0,
                      }}
                    >
                      {siteConfig.schedule.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div style={{ marginTop: 'var(--spacing-xl)' }}>
                <h3
                  style={{
                    color: 'var(--color-navy)',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  Redes Sociais
                </h3>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                  <a
                    href="#"
                    aria-label="Facebook"
                    style={{ color: 'var(--color-navy)' }}
                  >
                    <Facebook size={32} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    style={{ color: 'var(--color-navy)' }}
                  >
                    <Instagram size={32} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    style={{ color: 'var(--color-navy)' }}
                  >
                    <Linkedin size={32} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactos;
