"use client";
import { useState } from 'react';
import Link from "next/link";
import { Layout } from '../components/layout/Layout';
import Footer from "../components/footer/Footer";
import Local from "../components/local/Local";
import Image from 'next/image';
import './style.css';

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <Link href="https://chatoficinavirtual.netlify.app/">
                <button>Confira</button>
              </Link>
            </div>
            <div className="pecas-intro">
              <Image 
                src="/imgs/fundo-servicos.png" 
                alt="peças automotivas" 
                className="pecas" 
                width={850} 
                height={250}
              />
            </div>
          </section>
          <div className="historia">
            <section className="sobre" role="group">
              <Image 
                src="/imgs/ferramentas.jpg"
                alt="ferramentas" 
                className="ferramentas" 
                width={250} 
                height={250}
                role="img" 
              />
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
                <Image 
                  src="/imgs/chaveiro.png" 
                  alt="chaveiro" 
                  width={50} 
                  height={50}
                />
                <h3>Serviços de chaveiro</h3>
                <p>
                  Perda de chaves. <br />
                  Chave quebrada na fechadura. <br />
                </p>
              </div>
              <div className="beneficios">
                <Image 
                  src="/imgs/assistencia.png" 
                  alt="assistência" 
                  width={50} 
                  height={50}
                />
                <h3>Assistência à panes</h3>
                <p>
                  Problemas mecânicos, elétricos <br />
                  ou outras emergências.
                </p>
              </div>
            </article>
            <article className="cont-beneficios">
              <div className="beneficios">
                <Image 
                  src="/imgs/desconto.png" 
                  alt="descontos" 
                  width={50} 
                  height={50}
                />
                <h3>Descontos exclusivos</h3>
                <p>
                  Incluso compras e serviços, lazer <br />
                  entretenimento, educação.
                </p>
              </div>
              <div className="beneficios" id="servicos">
                <Image 
                  src="/imgs/carrinho.png" 
                  alt="carro" 
                  width={50} 
                  height={50}
                />
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
                  <Image 
                    src="/imgs/peças.jpg" 
                    alt="peças automotivas" 
                    width={200} 
                    height={150}
                  />
                  <h3>Auto Peças</h3>
                  <p>Faça um orçamento.</p>
                </Link>
              </div>
              <div className="servico">
                <Link href="/guincho">
                  <Image 
                    src="/imgs/guincho.png" 
                    alt="guincho" 
                    width={200} 
                    height={150}
                  />
                  <h3>Guincho</h3>
                  <p>Serviço de guincho 24horas.</p>
                </Link>
              </div>
            </article>
            <article className="cont-servicos">
              <div className="servico">
                <Link href="#local-section">
                  <Image 
                    src="/imgs/mecanicos.jpg" 
                    alt="mecânicos parceiros" 
                    width={200} 
                    height={150}
                  />
                  <h3>Mecânicos Parceiros</h3>
                  <p>Confira nossos parceiros.</p>
                </Link>
              </div>
              <div className="servico">
                <Link href="https://chatoficinavirtual.netlify.app/">
                  <Image 
                    src="/imgs/notediagnostico.jpg" 
                    alt="diagnóstico" 
                    width={200} 
                    height={150}
                  />
                  <h3 id="local-section">Auto Diagnóstico</h3>
                  <p>Realize o auto diagnóstico online.</p>
                </Link>
              </div>
            </article>
          </section>
          <Local />
          <p className="duvidafrequente">Dúvidas Frequentes</p>
          <section className="perguntas">
            <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(0)}>
              <p className="p-pergunta">Segurado Porto possui desconto nos serviços?</p>
              <Image
                  src={openIndex === 0 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                  alt="seta"
                  width={24} 
                  height={24}
                  className="seta-baixo"
              />
            </article>
            {openIndex === 0 && (
              <div tabIndex={0} className="div-resposta">
                <p className="respostas">Sim, o segurado da Porto Seguro possui descontos em diversos serviços automotivos, residenciais e em estabelecimentos parceiros...</p>
              </div>
            )}

            <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(1)}>
              <p className="p-pergunta">Como faço para adquirir uma peça?</p>
              <Image
                  src={openIndex === 1 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                  alt="seta"
                  width={24} 
                  height={24}
                  className="seta-baixo"
              />
            </article>
            {openIndex === 1 && (
              <div tabIndex={0} className="div-resposta">
                <p className="respostas">Basta acessar a página de Auto Peças, verificar a peça que precisa e entrar em contato com um de nossos mecânicos parceiros.</p>
              </div>
            )}

            <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(2)}>
              <p className="p-pergunta">Como faço para realizar o auto diagnóstico?</p>
              <Image
                  src={openIndex === 2 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                  alt="seta"
                  width={24} 
                  height={24}
                  className="seta-baixo"
              />
            </article>
            {openIndex === 2 && (
              <div tabIndex={0} className="div-resposta">
                <p className="respostas">Para realizar o auto diagnóstico, acesse a página de serviços e vá para a página de auto diagnósticos. Insira os problemas notados no seu veículo e receba de imediato um diagnóstico prévio.</p>
              </div>
            )}

            <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(3)}>
              <p className="p-pergunta">Como faço para me tornar um segurado?</p>
              <Image
                  src={openIndex === 3 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                  alt="seta"
                  width={24} 
                  height={24}
                  className="seta-baixo"
              />
            </article>
            {openIndex === 3 && (
              <div tabIndex={0} className="div-resposta">
                <p className="respostas">Você pode se tornar um segurado diretamente pelo site da Porto Seguro, clicando em &quot;Torne-se um Segurado&quot; e preenchendo os dados necessários.</p>
              </div>
            )}
          </section>
        </main>
      </Layout>
      <Footer />
    </>
  );
}
