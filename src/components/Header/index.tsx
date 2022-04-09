import styles from "./styles.module.scss"

export function Header() {
    return (
        <header>
            <nav className={styles.header}>
                <h2>LOGO</h2>
                <input typeof="search" className={styles.inputBox} placeholder="Pesquisar um sangue laranja por nome, habilidades.."></input>
                <ul className={styles.navList}>
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
