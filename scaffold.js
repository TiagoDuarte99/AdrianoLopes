import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname);

const structure = {
  'public/favicon.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>',
  'public/robots.txt': 'User-agent: *\nAllow: /',
  'public/sitemap.xml': '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
  'public/trabalhos/.gitkeep': '',
  'src/components/Topbar.jsx': 'export default function Topbar() {\n  return (\n    <div className="topbar">\n      <p>Topbar</p>\n    </div>\n  );\n}',
  'src/components/Header.jsx': 'export default function Header() {\n  return (\n    <header className="header">\n      <p>Header</p>\n    </header>\n  );\n}',
  'src/components/Footer.jsx': 'export default function Footer() {\n  return (\n    <footer className="footer">\n      <p>Footer</p>\n    </footer>\n  );\n}',
  'src/components/ServiceCard.jsx': 'export default function ServiceCard({ title, description }) {\n  return (\n    <div className="service-card">\n      <h3>{title}</h3>\n      <p>{description}</p>\n    </div>\n  );\n}',
  'src/components/ProjectCard.jsx': 'export default function ProjectCard({ title, image, onClick }) {\n  return (\n    <div className="project-card" onClick={onClick}>\n      <img src={image} alt={title} />\n      <h3>{title}</h3>\n    </div>\n  );\n}',
  'src/components/ProjectModal.jsx': 'export default function ProjectModal({ isOpen, onClose, project }) {\n  if (!isOpen) return null;\n  return (\n    <div className="modal-overlay" onClick={onClose}>\n      <div className="modal-content" onClick={e => e.stopPropagation()}>\n        <h2>{project?.title}</h2>\n        <button onClick={onClose}>Fechar</button>\n      </div>\n    </div>\n  );\n}',
  'src/components/FAQ.jsx': 'export default function FAQ({ items }) {\n  return (\n    <div className="faq">\n      <h2>Perguntas Frequentes</h2>\n      {items?.map((item, index) => (\n        <div key={index} className="faq-item">\n          <h3>{item.question}</h3>\n          <p>{item.answer}</p>\n        </div>\n      ))}\n    </div>\n  );\n}',
  'src/components/ContactForm.jsx': 'export default function ContactForm() {\n  return (\n    <form className="contact-form">\n      <h2>Contacte-nos</h2>\n      <input type="text" placeholder="Nome" />\n      <input type="email" placeholder="Email" />\n      <textarea placeholder="Mensagem"></textarea>\n      <button type="submit">Enviar</button>\n    </form>\n  );\n}',
  'src/components/SolarForm.jsx': 'export default function SolarForm() {\n  return (\n    <form className="solar-form">\n      <h2>Pedir Orçamento - Painéis Solares</h2>\n      <input type="text" placeholder="Nome" />\n      <input type="email" placeholder="Email" />\n      <input type="tel" placeholder="Telefone" />\n      <button type="submit">Enviar Pedido</button>\n    </form>\n  );\n}',
  'src/components/ChargerForm.jsx': 'export default function ChargerForm() {\n  return (\n    <form className="charger-form">\n      <h2>Pedir Orçamento - Carregadores</h2>\n      <input type="text" placeholder="Nome" />\n      <input type="email" placeholder="Email" />\n      <input type="tel" placeholder="Telefone" />\n      <button type="submit">Enviar Pedido</button>\n    </form>\n  );\n}',
  'src/pages/Home.jsx': 'export default function Home() {\n  return (\n    <div className="home">\n      <h1>Bem-vindo</h1>\n    </div>\n  );\n}',
  'src/pages/PaineisSolares.jsx': 'export default function PaineisSolares() {\n  return (\n    <div className="paineis-solares">\n      <h1>Painéis Solares</h1>\n    </div>\n  );\n}',
  'src/pages/CarregadoresEletricos.jsx': 'export default function CarregadoresEletricos() {\n  return (\n    <div className="carregadores-eletricos">\n      <h1>Carregadores Elétricos</h1>\n    </div>\n  );\n}',
  'src/pages/InstalacoesEletricas.jsx': 'export default function InstalacoesEletricas() {\n  return (\n    <div className="instalacoes-eletricas">\n      <h1>Instalações Elétricas</h1>\n    </div>\n  );\n}',
  'src/pages/EletricidadeCondominios.jsx': 'export default function EletricidadeCondominios() {\n  return (\n    <div className="eletricidade-condominios">\n      <h1>Eletricidade em Condomínios</h1>\n    </div>\n  );\n}',
  'src/pages/ObrasRealizadas.jsx': 'export default function ObrasRealizadas() {\n  return (\n    <div className="obras-realizadas">\n      <h1>Obras Realizadas</h1>\n    </div>\n  );\n}',
  'src/pages/SobreNos.jsx': 'export default function SobreNos() {\n  return (\n    <div className="sobre-nos">\n      <h1>Sobre Nós</h1>\n    </div>\n  );\n}',
  'src/pages/Contactos.jsx': 'export default function Contactos() {\n  return (\n    <div className="contactos">\n      <h1>Contactos</h1>\n    </div>\n  );\n}',
  'src/App.jsx': 'import { BrowserRouter, Routes, Route } from "react-router-dom";\nimport Home from "./pages/Home";\nimport PaineisSolares from "./pages/PaineisSolares";\nimport CarregadoresEletricos from "./pages/CarregadoresEletricos";\nimport InstalacoesEletricas from "./pages/InstalacoesEletricas";\nimport EletricidadeCondominios from "./pages/EletricidadeCondominios";\nimport ObrasRealizadas from "./pages/ObrasRealizadas";\nimport SobreNos from "./pages/SobreNos";\nimport Contactos from "./pages/Contactos";\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/paineis-solares" element={<PaineisSolares />} />\n        <Route path="/carregadores-eletricos" element={<CarregadoresEletricos />} />\n        <Route path="/instalacoes-eletricas" element={<InstalacoesEletricas />} />\n        <Route path="/eletricidade-condominios" element={<EletricidadeCondominios />} />\n        <Route path="/obras-realizadas" element={<ObrasRealizadas />} />\n        <Route path="/sobre-nos" element={<SobreNos />} />\n        <Route path="/contactos" element={<Contactos />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}',
  'src/main.jsx': 'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport "./index.css";\n\nReactDOM.createRoot(document.getElementById("root")).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);',
  'src/index.css': '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, sans-serif;\n}\n',
};

Object.entries(structure).forEach(([filePath, content]) => {
  const fullPath = path.join(projectRoot, filePath);
  fs.ensureDirSync(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content);
  console.log(`✓ Criado: ${filePath}`);
});

console.log('\n✅ Estrutura criada com sucesso!');