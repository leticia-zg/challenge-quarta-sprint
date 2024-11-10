"use client"
import { Layout } from '../../components/layout/Layout';
import Link from "next/link"
import './style.css';
import Image from 'next/image';

export default function Integrantes() {
    return (
        <>
            <Layout>
            <main className="main-integrantes">
                <h1 className="h1-integrantes">Conheça nossa equipe</h1>
                <h2 className="equipe">Smart Solve Solutions</h2>
                <h2 className="h2-integrantes">1TDSPX</h2>
                <section className="integrantes">
                    <article className="integrante">
                        <Image width={200} 
                    height={198}src="/imgs/foto-ana.png" alt="Foto Ana" />
                        <h3 className="h3-integrantes">Ana Carolina Reis Santana</h3>
                        <h4 className="h4-integrantes">RM556219</h4>
                        <p className="p-integrantes"><Link href="https://www.linkedin.com/in/ana-carolina-santana-9a0a78232" target="_blank">LinkedIn</Link></p>
                    </article>
                    <article className="integrante">
                        <Image width={200} 
                    height={198} src="/imgs/foto-celina.png" alt="Foto Celina" />
                        <h3 className="h3-integrantes">Celina Alcântara do Carmo</h3>
                        <h4 className="h4-integrantes">RM558090</h4>
                        <p className="p-integrantes"><Link href="https://www.linkedin.com/in/celinaalcantara" target="_blank">LinkedIn</Link></p>
                    </article>
                    <article className="integrante">
                        <Image width={200} 
                    height={198} src="/imgs/foto-leticia.png" alt="Foto Letícia" />
                        <h3 className="h3-integrantes">Letícia Zago de Souza</h3>
                        <h4 className="h4-integrantes">RM558464</h4>
                        <p className="p-integrantes"><Link href="https://www.linkedin.com/in/letícia-zago-de-souza" target="_blank">LinkedIn</Link></p>
                    </article>
                </section>
            </main>
            <footer className="footer-integrantes">
                <p className="p-footer-integrantes">Desenvolvido por @ SmartSolveSolutions</p>
            </footer>
            </Layout>
        </>
    );
}