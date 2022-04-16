import { Button, Card, CardGroup, Container, Form } from "react-bootstrap";
import { AvailabilityFriendProfile } from "../AvailabilityFriendProfile";
import { Calendar } from "../Calendar";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';
import abstractUser from '../../img/abstract-user.svg'

type UserData = {
    user: {
        id: number,
        name: string,
        email: string,
        Profile: {
            nickname: string,
            seniority: string,
            id: number,
            photo: string,
            Role: {
                name: string
            }
        }
    }
}

const mentorId = Number(localStorage.getItem('mentorId'));
const userId = Number(localStorage.getItem('userId'));



export function Schedule() {
    async function getSearchResult() {
        const dataMentor = await api.get<UserData>(`/user/id/${mentorId}`);
        localStorage.setItem('nickname', dataMentor.data.user.Profile.nickname);
        localStorage.setItem('email', dataMentor.data.user.email);
        localStorage.setItem('role', dataMentor.data.user.Profile.Role.name);
        localStorage.setItem('photo', dataMentor.data.user.Profile.photo);
    }
    getSearchResult();

    const nickname = localStorage.getItem('nickname')
    const email = localStorage.getItem('email')
    const role = localStorage.getItem('role')
    const photo = localStorage.getItem('photo')
    const navigate = useNavigate();

    async function scheduleMentor() {
        const bodyRequest = {
            day: "2022-04-14T13:00:00.969Z",
            start_time: "2022-04-15T15:00:00.969Z",
            end_time: "2022-04-15T15:30:00.969Z",
            description: "Dúvida no método post",
            userId1: userId,
            userId2: mentorId
        }

        try {
            const response = await axios({
                method: 'post',
                url: 'https://fcamara-squad2.herokuapp.com/user/schedule',
                data: bodyRequest
            })
            console.log(response.statusText)
            console.log("dentro do try")
            const aux = toast("Agendamento marcado com sucesso", { autoClose: 3000, pauseOnHover: false });
            const timer = setTimeout(() => {
                navigate('/');
            }, 3500);
        } catch (e) {
            toast("Não foi possível fazer o agendamento", { autoClose: 3000, pauseOnHover: false })
            throw new Error('Ocorreu um erro')
        }

    }



    return (
        <main className={styles.pageContainer}>
            <CardGroup className={styles.containerAux} style={{ border: '0' }}>
                <section className={styles.scheduleContainer}>
                    <h1>Bora agendar uma mentoria?</h1>
                    <h2>Escolha o dia que mais dá match entre suas agendas</h2>

                    <div className={styles.container1}>
                        <div>
                            <Calendar />
                        </div>
                        <AvailabilityFriendProfile />
                    </div>

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

                <section className={styles.profileContainer}>
                    <Card className={styles.userCardContainer}>
                        <Container className={styles.userContainer}>
                            <Card.Img variant="top" src={photo || abstractUser} className={styles.photo} alt={`Foto do perfil de ${nickname}`} />

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
            </CardGroup>
        </main >
    )
}