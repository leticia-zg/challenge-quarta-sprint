"use client";
import Link from "next/link";
import Image from 'next/image'; 
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
                <Image
                    src="/imgs/logodesktop.png" 
                    alt="logo Porto"
                    className="logo" 
                    role="img" 
                    width={130}  
                    height={56} 
                />
            </Link>
            <div
                className="menu-icon"
                aria-expanded={isClick ? "true" : "false"}
                onClick={toggleNavbar}
                role="button"
                aria-label="Toggle menu"
            >
                <Image
                    src={isClick ? "/imgs/menuaberto.png" : "/imgs/hamburger (1).png"} 
                    alt={isClick ? "menu-aberto" : "menu-fechado"} 
                    width={37}  
                    height={37}
                />
            </div>
            <ul className={isClick ? "list aberto" : "list fechado"}>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/#segurado" role="link">Segurado Porto</Link></li>
                <li><Link href="/#servicos" role="link">Serviços</Link></li>
                <li><Link href="/duvidas">Dúvidas frequentes</Link></li>
                <li><Link href="/veiculos" className="btn-nav" role="button">Área do colaborador</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
