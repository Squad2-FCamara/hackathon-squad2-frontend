import { Button, Card, CardGroup, Container, Form } from "react-bootstrap";
import { AvailabilityFriendProfile } from "../AvailabilityFriendProfile";
import { Calendar } from "../Calendar";
import styles from "./styles.module.scss";
import eduarda from "../../img/eduarda.jpg";

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

                    <AvailabilityFriendProfile />
                </CardGroup>

                <Form.Group className="mb-3" controlId="formText">
                    <Form.Label style={{ fontWeight: '700' }}>
                        Qual é o assunto?
                    </Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Escreva aqui o assunto da mentoria"
                        className={styles.formStyle}
                    />
                </Form.Group>
            </section>

            <section >
                <Card className={styles.userCardContainer}>
                    <Container className={styles.userContainer}>
                        <Card.Img variant="top" src={eduarda} className={styles.photo} alt="Eduarda é uma mulher negra, tem os cabelos cacheados, está num ambiente externo usando óculos escuros e sorrindo." />

                        <Card.Title style={{ fontWeight: '700', fontSize: '1.3rem' }}>
                            Eduarda Mônica
                        </Card.Title>

                        <Card.Text>
                            eduarda@fcamara.com.br<br />
                            Desenvolvedora FullStack
                        </Card.Text>

                        <Card.Title style={{ fontWeight: '700' }}>
                            <hr />
                            Resumo do agendamento
                        </Card.Title>
                    </Container>

                    <Card className={styles.infoContainer}>
                        <Card.Title style={{ fontWeight: '700' }}>
                            Data
                        </Card.Title>
                        <Card.Text>
                            30 Outubro 2021
                        </Card.Text>

                        <Card.Title style={{ fontWeight: '700' }}>
                            Horário
                        </Card.Title>
                        <Card.Text>
                            16:00 - 16:30
                        </Card.Text>

                        <Card.Title style={{ fontWeight: '700' }}>
                            Onde?
                        </Card.Title>
                        <Card.Text>
                            Teams
                        </Card.Text>

                        <Card.Title style={{ fontWeight: '700' }}>
                            Assunto
                        </Card.Title>
                        <Card.Text>
                            Gostaria de entender melhor como usar o Java.
                        </Card.Text>

                        <Button variant="outline-dark" className={styles.buttonStyle}>Marcar mentoria</Button>
                    </Card>
                </Card>
            </section>
        </main >
    )
}