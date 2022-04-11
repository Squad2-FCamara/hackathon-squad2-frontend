import { SyntheticEvent, useContext } from "react"
import { Nav, Navbar, Container, Image, Form, FormControl } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { SearchContextType, SearchContext } from "../../context/SearchContext"
import styles from "./styles.module.scss"
import persona from "/eduarda.jpg"

export function Header() {
    const navigate = useNavigate()
    const { handleInput } = useContext(SearchContext) as SearchContextType;
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/results")
    }

    return (
        <header className={styles.header}>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <NavLink to={"/"}>LOGO</NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form onSubmit={handleSubmit}>
                            <FormControl
                                type="search"
                                placeholder="search"
                                className={styles.inputBox}
                                aria-label="Search"
                                onChange={handleInput}
                            />
                        </Form>
                        <Nav className={styles.navList}>
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/"}>Fórum</NavLink>
                            <NavLink to={"/"}>Dicas de estudos</NavLink>
                            <NavLink to={"/"}>Icon</NavLink>
                            <Image src={persona} className={styles.photo} alt="Eduarda é uma mulher negra, tem os cabelos cacheados, está num ambiente externo usando óculos escuros e sorrindo." />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
