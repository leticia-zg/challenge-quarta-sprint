import Link from "next/link"
import './Menu.css';
 
const Menu = () => {
    return (
        <nav role="navigation" className = "nav">
            <Link href="/">
                <img src="/imgs/logodesktop.png" alt="logo Porto" className="logo" role="img" />
            </Link>
            <img
                src="/imgs/hamburger (1).png"
                alt="menu-fechado"
                className="menu-fechado"
                role="menu"
                aria-expanded="false"
            />
            <ul className="fechado">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/#segurado" role="link">Segurado Porto</Link></li>
                <li><Link href="/#servicos" role="link">Serviços</Link></li>
                <li><Link href="/duvidasfrequentes">Dúvidas frequentes</Link></li>
                <li><Link href="https://www.portoseguro.com.br/pdc/login" className="btn-nav" role="button">Área do cliente</Link></li>
            </ul>
        </nav>
    );
};
 
export default Menu;