import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import styles from "./styles.module.scss"
import luiza from '/luiza.jpg'

type Appointment = {
    name: String,
    email: String,
    UserSchedule: [
        {
            schedule: {
                day: String,
                start_time: String,
                end_time: String,
                description: String
            }
        }]
}

export function Appointment() {
    const { data, isFetching } = useQuery<Appointment[]>('agendamentos', async () => {
        const response = await api.get('http://localhost:4000/users')

        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <section>
            {isFetching && <p>Carregando...</p>}
            {data?.map(agendamento => {
                return (
                    <Card style={{ width: '100%' }} >
                        <Card.Body>
                            <Card.Title>30 Outubro 2021 | início 16:00 - término 16:30</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><Card.Img style={{ width: '2.5rem', height: '2.5rem' }} variant="top" src={luiza} className={styles.photo} alt="Luíza é uma mulher branca, tem os cabelos liso, está num ambiente externo usando batom vermelho e sorrindo." />{agendamento.name}</Card.Subtitle>
                            <Card.Text>
                                {agendamento.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </section>
    )
}