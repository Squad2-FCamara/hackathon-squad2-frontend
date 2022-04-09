import React from "react";
import style from "./Header.module.scss"

function Header() {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.navList}>
                    <li>Home</li>
                    <li>Fórum</li>
                    <li>Dicas de estudos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;