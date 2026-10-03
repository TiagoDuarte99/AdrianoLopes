import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';

function ZonasMarquee() {
  // Duplicamos a lista para o efeito infinito ficar suave
  const items = [...siteConfig.serviceAreas, ...siteConfig.serviceAreas];

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25, // ajusta a velocidade
        }}
        style={{
          display: 'flex',
          gap: 'var(--spacing-sm)',
          width: 'max-content',
        }}
      >
        {items.map((city, i) => (
          <span
            key={`${city}-${i}`}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              color: 'var(--color-white)',
              whiteSpace: 'nowrap',
            }}
          >
            {city}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default ZonasMarquee;
