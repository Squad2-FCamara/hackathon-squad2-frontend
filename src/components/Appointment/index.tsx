import { Card } from "react-bootstrap";
import styles from "./styles.module.scss"
import luiza from '/luiza.jpg'

export function Appointment() {
    return (
        <Card style={{ width: '100%' }} >
            <Card.Body>
                <Card.Title>30 Outubro 2021 | início 16:00 - término 16:30</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><Card.Img style={{ width: '2.5rem', height: '2.5rem' }} variant="top" src={luiza} className={styles.photo} alt="Luíza é uma mulher branca, tem os cabelos liso, está num ambiente externo usando batom vermelho e sorrindo." /> Luíza Fernanda</Card.Subtitle>
                <Card.Text>
                    Gostaria de entender melhor como vocês estruturam a pesquisa em UX.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}