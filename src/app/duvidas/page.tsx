"use client";
import './style.css';
import { Layout } from "../../components/layout/Layout";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from 'next/image';

import { useState } from 'react';

const schema = yup.object().shape({
    duvida: yup.string().required("*Campo obrigatório"), 
});

export default function Duvidas() {
    const [openIndex, setOpenIndex] = useState<number | null>(null); 
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema), 
    });

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); 
    };

    const onSubmit = (data: any) => {
        alert(`Sua dúvida foi enviada: ${data.duvida}`);
    };
    return (
        <>
            <Layout>
                <main className="main-duvidas">
                    <h1 className="h1">Dúvidas Frequentes</h1>
                    <section className="perguntas">
                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(0)}>
                            <p className="p-pergunta">Segurado Porto possui desconto nos serviços?</p>
                            <Image width={20} height={20}
                                src={openIndex === 0 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 0}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 0 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Sim, o segurado da Porto Seguro possui descontos em diversos serviços automotivos, residenciais e em estabelecimentos parceiros...</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(1)}>
                            <p className="p-pergunta">Como faço para adquirir uma peça?</p>
                            <Image width={20} height={20}
                                src={openIndex === 1 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 1}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 1 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Basta acessar a página de Auto Peças, verificar a peça que precisa e entrar em contato com um de nossos mecânicos parceiros.</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(2)}>
                            <p className="p-pergunta">Como faço para realizar o auto diagnóstico?</p>
                            <Image width={20} height={20}
                                src={openIndex === 2 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 2}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 2 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Para realizar o auto diagnóstico, acesse a página de serviços e vá para a página de auto diagnósticos. Insira os problemas notados no seu veículo e receba de imediato um diagnóstico prévio.</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(3)}>
                            <p className="p-pergunta">Como faço para me tornar um segurado?</p>
                            <Image width={20} height={20}
                                src={openIndex === 3 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 3}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 3 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Para se tornar um segurado Porto, basta entrar em contato com um corretor autorizado ou ligar para a central de atendimento. Eles irão orientá-lo sobre os planos disponíveis e o processo de contratação.</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(4)}>
                            <p className="p-pergunta">Quais são as oficinas parceiras?</p>
                            <Image width={20} height={20}
                                src={openIndex === 4 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 4}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 4 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Confira as oficinas parceiras acessando a página de serviços, mecânicos parceiros.</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(5)}>
                            <p className="p-pergunta">Como faço para agendar uma revisão?</p>
                            <Image width={20} height={20}
                                src={openIndex === 5 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 5}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 5 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Para agendar uma revisão na Porto Seguro, acesse o site oficial, use o aplicativo da Porto Seguro ou ligue para a central de atendimento. Siga as instruções para escolher o melhor horário e local para o serviço.</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(6)}>
                            <p className="p-pergunta">Tem algum desconto no valor das peças?</p>
                            <Image width={20} height={20}
                                src={openIndex === 6 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 6}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 6 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Caso você seja segurado Porto, algumas das peças possuem descontos exclusivos!</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(7)}>
                            <p className="p-pergunta">Quanto tempo demora para o guincho chegar?</p>
                            <Image width={20} height={20}
                                src={openIndex === 7 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 7}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 7 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">O tempo de espera pode variar conforme a localização e o tráfego, mas a empresa se esforça para atender os clientes dentro de 30 a 60 minutos.</p>
                            </div>
                        )}

                        <article role="article" tabIndex={0} className="article" onClick={() => handleToggle(8)}>
                            <p className="p-pergunta">Como posso atualizar meus dados cadastrais?</p>
                            <Image width={20} height={20}
                                src={openIndex === 8 ? "/imgs/seta-cima.png" : "/imgs/seta-para-baixo (2).png"}
                                aria-expanded={openIndex === 8}
                                className="seta-baixo"
                                alt="seta"
                                role="button"
                                tabIndex={0}
                            />
                        </article>
                        {openIndex === 8 && (
                            <div tabIndex={0} className="div-resposta">
                                <p className="respostas">Para atualizar seus dados, acesse o portal do cliente Porto Seguro ou ligue para a central de atendimento.</p>
                            </div>
                        )}
                    </section>
                    <section className="cont-perguntas">
                        <h2 className="h2-duvidas">Sua dúvida ainda não foi respondida?</h2>
                        <form role="form" id="feedbackForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="div-chat">
                                <label htmlFor="duvida" className="label-duvida">Escreva abaixo para que possamos aprimorar nossas dúvidas frequentes ou acesse o chat online para ser respondido(a) de imediato!</label>
                                <img 
                                    src="/imgs/chat.png" 
                                    alt="chat" 
                                    className="chat" 
                                    role="img" 
                                />
                            </div>
                            <div className="btn">
                                <input 
                                    type="text" 
                                    id="duvida" 
                                    className="duvida" 
                                    role="textbox" 
                                    placeholder="Digite aqui" 
                                    autoComplete="off" 
                                    {...register('duvida')} 
                                />
                                <input 
                                    type="submit" 
                                    className="btn-submit" 
                                    role="button" 
                                    value="Enviar" 
                                />
                            </div>
                            {errors.duvida && ( 
                                    <span className="error-message">{errors.duvida.message}</span>
                                )}
                        </form>
                    </section>
                </main>
            </Layout>
            <Footer />
        </>
    );
}
