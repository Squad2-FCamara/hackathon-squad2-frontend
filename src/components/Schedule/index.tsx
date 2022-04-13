import { Button, Card, CardGroup, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Calendar } from "../Calendar";
import styles from "./styles.module.scss";
import eduarda from "/eduarda.jpg";

export function Schedule() {
    return (
        <main className={styles.pageContainer}>
            <section className={styles.scheduleContainer}>
                <h1>Bora agendar uma mentoria?</h1>
                <h2>Escolha o dia que mais dá match entre suas agendas</h2>

                <CardGroup className={styles.calendarContainer}>
                    <Card style={{ border: '0' }} >
                        <Card.Body className={styles.calendarCardContainer}>
                            <Calendar />
                        </Card.Body>
                    </Card>

                    <Card style={{ border: '0' }}>
                        <Card.Body className={styles.availabilityContainer}>
                            <Card.Title style={{ fontWeight: '700', fontSize: '1rem' }}>Escolha o melhor horário</Card.Title>
                            <Card.Body className={styles.availabilityCardContainer}>
                                <Button href="#" variant="outline-dark" className={styles.availabilityButton}>
                                    08:00 - 08:40
                                </Button>
                                <Button href="#" variant="outline-dark" className={styles.availabilityButton}>
                                    10:20 - 10:50
                                </Button>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </CardGroup>

                <h2 style={{ fontWeight: '700' }}>Qual é o assunto?</h2>
                <Form.Control
                    type="text"
                    placeholder="Escreva aqui o assunto da mentoria"
                    className={styles.formStyle}
                />
            </section>

            <section className={styles.userCardContainer}>
                <Card style={{ width: '18rem' }} className={styles.userContainer}>
                    <Card.Img variant="top" src={eduarda} className={styles.photo} alt="Eduarda é uma mulher negra, tem os cabelos cacheados, está num ambiente externo usando óculos escuros e sorrindo." />
                    <Card.Title>Eduarda Mônica</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Desenvolvedora FullStack</Card.Subtitle>
                    <Card.Title >Mentoria</Card.Title>
                    <ListGroup className="list-group-flush" >
                        <ListGroupItem className={styles.userContainer}>
                            <p>
                                30 Outubro 2021 <br />
                                <strong>Data</strong>
                            </p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.userContainer}>
                            <p>
                                16:00 - 16:30 <br />
                                <strong>Horário</strong>
                            </p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.userContainer}>
                            <p>
                                Teams <br />
                                <strong>Onde?</strong>
                            </p>
                        </ListGroupItem>
                    </ListGroup>

                    <Button variant="outline-dark" className={styles.buttonStyle}>Marcar mentoria</Button>
                </Card>
            </section>
        </main>
    )
}