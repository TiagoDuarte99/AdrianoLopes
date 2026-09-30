import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

function Topbar() {
  return (
    <motion.div 
      className="topbar"
      style={{
        backgroundColor: '#0b1f33',
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
            href="tel:+351910000000"
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
            <span>+351 910 000 000</span>
          </motion.a>
          <div style={{ color: '#cccccc' }}>
            Porto, Maia, Matosinhos, Vila Nova de Gaia e arredores
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Topbar