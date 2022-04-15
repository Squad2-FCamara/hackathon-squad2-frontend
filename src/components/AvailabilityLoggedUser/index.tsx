import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import { HourList } from "../HoursList";
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

// passar a lógica do hour button para o hour list e renderizar na homepage
// logged user = Aline, id 2
// ao invés de renderizar os botões, renderizar os horários em lista não clicável
export function AvailabilityLoggedUser() {
    const { data, isFetching } = useQuery<ProfileAvailability[]>('availabilities', async () => {
        const response = await api.get('http://localhost:4000/users')

        console.log(response.data)
        return response.data
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    return (
        <Card className={styles.availabilityContainer} >
            <Card.Body className={styles.availability}>
                <Card.Title className={styles.title}>Seus horários disponíveis:</Card.Title>
                {data?.map(user => {
                    return (
                        <div>
                            {user.id}
                        </div>
                    )
                })}

                {/* Identificar dia selecionado no calendário */}
                {/* Pesquisar os horários cadastrados no banco referente aos meus horários disponíveis para aquele dia */}

                <HourList />
            </Card.Body>
        </Card>
    )
}