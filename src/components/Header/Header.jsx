import React from "react";
import style from "./Header.module.scss"

function Header() {
    return (
        <header>
            <nav className={style.header}>
                <h2>LOGO</h2>
                <input typeof="search" className={style.inputBox} placeholder="Pesquisar um sangue laranja por nome, habilidades.."></input>
                <ul className={style.navList}>
                    <li>Home</li>
                    <li>Fórum</li>
                    <li>Dicas de estudos</li>
                </ul>
                <p>Notificação</p>
                <p>Imagem perfil</p>
            </nav>
        </header>
    )
}

export default Header;