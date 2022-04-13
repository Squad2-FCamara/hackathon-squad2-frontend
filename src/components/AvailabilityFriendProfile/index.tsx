import { Button, Card } from "react-bootstrap";
import styles from './styles.module.scss';

export function AvailabilityFriendProfile() {
    return (
        <Card style={{ border: '0' }}>
            <Card.Body className={styles.availabilityContainer}>
                <Card.Title style={{ fontWeight: '700', fontSize: '1rem' }}>Escolha o melhor horário</Card.Title>
                <Card.Body className={styles.availabilityCardContainer}>
                    <Button href="#" variant="outline-dark" className={styles.availabilityButton}>
                        08:00 - 08:40
                    </Button>
                    <Button href="#" variant="outline-dark" className={styles.availabilityButton}>
                        10:20 - 10:50
                    </Button>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}