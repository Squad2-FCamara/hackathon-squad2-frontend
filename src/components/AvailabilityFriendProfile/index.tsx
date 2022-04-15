import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import { HoursButton } from "../HoursButton";
import styles from './styles.module.scss';

type AvailabilityFriendProfile = {
    user: {
        name: string,
        id: number,
        email: string,
        Profile: Profile
    }
}

type Profile = {
    ProfileAvailability: [
        {
            availability: {
                day: Date,
                hour: Date
            }
        }
    ]
}

//quando a pessoa clicar em "agendar mentoria", salvar o id do usuário clicado
//fazer requisição no banco de dados referente àquele id
//trazer os resultados de horários disponíveis

export function AvailabilityFriendProfile() {
    const { data } = useQuery<AvailabilityFriendProfile>('availabilities', async () => {
        const response = await api.get('/user/availability/1')
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <Card style={{ border: '0' }}>
            <Card.Body className={styles.availabilityContainer}>
                <Card.Title style={{ fontWeight: '700', fontSize: '1rem' }}>Escolha o melhor horário</Card.Title>
                <Card.Body className={styles.availabilityCardContainer}>
                    <HoursButton />
                </Card.Body>
            </Card.Body>
        </Card>
    )
}