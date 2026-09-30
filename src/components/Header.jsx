import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import iconePreto from '../assets/icone-preto.png';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/paineis-solares', label: 'Painéis Solares' },
    { path: '/carregadores-carros-eletricos', label: 'Carregadores Elétricos' },
    { path: '/instalacoes-eletricas', label: 'Instalações' },
    { path: '/obras-realizadas', label: 'Obras' },
    { path: '/sobre-nos', label: 'Sobre' },
    { path: '/contactos', label: 'Contactos' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0',
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
              src={iconePreto}
              alt="EletricidadePro"
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
                  color: 'var(--color-navy)',
                  lineHeight: 1.2,
                }}
              >
                Adriano Lopes
              </h1>

              <p
                style={{
                  fontSize: '0.75rem',
                  margin: 0,
                  color: 'var(--color-text-light)',
                }}
              >
                Instalações Elétricas
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{ display: 'none', gap: '0.5rem' }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  color: isActive(item.path) ? '#f7b500' : '#0b1f33',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = '#f4f7fa';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div style={{ display: 'none', gap: '1rem' }} className="desktop-cta">
            <a
              href="tel:+351910000000"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#0b1f33',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Ligar
            </a>
            <Link
              to="/contactos"
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Pedir Orçamento
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? (
              <X size={28} color="#0b1f33" />
            ) : (
              <Menu size={28} color="#0b1f33" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e0e0e0',
              overflow: 'hidden',
            }}
            className="mobile-nav"
          >
            <nav style={{ padding: '1rem 0' }}>
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    color: isActive(item.path) ? '#f7b500' : '#0b1f33',
                    fontWeight: isActive(item.path) ? 600 : 400,
                    textDecoration: 'none',
                    borderBottom:
                      index < navItems.length - 1
                        ? '1px solid #f4f7fa'
                        : 'none',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <a
                  href="tel:+351910000000"
                  className="btn btn-navy btn-block"
                  style={{ textDecoration: 'none' }}
                >
                  Ligar Agora
                </a>
                <Link
                  to="/contactos"
                  className="btn btn-primary btn-block"
                  style={{ textDecoration: 'none' }}
                >
                  Pedir Orçamento
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav, .desktop-cta {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
