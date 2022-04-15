import { useContext } from "react"
import { Nav, Navbar, Image, Form, FormControl, Container } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import { Bell, Book, HouseDoor, People, Search } from "react-bootstrap-icons"
import styles from "./styles.module.scss"
import persona from "../../img/eduarda.jpg"
import logo from "../../img/logo.svg"

export function Header() {
    const { getSearchResult } = useContext(SearchContext);
    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const text = formData.get('search-input')

        await getSearchResult(text)

        form.reset()
        navigate('/results')
    }

    const activeStyle = {
        color: 'rgba(254, 187, 162, 1)'
    }
    const deactivateStyle = {
        color: 'rgb(255, 255, 255, 1)'
    }

    return (
        <header className={styles.header}>
            <Navbar expand="md" variant="dark" className={styles.navbar}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to={"/"} aria-label="logo"><img src={logo} className={styles.logo} alt="Logo branco contendo as letras T e S para Technical Share"/></NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className={styles.wrapperPhoto}>
                        <Image src={persona} className={styles.photo} alt="Foto de perfil do usuário logado" />
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" className={styles.toggle} />
                    <Navbar.Collapse id="basic-navbar-nav" className={styles.collapse}>
                        <Form onSubmit={handleSubmit} className={styles.form}>
                            <FormControl
                                type="search"
                                placeholder="Pesquisar Sangue Laranja por nome, habilidades..."
                                className={styles.inputBox}
                                aria-label="Campo de pesquisa"
                                name="search-input"
                            />
                            <Search style={{ position: 'absolute', right: '1rem' }} />
                        </Form>
                        <Nav className={styles.navList}>
                            <NavLink
                                to={"/"}
                                style={({ isActive }) => isActive ? activeStyle : deactivateStyle}>
                                <HouseDoor
                                    className={styles.icons}
                                    aria-label="Página Inicial " />Home
                            </NavLink>
                            <NavLink to={"/"}>
                                <People className={styles.icons}
                                    aria-label="Fórum" />Fórum
                            </NavLink>
                            <NavLink to={"/"}>
                                <Book
                                    className={styles.icons}
                                    aria-label="Dicas de estudo" />Guia de estudos
                            </NavLink>
                            <NavLink to={"/"}>
                                <Bell
                                    className={styles.icons}
                                    aria-label="Notificações" />Notificações
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
