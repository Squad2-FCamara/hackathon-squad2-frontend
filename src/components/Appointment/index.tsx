import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import styles from "./styles.module.scss";
import luiza from '/luiza.jpg';

type UserSchedule = {
    schedule: {
        id: number,
        day: Date,
        start_time: Date,
        end_time: Date,
        description: string
    }
}

type Appointment = {
    user: {
        name: string,
        id: number,
        email: string,
        UserSchedule: [UserSchedule]
    }
}

export function Appointment() {
    const { data, isFetching } = useQuery<Appointment>('appointments', async () => {
        const response = await api.get('http://localhost:4000/user/schedule/1')
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    if (data) {
        var {
            user: {
                name: userName,
                id: userId,
                email: userEmail,
                UserSchedule: [{ schedule: schedule }]
            }
        } = data;
    }

    return (
        <section>
            {isFetching && <p>Carregando...</p>}
            {data?.user.UserSchedule.map(item => {
                return (
                    <Card style={{ width: '100%' }}>
                        <Card.Body >
                            <Card.Title>{`${item.schedule.day} | início ${item.schedule.start_time} - término ${item.schedule.end_time}`}</Card.Title>
                            <Card.Img style={{ width: '2.5rem', height: '2.5rem' }} variant="top" src={luiza} className={styles.photo} alt={userName} />

                            {/* if (schedule.user.id != appointment.user.id) { */}
                            {/* return schedule.user.name */}
                            {/* }  */}
                            <Card.Text>
                                {item.schedule.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </section>
    )
}