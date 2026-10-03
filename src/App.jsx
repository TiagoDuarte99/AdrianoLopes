// App.jsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'
import PaineisSolares from './pages/PaineisSolares'
import CarregadoresEletricos from './pages/CarregadoresEletricos'
import InstalacoesEletricas from './pages/InstalacoesEletricas'
import ObrasRealizadas from './pages/ObrasRealizadas'
import SobreNos from './pages/SobreNos'
import Contactos from './pages/Contactos'
import Servicos from './pages/Servicos'

function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Topbar />
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet /> {/* aqui entra a página da rota atual */}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="paineis-solares" element={<PaineisSolares />} />
          <Route path="carregadores-carros-eletricos" element={<CarregadoresEletricos />} />
          <Route path="instalacoes-eletricas" element={<InstalacoesEletricas />} />
          <Route path="obras-realizadas" element={<ObrasRealizadas />} />
          <Route path="sobre-nos" element={<SobreNos />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="contactos" element={<Contactos />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App