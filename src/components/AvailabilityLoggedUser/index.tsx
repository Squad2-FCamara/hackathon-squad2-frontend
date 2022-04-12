import { Button, Card } from "react-bootstrap";
import styles from "./styles.module.scss";

export function AvailabilityLoggedUser() {
    return (
        <Card style={{ width: '20rem' }} >
            <Card.Body className={styles.availability}>
                <Card.Title>Meus horários disponíveis:</Card.Title>

                {/* Identificar dia selecionado no calendário */}
                {/* Pesquisar os horários cadastrados no banco referente aos meus horários disponíveis para aquele dia */}

                <Button href="#" variant="outline-dark">08:00 - 08:40</Button>
                <Button href="#" variant="outline-dark">10:20 - 10:50</Button>
            </Card.Body>
        </Card>
    )
}