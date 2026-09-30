import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function ServiceCard({ icon: Icon, title, description, link, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        border: '1px solid #e8edf2',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{
        width: '64px',
        height: '64px',
        backgroundColor: '#f4f7fa',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem'
      }}>
        <Icon size={32} color="#f7b500" />
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#0b1f33'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#666666',
        marginBottom: '1.5rem',
        flex: 1
      }}>
        {description}
      </p>
      <Link
        to={link}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#f7b500',
          fontWeight: 600,
          textDecoration: 'none',
          marginTop: 'auto'
        }}
      >
        Saber mais
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  )
}

export default ServiceCard