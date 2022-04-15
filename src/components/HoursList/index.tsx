import { Badge } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import { formatHour } from "../../utils/formatHour";
import { AvailabilityProfile } from "../HoursButton";
import styles from './styles.module.scss'

// A fazer: comparar data e mostrar apenas os horários para o dia selecionado

export function HourList() {
    const { data } = useQuery<AvailabilityProfile>('availabilitiesUserLogged', async () => {
        const response = await api.get('/user/availability/2')
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <>
            {data?.user.Profile.ProfileAvailability.map(item => {
                let startTime = formatHour(item.availability.start_time);
                let endTime = formatHour(item.availability.end_time);

                return (
                    <Badge pill bg="secondary" text="dark" className={styles.badge} key={item.availability.id}>
                        {`${startTime} - ${endTime}`}
                    </Badge>
                )
            })}
        </>
    )
}