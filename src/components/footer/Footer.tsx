import './Footer.css';
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer role="contentinfo">
            <div className="footer-content">
                <Image 
                    src="/imgs/logobranca.png" 
                    alt="Logo Porto" 
                    className="logo-branca" 
                    role="img" 
                    width={150} 
                    height={70}
                />
                <section className="contatos" role="group">
                    <h3>Acompanhe a Porto nas Redes Sociais</h3>
                    <ul role="navigation">
                        <li>
                            <Link href="https://www.facebook.com/porto" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Image 
                                    src="/imgs/facebook.png" 
                                    alt="Logo do Facebook" 
                                    width={24} 
                                    height={24} 
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/porto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Image 
                                    src="/imgs/instagram.png" 
                                    alt="Logo do Instagram" 
                                    width={24} 
                                    height={24} 
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/company/porto/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Image 
                                    src="/imgs/linkedin.png" 
                                    alt="Logo do LinkedIn" 
                                    className="linkedin" 
                                    width={24} 
                                    height={24} 
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/portoseguro" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <Image 
                                    src="/imgs/youtube.png" 
                                    alt="Logo do YouTube" 
                                    className="youtube" 
                                    width={30} 
                                    height={30} 
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/portoseguro" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Image 
                                    src="/imgs/twitter.png" 
                                    alt="Logo do Twitter" 
                                    className="twitter" 
                                    width={30} 
                                    height={30} 
                                />
                            </Link>
                        </li>
                    </ul>
                </section>
                <section role="group">
                    <h3 className="h3-app">Baixe o App da Porto</h3>
                    <Link href="https://apps.apple.com/us/app/porto-seguros-cart%C3%A3o-e/id1511026277" target="_blank" rel="noopener noreferrer" aria-label="Baixar na App Store">
                        <Image 
                            src="/imgs/app store.png" 
                            alt="App Store" 
                            className="appstore" 
                            width={120} 
                            height={36}  
                        />
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&referrer=utm_source%3Dhub-vendas%26utm_medium%3Dcta-download%26utm_campaign%3Dhub-vendas-rodape&pli=1"
                        target="_blank" rel="noopener noreferrer" aria-label="Baixar no Google Play">
                        <Image 
                            src="/imgs/google play.png" 
                            alt="Google Play" 
                            className="googleplay" 
                            width={120} 
                            height={36}  
                        />
                    </Link>
                </section>
                <div className="div-footer" role="contentinfo">
                    <hr />
                    <ul>
                        <li><Link href="https://www.portoseguro.com.br/privacidade" aria-label="Política de Privacidade">Privacidade</Link></li>
                        <li><Link href="https://www.portoseguro.com.br/institucional/politica-de-seguranca-da-informacao" aria-label="Política de Segurança da Informação">Segurança da Informação</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
