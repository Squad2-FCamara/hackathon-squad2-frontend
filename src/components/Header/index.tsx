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

    return (
        <header className={styles.header}>
            <Navbar collapseOnSelect expand="lg" className={styles.navbar} >
                <NavLink to={"/"}>LOGO</NavLink>
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <FormControl
                        type="search"
                        placeholder="search"
                        className={styles.inputBox}
                        aria-label="Search"
                        onChange={handleInput}
                    />
                    <Button className={styles.button}><Search/></Button>
                </Form>
                <Nav className={styles.navList}>
                    <NavLink to={"/"}><HouseDoor className={styles.houseDoor} style={{fontSize: '2rem', color: 'white'}}/>Home</NavLink>
                    <NavLink to={"/"}><People className={styles.people} style={{fontSize: '2rem', color: 'white'}} />Fórum</NavLink>
                    <NavLink to={"/"}><Book className={styles.book} style={{fontSize: '2rem', color: 'white'}} />Dicas de estudos</NavLink>
                    
                    <NavLink to={"/"}><Bell className={styles.bell} style={{fontSize: '2rem', color: 'white'}} />Notificações</NavLink>
                    <Image src={persona} className={styles.photo} alt="Eduarda é uma mulher negra, tem os cabelos cacheados, está num ambiente externo usando óculos escuros e sorrindo." />
                </Nav>
            </Navbar>
        </header>
    )
}
