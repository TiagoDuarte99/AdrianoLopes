import { Check, Award, Users, Heart, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

function Servicos() {
  return (
    <div style={{ minHeight: '100vh' }}>


      <section style={{ background: 'linear-gradient(135deg, #0b1f33 0%, #1a3a5c 100%)', padding: '5rem 0', color: '#ffffff' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>Sobre Nós</h1>
            <p style={{ color: '#cccccc', maxWidth: '700px', margin: '0 auto' }}>+15 anos a fornecer soluções energéticas de qualidade no Norte de Portugal.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ color: '#0b1f33', marginBottom: '1.5rem' }}>A Nossa História</h2>
              <p style={{ color: '#666666', marginBottom: '1rem' }}>Fundada em 2009, a EletricidadePro nasceu da paixão pela inovação energética e do compromisso com a excelência técnica.</p>
              <p style={{ color: '#666666', marginBottom: '1rem' }}>Começámos como uma pequena empresa familiar no Porto e, ao longo dos anos, crescemos para nos tornarmos uma referência regional em instalações elétricas, painéis solares e mobilidade elétrica.</p>
              <p style={{ color: '#666666' }}>Hoje, contamos com uma equipa de 15 técnicos certificados e já realizámos mais de 600 projetos em toda a região Norte.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ backgroundColor: '#f4f7fa', borderRadius: '16px', padding: '2rem', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#999999' }}>Foto da equipa ou escritório</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#0b1f33', marginBottom: '1rem' }}>Os Nossos Valores</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[{ icon: Shield, title: 'Qualidade', desc: 'Materiais de primeira e instalação certificada.' }, { icon: Heart, title: 'Dedicação', desc: 'Cada projeto é único e tratado com máximo cuidado.' }, { icon: Users, title: 'Equipa', desc: 'Técnicos certificados e em formação contínua.' }, { icon: Award, title: 'Experiência', desc: '+15 anos e +600 projetos realizados.' }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                <item.icon size={48} color="#f7b500" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#0b1f33', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#666666', margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#0b1f33', marginBottom: '1rem' }}>Certificações</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {['ARC', 'DGEG', 'IMT', 'ISO 9001'].map((cert, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: '#f4f7fa', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                <Check size={40} color="#f7b500" style={{ marginBottom: '0.5rem' }} />
                <h3 style={{ color: '#0b1f33', margin: 0 }}>{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Servicos