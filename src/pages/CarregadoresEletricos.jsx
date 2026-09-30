

export default function CarregadoresEletricos() {
  return (
    <div className="carregadores-eletricos">
      {/* Hero */}
      <section className="hero">
        <h1>Carregadores Elétricos</h1>
        <p>
          Instalação e manutenção de carregadores para veículos elétricos em
          residências, condomínios e empresas.
        </p>
        <img
          src="/img/carregadores/instalacao-carregador-veiculo-eletrico-casa.webp"
          alt="Técnico a instalar carregador de veículo elétrico na garagem de uma moradia"
          width={1200}
          height={675}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </section>

      {/* Vantagens */}
      <section className="vantagens">
        <h2>Porquê instalar um carregador elétrico?</h2>
        <ul>
          <li>Carregamento mais rápido e seguro em casa ou na empresa</li>
          <li>Maior controlo sobre os custos de energia</li>
          <li>Preparação para o futuro da mobilidade elétrica</li>
          <li>Valorização do imóvel e do condomínio</li>
        </ul>
        <img
          src="/img/carregadores/carregador-veiculo-eletrico-garagem-condominio.webp"
          alt="Carregador de veículo elétrico instalado em parque de estacionamento de condomínio"
          width={1000}
          height={667}
          loading="lazy"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </section>

      {/* Serviços */}
      <section className="servicos">
        <h2>Os nossos serviços</h2>
        <div className="grid-servicos">
          <div className="servico">
            <h3>Instalação em habitação</h3>
            <p>
              Carregadores wallbox para moradias e apartamentos, com proteção
              adequada e integração com o quadro elétrico.
            </p>
            <img
              src="/img/carregadores/instalacao-wallbox-moradia-porto.webp"
              alt="Wallbox para carro elétrico instalado em garagem de moradia no Porto"
              width={800}
              height={600}
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className="servico">
            <h3>Condomínios e empresas</h3>
            <p>
              Soluções para parques de estacionamento de condomínios e frotas
              empresariais, com gestão de carga e repartição de consumos.
            </p>
            <img
              src="/img/carregadores/carregadores-eletricos-empresa-frota.webp"
              alt="Vários carregadores para veículos elétricos em parque de estacionamento de empresa"
              width={800}
              height={600}
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className="servico">
            <h3>Manutenção e assistência</h3>
            <p>
              Verificação periódica, diagnóstico de avarias e reparação de
              carregadores de todas as marcas.
            </p>
            <img
              src="/img/carregadores/tecnico-manutencao-carregador-eletrico.webp"
              alt="Técnico a fazer manutenção a carregador de veículo elétrico"
              width={800}
              height={600}
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="processo">
        <h2>Como funcionamos</h2>
        <ol>
          <li>Avaliação das necessidades e do local de instalação</li>
          <li>Proposta técnica e comercial ajustada ao teu caso</li>
          <li>Instalação por eletricistas certificados</li>
          <li>Testes, explicação de uso e suporte pós-instalação</li>
        </ol>
        <img
          src="/img/carregadores/eletricista-instalacao-carregador-eletrico-domicilio.webp"
          alt="Eletricista a realizar instalação de carregador para carro elétrico em domicílio"
          width={1000}
          height={667}
          loading="lazy"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Pedir instalação de carregador elétrico</h2>
        <p>
          Fala connosco para avaliar o teu projeto e receber uma proposta sem
          compromisso.
        </p>
        <a href="/contactos" className="botao">
          Contactar agora
        </a>
      </section>
    </div>
  );
}