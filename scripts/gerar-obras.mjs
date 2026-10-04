import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const raizProjeto = path.resolve(__dirname, '..')
const pastaTrabalhos = path.join(
  raizProjeto,
  'public',
  'trabalhos',
)

const extensoesImagem = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
]

function ordenarPorNome(a, b) {
  return a.localeCompare(b, 'pt', {
    numeric: true,
    sensitivity: 'base',
  })
}

function obterImagens(pastaObra) {
  return fs
    .readdirSync(pastaObra, {
      withFileTypes: true,
    })
    .filter((item) => {
      if (!item.isFile()) {
        return false
      }

      const extensao = path.extname(item.name).toLowerCase()

      return extensoesImagem.includes(extensao)
    })
    .map((item) => item.name)
    .sort(ordenarPorNome)
}

function criarSlug(nome) {
  return nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

if (!fs.existsSync(pastaTrabalhos)) {
  console.error(
    'A pasta public/trabalhos não existe.',
  )

  process.exit(1)
}

const pastas = fs
  .readdirSync(pastaTrabalhos, {
    withFileTypes: true,
  })
  .filter((item) => item.isDirectory())
  .sort((a, b) => ordenarPorNome(a.name, b.name))

const obras = []

for (const pasta of pastas) {
  const caminhoPasta = path.join(
    pastaTrabalhos,
    pasta.name,
  )

  const caminhoJson = path.join(
    caminhoPasta,
    'obra.json',
  )

  if (!fs.existsSync(caminhoJson)) {
    console.warn(
      `A pasta "${pasta.name}" não tem obra.json. Ignorada.`,
    )

    continue
  }

  try {
    const conteudoJson = fs.readFileSync(
      caminhoJson,
      'utf8',
    )

    const dados = JSON.parse(conteudoJson)
    const imagens = obterImagens(caminhoPasta)

    if (imagens.length === 0) {
      console.warn(
        `A pasta "${pasta.name}" não tem imagens. Ignorada.`,
      )

      continue
    }

    const id = dados.id || criarSlug(pasta.name)

    obras.push({
      id,
      titulo: dados.titulo || pasta.name,
      local: dados.local || '',
      categoria: dados.categoria || '',
      descricao: dados.descricao || '',
      pasta: pasta.name,
      imagens,
    })
  } catch (error) {
    console.error(
      `Erro ao ler ${pasta.name}/obra.json:`,
      error.message,
    )
  }
}

const caminhoIndice = path.join(
  pastaTrabalhos,
  'index.json',
)

fs.writeFileSync(
  caminhoIndice,
  `${JSON.stringify(obras, null, 2)}\n`,
  'utf8',
)

console.log(
  `${obras.length} obra(s) encontrada(s).`,
)

console.log(
  `Índice criado em: ${caminhoIndice}`,
)