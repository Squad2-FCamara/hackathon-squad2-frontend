import { SyntheticEvent, useContext } from "react"
import { Nav, Navbar, Image, Form, FormControl, Button } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { SearchContextType, SearchContext } from "../../context/SearchContext"
import { Bell, Book, HouseDoor, People, Search } from "react-bootstrap-icons"
import styles from "./styles.module.scss"
import persona from "/eduarda.jpg"



export function Header() {
    const navigate = useNavigate()
    const { handleInput } = useContext(SearchContext) as SearchContextType;
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/results")
    }

    const activeStyle = {
        color: 'rgba(254, 187, 162, 1)'
    }
    const deactivateStyle = {
        color: 'rgb(255, 255, 255, 1)'
    }

    return (
        <header className={styles.header}>
            <Navbar collapseOnSelect expand="lg" className={styles.navbar} >
                <NavLink to={"/"}>LOGO</NavLink>
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <FormControl
                        type="search"
                        placeholder="Pesquisar Sangue Laranja por nome, habilidades..."
                        className={styles.inputBox}
                        aria-label="Campo de pesquisa"
                        onChange={handleInput}
                    />
                    <Button className={styles.button}><Search /></Button>
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
                    <Image src={persona} className={styles.photo}
                        alt="" />
                </Nav>
            </Navbar>
        </header>
    )
}
