import { Badge, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import { formatHour } from "../../utils/formatHour";
import { AvailabilityProfile } from "../AvailabilityFriendProfile";
import styles from "./styles.module.scss";

// passar a lógica do hour button para o hour list e renderizar na homepage
// logged user = Aline, id 2
// ao invés de renderizar os botões, renderizar os horários em lista não clicável
// Identificar dia selecionado no calendário
// comparar data e mostrar apenas os horários para o dia selecionado

export function AvailabilityLoggedUser() {
    const userId = localStorage.getItem('userId')

    const { data } = useQuery<AvailabilityProfile>('availabilitiesLoggedUser', async () => {
        const response = await api.get(`/user/availability/${userId}`)
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <Card className={styles.availabilityContainer} >
            <Card.Body className={styles.availability}>
                <Card.Title className={styles.title}>Seus horários disponíveis:</Card.Title>

                {data?.user.Profile.ProfileAvailability.map(item => {
                    let startTime = formatHour(item.availability.start_time);
                    let endTime = formatHour(item.availability.end_time);

                    return (
                        <Badge pill bg="secondary" text="dark" className={styles.badge} key={item.availability.id}>
                            {`${startTime} - ${endTime}`}
                        </Badge>
                    )
                })}
            </Card.Body>
        </Card>
    )
}