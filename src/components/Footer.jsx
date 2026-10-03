import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';
import logoBranco from '../assets/Logo-branco.png';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { path: '/paineis-solares', label: 'Painéis Solares' },
    { path: '/carregadores-carros-eletricos', label: 'Carregadores Elétricos' },
    { path: '/instalacoes-eletricas', label: 'Instalações Elétricas' },
    { path: '/eletricidade-condominios', label: 'Condomínios' },
  ];

  const quickLinks = [
    { path: '/obras-realizadas', label: 'Obras Realizadas' },
    { path: '/sobre-nos', label: 'Sobre Nós' },
    { path: '/contactos', label: 'Contactos' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#0b1f33',
        color: '#ffffff',
        paddingTop: '4rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              {/* Logo */}
              <Link
                to="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={logoBranco}
                  alt="Adriano Lopes - Instalações Elétricas"
                  width="48"
                  height="48"
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'contain',
                    flexShrink: 0,
                  }}
                />

                <div>
                  <h1
                    style={{
                      fontSize: '1.5rem',
                      margin: 0,
                      color: 'var(--color-white)',
                      lineHeight: 1.2,
                    }}
                  >
                    Adriano Lopes
                  </h1>

                  <p
                    style={{
                      fontSize: '0.75rem',
                      margin: 0,
                      color: 'var(--color-white)',
                    }}
                  >
                    Instalações Elétricas
                  </p>
                </div>
              </Link>
            </div>
            <p style={{ color: '#cccccc', marginBottom: '1.5rem' }}>
              +15 anos de experiência em instalações elétricas, painéis solares
              e carregadores para veículos elétricos.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                style={{ color: '#ffffff' }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                style={{ color: '#ffffff' }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                style={{ color: '#ffffff' }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3
              style={{
                color: '#f7b500',
                marginBottom: '1.5rem',
                fontSize: '1.25rem',
              }}
            >
              Serviços
            </h3>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f7b500')}
                    onMouseLeave={(e) => (e.target.style.color = '#cccccc')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3
              style={{
                color: '#f7b500',
                marginBottom: '1.5rem',
                fontSize: '1.25rem',
              }}
            >
              Links Rápidos
            </h3>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f7b500')}
                    onMouseLeave={(e) => (e.target.style.color = '#cccccc')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3
              style={{
                color: '#f7b500',
                marginBottom: '1.5rem',
                fontSize: '1.25rem',
              }}
            >
              Contactos
            </h3>
            <ul
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <li
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <Phone size={20} color="#f7b500" style={{ flexShrink: 0 }} />
                <div>
                  <a
                    href="tel:+351910000000"
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                  >
                    +351 910 000 000
                  </a>
                  <p
                    style={{
                      color: '#cccccc',
                      fontSize: '0.875rem',
                      margin: 0,
                    }}
                  >
                    Chamada para rede móvel nacional
                  </p>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <Mail size={20} color="#f7b500" style={{ flexShrink: 0 }} />
                <a
                  href="mailto:geral@seusite.pt"
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  geral@seusite.pt
                </a>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <MapPin size={20} color="#f7b500" style={{ flexShrink: 0 }} />
                <span style={{ color: '#ffffff' }}>
                  Porto, Maia, Matosinhos, Vila Nova de Gaia
                </span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <Clock size={20} color="#f7b500" style={{ flexShrink: 0 }} />
                <div style={{ color: '#ffffff' }}>
                  <p style={{ margin: 0 }}>Seg - Sex: 08:00 - 19:00</p>
                  <p
                    style={{
                      margin: 0,
                      color: '#cccccc',
                      fontSize: '0.875rem',
                    }}
                  >
                    Sábado: 09:00 - 13:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            textAlign: 'center',
            color: '#cccccc',
            fontSize: '0.875rem',
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {currentYear} EletricidadePro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
