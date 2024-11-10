"use client"
import Link from "next/link";
import { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav role="navigation" className="nav">
            <Link href="/">
                <img 
                    src="/imgs/logodesktop.png" 
                    alt="logo Porto"
                    className="logo" 
                    role="img" 
                />
            </Link>
            <img
                src={isClick ? "/imgs/menuaberto.png" : "/imgs/hamburger (1).png"} // Troca a imagem conforme o estado
                alt={isClick ? "menu-aberto" : "menu-fechado"} 
                className="menu-icon"
                role="menu"
                aria-expanded={isClick ? "true" : "false"}
                onClick={toggleNavbar}
            />
            <ul className={isClick ? "list aberto" : "list fechado"}>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/#segurado" role="link">Segurado Porto</Link></li>
                <li><Link href="/#servicos" role="link">Serviços</Link></li>
                <li><Link href="/duvidas">Dúvidas frequentes</Link></li>
                <li><Link href="https://www.portoseguro.com.br/pdc/login" className="btn-nav" role="button">Área do colaborador</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
