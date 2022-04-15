import { Button, Card, CardGroup, Container, Form } from "react-bootstrap";
import { AvailabilityFriendProfile } from "../AvailabilityFriendProfile";
import { Calendar } from "../Calendar";
import styles from "./styles.module.scss";
import eduarda from "/eduarda.jpg";
import api from '../../services/api'

export function Schedule() {

    const mentorId = Number(localStorage.getItem('mentorId'));
    const userId = Number(localStorage.getItem('userId'));

    async function getSearchResult() {
        const dataMentor = await api.get(`/user/id/${mentorId}`);
        console.log(dataMentor)
        console.log(dataMentor.data.user.Profile.nickname);
        localStorage.setItem('nickname', dataMentor.data.user.Profile.nickname);
        localStorage.setItem('email', dataMentor.data.user.email);
        localStorage.setItem('role', dataMentor.data.user.Profile.Role.name);
        localStorage.setItem('photo', dataMentor.data.user.photo);
    }
    getSearchResult();

    const nickname = localStorage.getItem('nickname')
    const email = localStorage.getItem('email')
    const role = localStorage.getItem('role')
    const photo = localStorage.getItem('photo')

    async function scheduleMentor(){
        const bodyRequest = {
            day: "2022-04-14T13:00:00.969Z",
	        start_time: "2022-04-15T15:00:00.969Z",
	        end_time: "2022-04-15T15:30:00.969Z",
	        description: "Dúvida na introdução do artigo",
	        userId1: userId,
	        userId2: mentorId
        }

        console.log(bodyRequest)
        const response = api.post('/user/schedule', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyRequest),
        })
        console.log(response)
    }

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

                        <Card.Title style={{ fontWeight: '700', fontSize: '1.3rem' }} >
                            {nickname}
                        </Card.Title>

                        <Card.Text>
                            {email}<br />
                            {role}
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

                        <Button variant="outline-dark" className={styles.buttonStyle} onClick={scheduleMentor}>Marcar mentoria</Button>
                    </Card>
                </Card>
            </section>
        </main >
    )
}