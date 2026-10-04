import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

import ObraCarousel from '../components/ObraCarousel'
import ProjectModal from '../components/ProjectModal'
import { siteConfig } from '../config/site'
import { carregarObras } from '../data/obras'

function ObrasRealizadas() {
  const [obras, setObras] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] =
    useState(null)

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState('todas')

  useEffect(() => {
    let ativo = true

    async function carregarDados() {
      try {
        const dados = await carregarObras()

        if (ativo) {
          setObras(dados)
        }
      } catch (erro) {
        console.error(erro)

        if (ativo) {
          setError(
            'Não foi possível carregar as obras.',
          )
        }
      } finally {
        if (ativo) {
          setIsLoading(false)
        }
      }
    }

    carregarDados()

    return () => {
      ativo = false
    }
  }, [])

  const categorias = useMemo(() => {
    const categoriasEncontradas = obras
      .map((obra) => obra.categoria)
      .filter(Boolean)

    return [...new Set(categoriasEncontradas)].sort(
      (a, b) => a.localeCompare(b, 'pt'),
    )
  }, [obras])

  const obrasFiltradas = useMemo(() => {
    if (categoriaSelecionada === 'todas') {
      return obras
    }

    return obras.filter(
      (obra) =>
        obra.categoria === categoriaSelecionada,
    )
  }, [obras, categoriaSelecionada])

  return (
    <div style={{ minHeight: '100vh' }}>
      <section
        style={{
          backgroundImage: `url(${siteConfig.images.obras})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          padding: '6rem 0',
          color: 'var(--color-white)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h1
              style={{
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Obras Realizadas
            </h1>

            <p
              style={{
                color: '#cccccc',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Confira alguns dos nossos projetos recentes
              em instalações elétricas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="obras-list">
        <div className="obras-container">
          {!isLoading && !error && categorias.length > 0 && (
            <div className="obras-filtros">
              <label htmlFor="categoria">
                Filtrar por categoria
              </label>

              <select
                id="categoria"
                value={categoriaSelecionada}
                onChange={(event) => {
                  setCategoriaSelecionada(
                    event.target.value,
                  )
                }}
              >
                <option value="todas">
                  Todas as categorias
                </option>

                {categorias.map((categoria) => (
                  <option
                    key={categoria}
                    value={categoria}
                  >
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
          )}

          {isLoading && <p>A carregar obras...</p>}

          {error && (
            <p className="obras-error">{error}</p>
          )}

          {!isLoading &&
            !error &&
            obras.length === 0 && (
              <p>
                Ainda não existem trabalhos disponíveis.
              </p>
            )}

          {!isLoading &&
            !error &&
            obras.length > 0 &&
            obrasFiltradas.length === 0 && (
              <p>
                Não existem obras nesta categoria.
              </p>
            )}

          {!isLoading &&
            !error &&
            obrasFiltradas.map((obra) => (
              <ObraCarousel
                key={obra.id}
                obra={obra}
              />
            ))}
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#f7b500',
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
                color: '#0b1f33',
                marginBottom: '1rem',
              }}
            >
              Pretende um Projeto Semelhante?
            </h2>

            <p
              style={{
                color: '#0b1f33',
                marginBottom: '2rem',
              }}
            >
              Contacte-nos para um orçamento gratuito e
              sem compromisso.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                to="/contactos"
                className="btn btn-navy btn-lg"
              >
                Pedir Orçamento
              </Link>

              <a
                href={siteConfig.phoneLink}
                className="btn btn-outline btn-lg"
                style={{
                  borderColor: '#0b1f33',
                  color: '#0b1f33',
                }}
              >
                <Phone size={20} />
                Ligar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default ObrasRealizadas