import { Card, Container } from "react-bootstrap";

import styles from "./styles.module.scss";

import { Appointments } from "../Appointments";
import { AvailabilityLoggedUser } from "../AvailabilityLoggedUser";
import { Calendar } from "../Calendar";

import jeronimo from '../../img/jeronimo.jpg';
import luiza from '../../img/luiza.jpg';
import marcelina from '../../img/marcelina.jpg';
import owl from '../../img/happy-owl.svg'

localStorage.setItem('userId', '5'); // Usuário logado

export function Homepage() {
    return (
        <main className={styles.pageContainer}>
            <section className={styles.sidebarContainer}>
                <Card className={styles.messageContainer}>
                    <div>
                        <Card.Title className={styles.fontSize}>
                            Olá,
                        </Card.Title>

                        <Card.Text  className={styles.textMessage}>
                            espero que o seu dia seja lindo!
                        </Card.Text>
                    </div>
                    <Card.Img variant="top" src={owl} className={styles.image} alt="Uma coruja ouvindo música." />
                </Card>
                <div className={styles.wrapperCards}>
                <Card className={styles.genericCard}>
                    <Card.Body>
                        <Card.Title className={styles.title}>
                            Perguntas feitas no Fórum
                        </Card.Title>

                        <Card.Text className={styles.textCard}>
                            Feitas 0
                        </Card.Text>

                        <Card.Text className={styles.textCard}>
                            Respondidas 0
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className={styles.genericCard}>
                    <Card.Body className={styles.savedProfiles}>
                        <Card.Title className={styles.title}>
                            Perfis salvos
                        </Card.Title>

                        <Card.Text>
                            <Card.Img  variant="top" src={marcelina} className={styles.photo} alt="Marcelina é uma mulher branca, tem os cabelos ondulados, está num ambiente interno e sorrindo." />
                            Marcelina Silva
                        </Card.Text>

                        <Card.Text>
                            <Card.Img  variant="top" src={luiza} className={styles.photo} alt="Luíza é uma mulher branca, tem os cabelos liso, está num ambiente externo usando batom vermelho e sorrindo." />
                            Luíza Fernanda
                        </Card.Text>

                        <Card.Text>
                            <Card.Img  variant="top" src={jeronimo} className={styles.photo} alt="Jerônimo é um homem negro, tem barba, está sério, num ambiente externo e usando um chapeu." />
                            Jerônimo Cristino
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </section>

            <section className={styles.contentContainer}>
                <Card className={styles.scheduleContainer}>
                    <Card.Title className={styles.title}>
                        Minha agenda
                    </Card.Title>

                    <Card.Text>
                        Aqui você encontra seus agendamentos e pode editar a sua disponibilidade
                    </Card.Text>

                    <Container className={styles.calendarContainer}>
                        <Calendar />
                        <AvailabilityLoggedUser />
                    </Container>
                </Card>

                <Card className={styles.appointmentsContainer}>
                    <Card.Title className={styles.title}>
                        Mentorias
                    </Card.Title>
                    <Appointments />
                </Card>
            </section >
        </main >
    )
}
