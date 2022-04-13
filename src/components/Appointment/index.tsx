import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import styles from "./styles.module.scss";
import luiza from '/luiza.jpg';

type Appointment = {
    user: {
        id: number,
        name: string,
    },
    schedule: {
        id: number,
        day: string,
        start_time: string,
        end_time: string,
        description: string,
        UserSchedule: [
            {
                user: {
                    id: number,
                    name: string,
                    email: string,
                }
            }
        ]
    }
}

export function Appointment() {
    const { data, isFetching } = useQuery<Appointment[]>('appointments', async () => {
        const response = await api.get('http://localhost:4000/user/schedule/2')

        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <section>
            {isFetching && <p>Carregando...</p>}
            {data?.map(appointment => {
                return (
                    <Card style={{ width: '100%' }} key={appointment.schedule.id}>
                        <Card.Body >
                            <Card.Title>{appointment.schedule.day} | início {appointment.schedule.start_time} - término {appointment.schedule.end_time}</Card.Title>
                            <Card.Img style={{ width: '2.5rem', height: '2.5rem' }} variant="top" src={luiza} className={styles.photo} alt={appointment.user.name} />
                            {appointment.schedule.UserSchedule?.map(schedule => {
                                if (schedule.user.id != appointment.user.id) {
                                    return schedule.user.name
                                }
                            })}
                            <Card.Text>
                                {appointment.schedule.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </section>
    )
}