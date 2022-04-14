import { Button, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { format, parseJSON } from "date-fns";
import { ptBR } from "date-fns/locale";
import api from "../../services/api";
import styles from "./styles.module.scss";
import empty from "../../img/schedules-empty.svg";

type Appointments = [
    {
        user: {
            id: number,
            name: string,
            email?: string,
        },
        schedule: {
            id: number,
            day: Date,
            start_time: Date,
            end_time: Date,
            description: string,
            UserSchedule: [UserSchedule]
        }
    }
]

type UserSchedule = {
    user: {
        id: number,
        name: string,
        email?: string,
        Profile: Profile
    }
}

type Profile = {
    photo?: string,
    seniority: string,
    Role: {
        name: string
    }
}

export function Appointments() {
    const { data } = useQuery<Appointments>('appointments', async () => {
        const response = await api.get('http://localhost:4000/user/schedule/1')
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    function formatDay(date: Date) {
        return format(parseJSON(date), "dd MMMM yyyy", { locale: ptBR })
    }

    function formatHour(date: Date) {
        return format(parseJSON(date), "kk:mm", { locale: ptBR })
    }

    return (
        <>
            {!data
                ?
                <Card className={styles.imgContainer}>
                    <Card.Img src={empty} className={styles.img} />
                    <Card.Text style={{ fontSize: '1.2rem' }}>
                        Você ainda não tem agendamentos
                    </Card.Text>
                </Card>
                :
                data.map(item => {
                    let userSchedule = item.schedule.UserSchedule

                    return (
                        <Card className={styles.appointmentContainer}>
                            <Card.Title className={styles.dateTitle}>
                                <Card.Text style={{ margin: '0' }}>
                                    {`${formatDay(item.schedule.day)}`}
                                </Card.Text>

                                <Card.Text>
                                    {`
                                        início ${formatHour(item.schedule.start_time)}
                                        | término ${formatHour(item.schedule.end_time)}
                                    `}
                                </Card.Text>
                            </Card.Title>

                            {userSchedule.map(element => {
                                if (item.user.id != element.user.id) {
                                    return (
                                        <Card.Body style={{ padding: '0' }}>
                                            <Card.Title>
                                                {`
                                                    ${element.user.name} 
                                                    - ${element.user.Profile.Role.name} 
                                                    - ${element.user.Profile.seniority}
                                                `}
                                            </Card.Title>

                                            <Card.Subtitle>
                                                {element.user.email}
                                            </Card.Subtitle>

                                            <Card.Text style={{ marginTop: '1rem' }}>
                                                {item.schedule.description}
                                            </Card.Text>

                                            <div className={styles.buttonsContainer}>
                                                <Button disabled>Cancelar</Button>
                                                <Button disabled>Reagendar</Button>
                                            </div>
                                        </Card.Body>
                                    )
                                }
                            })}
                        </Card>
                    )
                })
            }
        </>
    )
}