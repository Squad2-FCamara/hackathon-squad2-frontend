import { Button, Card } from "react-bootstrap";
import { HoursButton } from "../HoursButton";
import styles from './styles.module.scss';

export function AvailabilityFriendProfile() {
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