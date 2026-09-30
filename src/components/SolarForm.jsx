import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function SolarForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    avgConsumption: '',
    hasPanels: 'no',
    interestedInBattery: 'no',
    interestedInCharger: 'no',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Solar form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '', phone: '', email: '', location: '',
        avgConsumption: '', hasPanels: 'no',
        interestedInBattery: 'no', interestedInCharger: 'no', message: ''
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        style={{ backgroundColor: '#f4f7fa', padding: '3rem', borderRadius: '12px', textAlign: 'center' }}>
        <CheckCircle size={64} color="#f7b500" style={{ marginBottom: '1.5rem' }} />
        <h3 style={{ color: '#0b1f33', marginBottom: '1rem' }}>Mensagem Enviada!</h3>
        <p style={{ color: '#666666' }}>Obrigado pelo seu contacto. Entraremos em contacto dentro de 24 horas.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e8edf2' }}>
      <h3 style={{ color: '#0b1f33', marginBottom: '0.5rem' }}>Orçamento: Painéis Solares</h3>
      <p style={{ color: '#666666', marginBottom: '2rem' }}>Preencha o formulário para receber um orçamento personalizado.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="name">Nome *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="910 000 000" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Localidade *</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required placeholder="Ex: Porto, Maia..." />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="avgConsumption">Consumo Médio Mensual (€)</label>
          <input type="number" id="avgConsumption" name="avgConsumption" value={formData.avgConsumption} onChange={handleChange} placeholder="Ex: 100" />
        </div>
        <div className="form-group">
          <label htmlFor="hasPanels">Já tem painéis solares?</label>
          <select id="hasPanels" name="hasPanels" value={formData.hasPanels} onChange={handleChange}>
            <option value="no">Não</option>
            <option value="yes">Sim</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="interestedInBattery">Interesse em Baterias?</label>
          <select id="interestedInBattery" name="interestedInBattery" value={formData.interestedInBattery} onChange={handleChange}>
            <option value="no">Não</option>
            <option value="yes">Sim</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="interestedInCharger">Interesse em Carregador VE?</label>
          <select id="interestedInCharger" name="interestedInCharger" value={formData.interestedInCharger} onChange={handleChange}>
            <option value="no">Não</option>
            <option value="yes">Sim</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Descreva o seu projeto..." />
      </div>

      <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: '1rem' }}>
        <Send size={20} /> Enviar Pedido
      </button>
    </form>
  )
}

export default SolarForm