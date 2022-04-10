import { Card } from "react-bootstrap"
import DatePicker from 'sassy-datepicker';

import styles from "./styles.module.scss"
import eduarda from '/eduarda.jpg'
import jeronimo from '/jeronimo.jpg'
import luiza from '/luiza.jpg'
import marcelina from '/marcelina.jpg'

export function Homepage() {
    return (
        <main className={styles.pageContainer}>
            <section className={styles.sidebarContainer}>
                <Card style={{ width: '18rem' }} className={styles.userContainer}>
                    <Card.Img variant="top" src={eduarda} className={styles.photo} alt="Eduarda é uma mulher negra, tem os cabelos cacheados, está num ambiente externo usando óculos escuros e sorrindo." />
                    <Card.Title>Eduarda Mônica</Card.Title>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Perguntas no Fórum</Card.Title>
                        <Card.Text>
                            Feitas 50 <br />
                            Respondidas 48
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Perfis Salvos</Card.Title>
                        <Card.Text>
                            <Card.Img style={{ width: '2.5rem', height: '2.5rem' }} variant="top" src={marcelina} className={styles.photo} alt="Marcelina é uma mulher branca, tem os cabelos ondulados, está num ambiente interno e sorrindo." /> Marcelina Silva
                        </Card.Text>
                        <Card.Text>
                            <Card.Img style={{ width: '2.5rem', height: '2.5rem' }} variant="top" src={luiza} className={styles.photo} alt="Luíza é uma mulher branca, tem os cabelos liso, está num ambiente externo usando batom vermelho e sorrindo." /> Luíza Fernanda
                        </Card.Text>
                        <Card.Text>
                            <Card.Img style={{ width: '2.5rem', height: '2.5rem' }} variant="top" src={jeronimo} className={styles.photo} alt="Jerônimo é um homem negro, tem barba, está sério, num ambiente externo e usando um chapeu." /> Jerônimo Cristino
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

            <section className={styles.contentContainer}>
                <h1>content</h1>
                <DatePicker />
            </section>
        </main >
    )
}
