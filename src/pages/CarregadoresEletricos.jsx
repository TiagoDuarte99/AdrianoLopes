import { Link } from 'react-router-dom';
import {
  Zap,
  MapPin,
  Phone,
  ArrowRight,
  Home,
  Building,
  Wrench,
  Shield,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

import FAQ from '../components/FAQ';
import ChargerForm from '../components/ChargerForm';
import { siteConfig } from '../config/site';

const faqItems = [
  {
    question: 'Quanto tempo demora a instalação de um carregador?',
    answer:
      'A instalação demora normalmente 2-4 horas para uma wallbox simples. Para sistemas mais complexos ou múltiplos carregadores, pode demorar 1-2 dias.',
  },
  {
    question: 'Preciso de autorização do condomínio para instalar?',
    answer:
      'Sim, para condomínios é necessário aprovação em assembleia. No entanto, a lei portuguesa favorece a instalação de carregadores, sendo difícil recusar sem justificação válida.',
  },
  {
    question: 'Qual a potência recomendada para casa?',
    answer:
      'Para uso doméstico, recomendamos 7.4kW (monofásico) ou 11-22kW (trifásico). A potência ideal depende do teu veículo e da instalação elétrica existente.',
  },
  {
    question: 'Posso carregar o meu carro numa tomada normal?',
    answer:
      'Sim, mas não é recomendado. As tomadas domésticas não estão preparadas para carregamentos prolongados e podem sobreaquecer. Uma wallbox é mais segura e rápida.',
  },
  {
    question: 'Qual o custo de instalação?',
    answer:
      'O custo varia entre €400-€1500, dependendo da potência, distância ao quadro e complexidade da instalação. Fazemos orçamento gratuito sem compromisso.',
  },
];

function CarregadoresEletricos() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          backgroundImage: `
      url(${siteConfig.images.carregadoresWallbox})
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '5rem 0',
          color: 'var(--color-white)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  marginBottom: 'var(--spacing-lg)',
                  color: 'var(--color-white)',
                }}
              >
                Carregadores para Carros Elétricos
              </h1>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--color-text-light)',
                  marginBottom: 'var(--spacing-xl)',
                }}
              >
                Instalação certificada de wallboxes em moradias, condomínios e
                empresas. Carregamento mais rápido, seguro e inteligente.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-sm)',
                  flexWrap: 'wrap',
                }}
              >
                <a href="#orcamento" className="btn btn-primary btn-lg">
                  Pedir Orçamento
                </a>
                <a href="tel:+351910000000" className="btn btn-outline btn-lg">
                  <Phone size={20} /> Ligar
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--spacing-lg)',
                  }}
                >
                  {[
                    {
                      icon: TrendingUp,
                      label: 'Carregamento',
                      value: 'até 7x mais rápido',
                    },
                    { icon: Shield, label: 'Segurança', value: 'Certificado' },
                    { icon: Zap, label: 'Potência', value: '7-22 kW' },
                    { icon: Clock, label: 'Instalação', value: '2-4 horas' },
                  ].map((item, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <item.icon
                        size={32}
                        color="var(--color-yellow)"
                        style={{ marginBottom: 'var(--spacing-xs)' }}
                      />
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: 'var(--color-white)',
                        }}
                      >
                        {item.value}
                      </div>
                      <div
                        style={{
                          color: 'var(--color-text-light)',
                          fontSize: '0.875rem',
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <h2
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Porquê Instalar um Carregador Elétrico?
            </h2>
            <p
              style={{
                color: 'var(--color-text-light)',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              As wallboxes oferecem múltiplas vantagens em relação às tomadas
              domésticas.
            </p>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-xl)',
            }}
          >
            {[
              {
                title: 'Carregamento Rápido',
                desc: 'Até 7 vezes mais rápido que uma tomada doméstica. Carrega o teu carro durante a noite.',
                icon: Zap,
              },
              {
                title: 'Segurança Total',
                desc: 'Proteção contra sobreaquecimento, sobrecarga e fugas de corrente. Muito mais seguro.',
                icon: Shield,
              },
              {
                title: 'Controlo de Custos',
                desc: 'Monitoriza consumos e otimiza carregamentos nas horas de menor custo.',
                icon: TrendingUp,
              },
              {
                title: 'Valorização do Imóvel',
                desc: 'Um imóvel com carregador elétrico vale mais e atrai mais compradores.',
                icon: Home,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-lg)',
                  }}
                >
                  <item.icon size={40} color="var(--color-yellow)" />
                </div>
                <h3
                  style={{
                    color: 'var(--color-navy)',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-light)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section section-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <h2
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Os Nossos Serviços
            </h2>
            <p style={{ color: 'var(--color-text-light)' }}>
              Soluções completas para todos os tipos de instalações.
            </p>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-xl)',
            }}
          >
            {[
              {
                title: 'Instalação em Habitação',
                desc: 'Wallboxes para moradias e apartamentos, com proteção adequada e integração com o quadro elétrico.',
                icon: Home,
                img: '/img/carregadores/instalacao-wallbox-moradia-porto.webp',
              },
              {
                title: 'Condomínios e Empresas',
                desc: 'Soluções para parques de estacionamento com gestão de carga e repartição de consumos.',
                icon: Building,
                img: '/img/carregadores/carregadores-eletricos-empresa-frota.webp',
              },
              {
                title: 'Manutenção e Assistência',
                desc: 'Verificação periódica, diagnóstico de avarias e reparação de carregadores de todas as marcas.',
                icon: Wrench,
                img: '/img/carregadores/tecnico-manutencao-carregador-eletrico.webp',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    height: '200px',
                    backgroundColor: 'var(--color-surface)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: 'var(--spacing-xl)' }}>
                  <item.icon
                    size={40}
                    color="var(--color-yellow)"
                    style={{ marginBottom: 'var(--spacing-sm)' }}
                  />
                  <h3
                    style={{
                      color: 'var(--color-navy)',
                      marginBottom: 'var(--spacing-sm)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <h2
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Como Funcionamos
            </h2>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--spacing-xl)',
            }}
          >
            {[
              {
                step: '1',
                title: 'Avaliação',
                desc: 'Avaliamos as necessidades e o local de instalação.',
              },
              {
                step: '2',
                title: 'Proposta',
                desc: 'Apresentamos proposta técnica e comercial ajustada.',
              },
              {
                step: '3',
                title: 'Instalação',
                desc: 'Instalação por eletricistas certificados em 2-4 horas.',
              },
              {
                step: '4',
                title: 'Suporte',
                desc: 'Testes, explicação de uso e suporte pós-instalação.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ position: 'relative', paddingLeft: '4rem' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: 'var(--color-yellow)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    color: 'var(--color-navy)',
                    marginBottom: 'var(--spacing-xs)',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de veículos compatíveis */}
      <section className="section section-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <h2
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Compatível com Todas as Marcas
            </h2>
            <p
              style={{
                color: 'var(--color-text-light)',
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              Os nossos carregadores funcionam com todos os veículos elétricos e
              híbridos.
            </p>
          </motion.div>
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-lg)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              'Tesla',
              'BMW',
              'Mercedes',
              'Audi',
              'Volkswagen',
              'Hyundai',
              'Kia',
              'Nissan',
              'Peugeot',
              'Renault',
            ].map((brand, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: 'var(--spacing-sm) var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  color: 'var(--color-navy)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <h2
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Galeria de Instalações
            </h2>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-sm)',
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  height: '250px',
                  backgroundColor: 'var(--color-surface-dark)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`/placeholder${i}.jpg`}
                  alt={`Instalação carregador elétrico ${i}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <h2
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Perguntas Frequentes
            </h2>
          </motion.div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="section section-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <MapPin
              size={48}
              color="var(--color-yellow)"
              style={{ marginBottom: 'var(--spacing-lg)' }}
            />
            <h2
              style={{
                color: 'var(--color-white)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Zonas de Atendimento
            </h2>
            <p style={{ color: 'var(--color-text-light)' }}>
              Porto, Maia, Matosinhos, Vila Nova de Gaia e todos os arredores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulário */}
      <section id="orcamento" className="section section-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <ChargerForm />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: 'var(--color-yellow)',
          padding: '4rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Pronto para Instalar o Teu Carregador?
            </h2>
            <p
              style={{
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-xl)',
              }}
            >
              Peça um orçamento gratuito e descubra a melhor solução para o teu
              caso.
            </p>
            <Link to="/contactos" className="btn btn-navy btn-lg">
              Pedir Orçamento Grátis <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CarregadoresEletricos;
