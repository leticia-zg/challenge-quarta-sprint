import Link from "next/link";
import { Layout } from '../components/layout/Layout';
import './style.css';

export default function Home() {
  return (
    <>
      <Layout>
        <main className="main-home">
          <span>Home/Seguro Auto</span>
          <section className="intro">
            <div className="seguro">
              <h1 className="h1-home">SEGURO AUTO</h1>
              <h3 className="h3-home">Cada vez <br /> mais praticidade</h3>
              <p className="p-home">Com um novo serviço para você!</p>
              <Link href="#servicos">
                <button>Confira</button>
              </Link>
            </div>
            <div className="pecas-intro">
              <img src="/imgs/fundo-servicos.png" 
                alt="peças automotivas" 
                className="pecas" />
            </div>
          </section>
          <div className="historia">
            <section className="sobre" role="group">
              <img src="/imgs/ferramentas.jpg" 
                alt="ferramentas" 
                className="ferramentas" 
                role="img" />
              <div>
                <h3>Sobre</h3>
                <p id="segurado">
                  A <span>Oficina Virtual Porto </span>surgiu da necessidade de fornecer para nossos clientes um diagnóstico
                  do veículo de forma rápida, segura e eficaz! Além do serviço de autodiagnóstico, contamos também
                  com: serviço de guincho, revisão programada, autopeças online, mecânicos parceiros...
                </p>
              </div>
            </section>
          </div>
          <p className="confira">Torne-se um segurado</p>
          <section className="segurado">
            <article className="primeiros-beneficios">
              <div className="beneficios">
                <img src="/imgs/chaveiro.png" alt="chaveiro" />
                <h3>Serviços de chaveiro</h3>
                <p>
                  Perda de chaves. <br />
                  Chave quebrada na fechadura. <br />
                </p>
              </div>
              <div className="beneficios">
                <img src="/imgs/assistencia.png" alt="assistência" />
                <h3>Assistência à panes</h3>
                <p>
                  Problemas mecânicos, elétricos <br />
                  ou outras emergências.
                </p>
              </div>
            </article>
            <article className="cont-beneficios">
              <div className="beneficios">
                <img src="/imgs/desconto.png" alt="descontos" />
                <h3>Descontos exclusivos</h3>
                <p>
                  Incluso compras e serviços, lazer <br />
                  entretenimento, educação.
                </p>
              </div>
              <div className="beneficios" id="servicos">
                <img src="/imgs/carrinho.png" alt="carro" />
                <h3>Carro de reserva</h3>
                <p>
                  Utilização variada dependendo <br />do período
                  estipulado na apólice.
                </p>
              </div>
            </article>
          </section>

          <p className="confira">Confira nossos serviços</p>
          <section className="servicos">
            <article className="primeiros-servicos">
              <div className="servico">
                <Link href="/pecas">
                  <img src="/imgs/peças.jpg" alt="peças automotivas" />
                  <h3>Auto Peças</h3>
                  <p>Faça um orçamento.</p>
                </Link>
              </div>
              <div className="servico">
                <Link href="/guincho">
                  <img src="/imgs/guincho.png" alt="guincho" />
                  <h3>Guincho</h3>
                  <p>Serviço de guincho 24horas.</p>
                </Link>
              </div>
            </article>
            <article className="cont-servicos">
              <div className="servico">
                <Link href="#local-section">
                  <img src="/imgs/mecanicos.jpg" alt="mecânicos parceiros" />
                  <h3>Mecânicos Parceiros</h3>
                  <p>Confira nossos parceiros.</p>
                </Link>
              </div>
              <div className="servico">
                <a href="https://chatporto.streamlit.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/imgs/notediagnostico.jpg" alt="diagnóstico" />
                  <h3 id="local-section">Auto Diagnóstico</h3>
                  <p>Realize o auto diagnóstico online.</p>
                </a>
              </div>
            </article>
          </section>
          <p className="duvidafrequente">Dúvidas Frequentes</p>
          <section className="perguntas">
            <article role="article" className="article">
              <p className="p-pergunta">Segurado Porto possui desconto nos serviços?</p>
              <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button" aria-expanded="false" />
            </article>
            <div className="div-resposta">
              <p className="respostas">Sim, o segurado da Porto Seguro possui descontos em diversos serviços automotivos,
                residenciais e em estabelecimentos parceiros.
                Esses benefícios incluem revisões de veículos, assistência técnica e descontos exclusivos.</p>
            </div>
            <article role="article" className="article">
              <p className="p-pergunta">Como faço para adquirir uma peça?</p>
              <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button" aria-expanded="false" />
            </article>
            <div className="div-resposta">
              <p className="respostas">Basta acessar a página de Auto Peças, verificar a peça que precisa e entrar em
                contato com um de nossos mecânicos parceiros.</p>
            </div>
            <article role="article" className="article">
              <p className="p-pergunta">Como faço para realizar o auto diagnóstico?</p>
              <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button" aria-expanded="false" />
            </article>
            <div className="div-resposta">
              <p className="respostas">Para realizar o auto diagnóstico acesse a página de serviços e vá para a página de
                auto diagnósticos.
                Insira os problemas notados no seu veículo e receba de imediato um diagnóstico prévio.</p>
            </div>
            <article role="article" className="article">
              <p className="p-pergunta">Como faço para me tornar um segurado?</p>
              <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button" aria-expanded="false" />
            </article>
            <div className="div-resposta">
              <p className="respostas">Para se tornar um segurado Porto, basta entrar em contato com um corretor
                autorizado ou ligar para a central de atendimento.
                Eles irão orientá-lo sobre os planos disponíveis e o processo de contratação.</p>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
