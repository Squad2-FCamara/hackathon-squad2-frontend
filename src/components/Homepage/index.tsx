import { Card } from "react-bootstrap"
import styles from "./styles.module.scss"
import persona from '/user-example.jpg'

export function Homepage() {
    return (
        <main className={styles.pageContainer}>
            <section className={styles.sidebarContainer}>
                <h1>sidebar</h1>
                <Card style={{ width: '18rem' }} className={styles.userContainer}>
                    <Card.Img variant="top" src={persona} className={styles.photo} alt="Marcelina é uma mulher negra, tem os cabelos cacheados, está num ambiente externo usando óculos escuros e sorrindo." />
                    <Card.Body>
                        <Card.Title>Marcelina Silva</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">marcelina.silva@fcamara.com</Card.Subtitle>
                        <Card.Text>
                            Brasília/DF - Brasil
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

            <section className={styles.contentContainer}>
                <h1>content</h1>
            </section>
        </main >
    )
}
