export async function carregarObras() {
  const resposta = await fetch(
    '/trabalhos/index.json',
  )

  if (!resposta.ok) {
    throw new Error(
      'Não foi possível carregar o índice das obras.',
    )
  }

  const obras = await resposta.json()

  return obras.map((obra) => {
    const imagens = obra.imagens.map((imagem) => {
      return `/trabalhos/${encodeURIComponent(
        obra.pasta,
      )}/${encodeURIComponent(imagem)}`
    })

    return {
      ...obra,
      imagens,
    }
  })
}