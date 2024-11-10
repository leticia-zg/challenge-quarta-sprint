"use client";
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';
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
                    width={100} 
                    height={50} 
                />
            </Link>
            <button
                aria-expanded={isClick ? "true" : "false"}
                onClick={toggleNavbar}
                className="menu-button"
                aria-label={isClick ? "Fechar menu" : "Abrir menu"}
            >
                <Image
                    src={isClick ? "/imgs/menuaberto.png" : "/imgs/hamburger (1).png"}
                    alt={isClick ? "Menu aberto" : "Menu fechado"}
                    width={30} 
                    height={30}
                    className="menu-icon"
                />
            </button>
            <ul className={isClick ? "list aberto" : "list fechado"}>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/#segurado">Segurado Porto</Link></li>
                <li><Link href="/#servicos">Serviços</Link></li>
                <li><Link href="/duvidas">Dúvidas frequentes</Link></li>
                <li>
                    <Link href="https://www.portoseguro.com.br/pdc/login" className="btn-nav">
                        Área do colaborador
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
