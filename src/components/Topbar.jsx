import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/site';

function Topbar() {
  return (
    <motion.div 
      className="topbar"
      style={{
        backgroundColor: 'var(--color-navy)',
        color: '#ffffff',
        padding: '0.5rem 0',
        fontSize: '0.875rem'
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <motion.a 
            href={siteConfig.phoneLink}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: '#ffffff',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={16} color="#f7b500" />
            <span>{siteConfig.phone}</span>
          </motion.a>
          <div style={{ color: '#cccccc' }}>
            {siteConfig.fullAddress}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Topbar