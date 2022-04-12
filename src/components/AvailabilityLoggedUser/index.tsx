import { Button, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import styles from "./styles.module.scss";

type Availability = {
    day: string,
    hour: string
}

type ProfileAvailability = {
    id: number,
    profile: {
        profileAvailability?: [
            availability: Availability
        ]
    }
}

export function AvailabilityLoggedUser() {
    const { data, isFetching } = useQuery<ProfileAvailability[]>('availabilities', async () => {
        const response = await api.get('http://localhost:4000/users')

        console.log(response.data)
        return response.data
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <Card style={{ width: '20rem' }} >
            <Card.Body className={styles.availability}>
                <Card.Title>Meus horários disponíveis:</Card.Title>
                {isFetching && <p>Carregando</p>}
                {data?.map(user => {
                    return (
                        <div>
                            {user.id}
                        </div>
                    )
                })}

                {/* Identificar dia selecionado no calendário */}
                {/* Pesquisar os horários cadastrados no banco referente aos meus horários disponíveis para aquele dia */}

                <Button href="#" variant="outline-dark">08:00 - 08:40</Button>
                <Button href="#" variant="outline-dark">10:20 - 10:50</Button>
            </Card.Body>
        </Card>
    )
}