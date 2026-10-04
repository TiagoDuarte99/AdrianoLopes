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
import { motion } from 'framer-motion';

import { siteConfig } from '../config/site';

function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { path: '/paineis-solares', label: 'Painéis Solares' },
    {
      path: '/carregadores-carros-eletricos',
      label: 'Carregadores Elétricos',
    },
    {
      path: '/instalacoes-eletricas',
      label: 'Instalações Elétricas',
    },
  ];

  const quickLinks = [
    { path: '/obras-realizadas', label: 'Obras Realizadas' },
    { path: '/sobre-nos', label: 'Sobre Nós' },
    { path: '/contactos', label: 'Contactos' },
  ];

  const linkStyle = {
    color: 'var(--color-text-light)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Marca */}
          <div>
            <div className="footer-brand">
              <Link
                to="/"
                aria-label={`Ir para a página inicial de ${siteConfig.name}`}
                className="footer-logo-link"
              >
                <img
                  src={siteConfig.images.logoWhite}
                  alt={`Logótipo de ${siteConfig.name}`}
                  width="48"
                  height="48"
                  className="footer-logo"
                />

                <div>
                  <div className="footer-brand-name">
                    {siteConfig.name}
                  </div>

                  <p className="footer-brand-description">
                    Instalações Elétricas
                  </p>
                </div>
              </Link>
            </div>

            <p className="footer-description">
              Soluções profissionais em instalações elétricas, painéis solares
              e carregadores para veículos elétricos.
            </p>

            <div className="footer-socials">
              <motion.a
                href="#"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                className="footer-social-link"
              >
                <Facebook size={24} />
              </motion.a>

              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                className="footer-social-link"
              >
                <Instagram size={24} />
              </motion.a>

              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                className="footer-social-link"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h2 className="footer-title">Serviços</h2>

            <ul className="footer-links-list">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color =
                        'var(--color-yellow)';
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color =
                        'var(--color-text-light)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <h2 className="footer-title">Links Rápidos</h2>

            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color =
                        'var(--color-yellow)';
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color =
                        'var(--color-text-light)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h2 className="footer-title">Contactos</h2>

            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone className="footer-icon" size={20} />

                <div>
                  <a
                    href={siteConfig.phoneLink}
                    className="footer-contact-link"
                  >
                    {siteConfig.phone}
                  </a>

                  <p className="footer-contact-note">
                    Chamada para rede móvel nacional
                  </p>
                </div>
              </li>

              <li className="footer-contact-item">
                <Mail className="footer-icon" size={20} />

                <a
                  href={siteConfig.emailLink}
                  className="footer-contact-link"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li className="footer-contact-item">
                <MapPin className="footer-icon" size={20} />

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link"
                >
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode}{' '}
                  {siteConfig.address.city}
                  <br />
                  {siteConfig.address.country}
                </a>
              </li>

              <li className="footer-contact-item">
                <Clock className="footer-icon" size={20} />

                <div className="footer-schedule">
                  <p>{siteConfig.schedule.weekdays}</p>
                  <p>{siteConfig.schedule.saturday}</p>
                  <p>{siteConfig.schedule.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;