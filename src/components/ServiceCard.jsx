import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  backgroundImage,
  delay = 0,
}) {
  const hasBackgroundImage = Boolean(backgroundImage);

  const cardBaseStyle = {
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--spacing-lg)',
    boxShadow: 'var(--shadow-lg)',
    border: hasBackgroundImage
      ? '1px solid rgba(255,255,255,0.15)'
      : '1px solid var(--color-border)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    background: hasBackgroundImage
      ? `url(${backgroundImage})`
      : 'var(--color-white)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const iconBoxStyle = {
    width: '64px',
    height: '64px',
    backgroundColor: hasBackgroundImage
      ? 'rgba(255,255,255,0.15)'
      : 'var(--color-surface)',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'var(--spacing-md)',
    backdropFilter: hasBackgroundImage ? 'blur(5px)' : undefined,
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: 'var(--spacing-sm)',
    color: hasBackgroundImage ? 'var(--color-white)' : 'var(--color-navy)',
  };

  const descriptionStyle = {
    color: hasBackgroundImage
      ? 'rgba(255,255,255,0.88)'
      : 'var(--color-text-light)',
    marginBottom: 'var(--spacing-md)',
    flex: 1,
  };

  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-xs)',
    color: 'var(--color-yellow)',
    fontWeight: 600,
    textDecoration: 'none',
    marginTop: 'auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      style={{
        ...cardBaseStyle,
        textDecoration: 'none',
      }}
    >
      <Link
        to={link}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div style={iconBoxStyle}>
          <Icon size={32} color="var(--color-yellow)" />
        </div>

        <h3 style={titleStyle}>{title}</h3>

        <p style={descriptionStyle}>{description}</p>

        <span style={linkStyle}>
          Saber mais
          <ArrowRight size={18} />
        </span>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
