import { Button, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import capitalizeText from "../../utils/capitalizeText";
import styles from "./styles.module.scss";
import empty from "../../img/schedules-empty.svg";
import { formatDay } from "../../utils/formatDay";
import { formatHour } from "../../utils/formatHour";

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
    const userId = localStorage.getItem('userId')
    const { data } = useQuery<Appointments>('appointments', async () => {
        const response = await api.get(`/user/schedule/${userId}`)
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <>
            {!data
                ?
                <Card className={styles.imgContainer}>
                    <Card.Img src={empty} className={styles.img} />
                    <Card.Text className={styles.fontSize}>
                        Você ainda não tem agendamentos.
                    </Card.Text>
                </Card>
                :
                data.map(item => {
                    let userSchedule = item.schedule.UserSchedule

                    return (
                        <Card className={styles.appointmentContainer} key={item.schedule.id}>
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
                                        <Card.Body style={{ padding: '0' }} key={element.user.id}>
                                            <Card.Title className={styles.infoCard}>
                                                {`
                                                    ${capitalizeText(element.user.name)} 
                                                    - ${capitalizeText(element.user.Profile.Role.name)} 
                                                    - ${capitalizeText(element.user.Profile.seniority)}
                                                `}
                                            </Card.Title>

                                            <Card.Subtitle className={styles.infoCard}>
                                                {element.user.email}
                                            </Card.Subtitle>

                                            <Card.Text style={{ marginTop: '1rem', fontSize: '.8rem' }}>
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