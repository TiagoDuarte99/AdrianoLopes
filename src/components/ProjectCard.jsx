
import { MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function ProjectCard({ project, onClick, delay = 0 }) {
  const {  title, location, description, images, category } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(project)}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        border: '1px solid #e8edf2'
      }}
    >
      <div style={{
        position: 'relative',
        height: '240px',
        overflow: 'hidden',
        backgroundColor: '#f4f7fa'
      }}>
        <img
          src={images[0] || '/placeholder-project.jpg'}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          loading="lazy"
        />
        {category && (
          <span style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: '#f7b500',
            color: '#0b1f33',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600
          }}>
            {category}
          </span>
        )}
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.25rem',
          marginBottom: '0.5rem',
          color: '#0b1f33'
        }}>
          {title}
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#666666',
          fontSize: '0.875rem',
          marginBottom: '0.75rem'
        }}>
          <MapPin size={14} />
          {location}
        </div>
        <p style={{
          color: '#666666',
          fontSize: '0.9375rem',
          marginBottom: '1rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#f7b500',
          fontWeight: 600,
          fontSize: '0.9375rem'
        }}>
          Ver projeto
          <ArrowRight size={16} />
        </span>
      </div>
    </motion.div>
  )
}

export default ProjectCard