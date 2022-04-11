import { SyntheticEvent, useContext } from "react"
import { Nav, Navbar, Container, Image, Form, FormControl } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
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
                    <Navbar.Brand href="#home">LOGO</Navbar.Brand>

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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#forum">Fórum</Nav.Link>
                            <Nav.Link href="#tips">Dicas de estudos</Nav.Link>
                            <Navbar.Brand href="#home">Icon</Navbar.Brand>
                            <Image src={persona} className={styles.photo} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
