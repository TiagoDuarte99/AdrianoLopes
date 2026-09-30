import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone} from 'lucide-react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const allProjects = [
  { id: 1, title: 'Instalação Painéis Solares 6kW', location: 'Maia', description: 'Sistema completo com baterias e monitorização', images: ['/trabalhos/projeto-01/1.jpg', '/trabalhos/projeto-01/2.jpg'], category: 'Painéis Solares', fullDescription: 'Instalação de sistema de autoconsumo de 6kW em moradia unifamiliar na Maia. O sistema inclui 12 painéis solares, inversor híbrido, baterias de 10kWh e sistema de monitorização via app.', features: ['12 painéis monocristalinos', 'Inversor híbrido 6kW', 'Baterias 10kWh', 'Monitorização remota', 'Legalização DGEG'] },
  { id: 2, title: 'Carregadores Condomínio Parque', location: 'Porto', description: '4 wallboxes 22kW com gestão de carga', images: ['/trabalhos/projeto-02/1.jpg'], category: 'Carregadores', fullDescription: 'Instalação de 4 carregadores de 22kW em condomínio no Porto, com sistema de gestão de carga dinâmica e acesso por app.', features: ['4 wallboxes 22kW', 'Gestão de carga', 'Acesso RFID', 'Faturação automática'] },
  { id: 3, title: 'Remodelação Elétrica T3', location: 'Matosinhos', description: 'Apartamento completo com certificação', images: ['/trabalhos/projeto-03/1.jpg'], category: 'Instalações', fullDescription: 'Remodelação total da instalação elétrica de apartamento T3, incluindo quadro novo, 35 pontos de luz e tomadas, e certificação.', features: ['Quadro elétrico novo', '35 pontos', 'Iluminação LED', 'Certificação ARC'] },
  { id: 4, title: 'Iluminação Garagem Condomínio', location: 'Vila Nova de Gaia', description: '60 lugares com sensores', images: ['/trabalhos/projeto-04/1.jpg'], category: 'Condomínios', fullDescription: 'Substituição de iluminação de garagem de condomínio com 60 lugares, instalação de sensores de presença e sistema de gestão.', features: ['60 pontos LED', 'Sensores presença', 'Gestão automática', 'Poupança 70%'] },
  { id: 5, title: 'Sistema Solar Condomínio', location: 'Porto', description: 'Autoconsumo coletivo 30kW', images: ['/trabalhos/projeto-05/1.jpg'], category: 'Painéis Solares', fullDescription: 'Instalação de sistema de autoconsumo coletivo para condomínio com 20 frações. Sistema de 30kW com distribuição proporcional.', features: ['30kW potência', '60 painéis', '20 frações', 'Monitorização individual'] },
  { id: 6, title: 'Carregador Moradia Tesla', location: 'Maia', description: 'Wallbox 11kW dedicada', images: ['/trabalhos/projeto-06/1.jpg'], category: 'Carregadores', fullDescription: 'Instalação de wallbox Tesla de 11kW em moradia unifamiliar, com circuito dedicado e proteção diferencial.', features: ['Wallbox 11kW', 'Circuito dedicado', 'Proteção tipo B', 'Configuração app'] },
]

function ObrasRealizadas() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div style={{ minHeight: '100vh' }}>

      <section style={{ background: 'linear-gradient(135deg, #0b1f33 0%, #1a3a5c 100%)', padding: '5rem 0', color: '#ffffff' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>Obras Realizadas</h1>
            <p style={{ color: '#cccccc', maxWidth: '600px', margin: '0 auto' }}>Confira alguns dos nossos projetos recentes em painéis solares, carregadores elétricos e instalações elétricas.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {allProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f7b500', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: '#0b1f33', marginBottom: '1rem' }}>Pretende um Projeto Semelhante?</h2>
            <p style={{ color: '#0b1f33', marginBottom: '2rem' }}>Contacte-nos para um orçamento gratuito e sem compromisso.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contactos" className="btn btn-navy btn-lg">Pedir Orçamento</Link>
              <a href="tel:+351910000000" className="btn btn-outline btn-lg" style={{ borderColor: '#0b1f33', color: '#0b1f33' }}><Phone size={20} /> Ligar</a>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default ObrasRealizadas