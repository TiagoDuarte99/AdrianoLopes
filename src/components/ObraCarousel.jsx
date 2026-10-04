import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import './ObraCarousel.css'

function ObraCarousel({ obra }) {
  const [isPaused, setIsPaused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const imagens =
    obra?.imagens?.length > 1
      ? [...obra.imagens, ...obra.imagens]
      : obra?.imagens || []

  const isLightboxOpen = selectedIndex !== null
  const totalImagens = obra?.imagens?.length || 0

  const openImage = (index) => {
    if (!totalImagens) {
      return
    }

    setSelectedIndex(index % totalImagens)
    setIsPaused(true)
  }

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null)
    setIsPaused(false)
  }, [])

  const nextImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || !totalImagens) {
        return 0
      }

      return (current + 1) % totalImagens
    })
  }, [totalImagens])

  const previousImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || !totalImagens) {
        return 0
      }

      return (
        (current - 1 + totalImagens) %
        totalImagens
      )
    })
  }, [totalImagens])

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowRight') {
        nextImage()
      }

      if (event.key === 'ArrowLeft') {
        previousImage()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )

      document.body.style.overflow = ''
    }
  }, [
    isLightboxOpen,
    closeLightbox,
    nextImage,
    previousImage,
  ])

  if (!obra || !obra.imagens?.length) {
    return null
  }

  return (
    <>
      <article className="obra-carousel">
        <header className="obra-carousel-header">
          <div>
            <h2>{obra.titulo}</h2>

            <p>
              <span>📍 {obra.local}</span>
              <span>⚡ {obra.categoria}</span>
            </p>
          </div>
        </header>

        <div
          className={`obra-carousel-viewport ${
            isPaused ? 'is-paused' : ''
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isLightboxOpen) {
              setIsPaused(false)
            }
          }}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget,
              ) &&
              !isLightboxOpen
            ) {
              setIsPaused(false)
            }
          }}
        >
          <div className="obra-carousel-track">
            {imagens.map((imagem, index) => {
              const imagemOriginalIndex =
                index % totalImagens

              return (
                <button
                  type="button"
                  className="obra-carousel-item"
                  key={`${imagem}-${index}`}
                  onClick={() => openImage(index)}
                  aria-label={`Abrir fotografia ${
                    imagemOriginalIndex + 1
                  } de ${totalImagens}`}
                >
                  <img
                    src={imagem}
                    alt={`${obra.titulo} - fotografia ${
                      imagemOriginalIndex + 1
                    }`}
                    loading="lazy"
                  />

                  <span className="obra-carousel-item-overlay">
                    Ver fotografia
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </article>

      {isLightboxOpen && (
        <div
          className="obra-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria: ${obra.titulo}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox()
            }
          }}
        >
          <button
            type="button"
            className="obra-lightbox-close"
            onClick={closeLightbox}
            aria-label="Fechar galeria"
          >
            ×
          </button>

          <button
            type="button"
            className="obra-lightbox-navigation previous"
            onClick={previousImage}
            aria-label="Fotografia anterior"
          >
            ‹
          </button>

          <figure className="obra-lightbox-content">
            <img
              src={obra.imagens[selectedIndex]}
              alt={`${obra.titulo} - fotografia ${
                selectedIndex + 1
              } de ${totalImagens}`}
            />

            <figcaption>
              {selectedIndex + 1} / {totalImagens}
            </figcaption>
          </figure>

          <button
            type="button"
            className="obra-lightbox-navigation next"
            onClick={nextImage}
            aria-label="Fotografia seguinte"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

export default ObraCarousel