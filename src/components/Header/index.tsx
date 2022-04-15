import { SyntheticEvent, useContext } from "react"
import { Nav, Navbar, Image, Form, FormControl, Button, InputGroup } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import { Bell, Book, HouseDoor, People, Search } from "react-bootstrap-icons"
import styles from "./styles.module.scss"
import persona from "/eduarda.jpg"
import logo from "/logo.png"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"



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
            <Navbar collapseOnSelect expand="sm" className={styles.navbar} >
                <NavLink to={"/"}><img src={logo} /></NavLink>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
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
                            className={styles.houseDoor}
                            style={{ fontSize: '2rem' }}
                            aria-label="Página Inicial " />Home
                    </NavLink>
                    <NavLink to={"/"}>
                        <People className={styles.people}
                            style={{ fontSize: '2rem' }}
                            aria-label="Fórum" />Fórum
                    </NavLink>
                    <NavLink to={"/"}>
                        <Book
                            className={styles.book}
                            style={{ fontSize: '2rem' }}
                            aria-label="Dicas de estudo" />Dicas de estudos
                    </NavLink>
                    <NavLink to={"/"}>
                        <Bell
                            className={styles.bell}
                            style={{ fontSize: '2rem' }}
                            aria-label="Notificações" />Notificações
                    </NavLink>
                </Nav>
                <Image src={persona} className={styles.photo} alt="Foto de perfil do usuário logado" />
            </Navbar>
        </header>
    )
}
