import { Card, CardGroup } from 'react-bootstrap'
import styles from './styles.module.scss'
import marcelina from '/marcelina.jpg'

export function SearchResults() {
    return (
        <section className={styles.cardColumn}>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={marcelina} alt="Marcelina é uma mulher branca, tem os cabelos ondulados, está num ambiente interno e sorrindo." />
                    <Card.Body>
                        <Card.Title>Marcelina Silva</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={marcelina} alt="Marcelina é uma mulher branca, tem os cabelos ondulados, está num ambiente interno e sorrindo." />
                    <Card.Body>
                        <Card.Title>Marcelina Silva</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={marcelina} alt="Marcelina é uma mulher branca, tem os cabelos ondulados, está num ambiente interno e sorrindo." />
                    <Card.Body>
                        <Card.Title>Marcelina Silva</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={marcelina} alt="Marcelina é uma mulher branca, tem os cabelos ondulados, está num ambiente interno e sorrindo." />
                    <Card.Body>
                        <Card.Title>Marcelina Silva</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </section >
    )
}