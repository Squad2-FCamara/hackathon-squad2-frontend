import { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import styles from './styles.module.scss'
import error from '../../img/error.png'
import abstractUser from '../../img/abstract-user.svg'

type User = {
    profile: any
}

export function SearchResults() {
    const { searchResult, data } = useContext(SearchContext);

    return (
        <section className={styles.section}>
            {data
                ?
                <div className={styles.msgError}>
                    <h2>Vixe! Não encontramos resultados para sua pesquisa.</h2>
                    <img src={error} className={styles.img} />
                </div>
                :
                <>
                    <h2 className={styles.sectionName}>Sangues Laranjas que mais se encaixam na sua pesquisa:</h2>
                    <Row lg={"auto"} md={2} xs={1} className={`g-4 ${styles.cardRow}`}>
                        {searchResult.map((user: any, index: any) => {
                            return (
                                <Col key={index}>
                                    <Card className={styles.card} >
                                        <Card.Img variant="top" className={`rounded-circle ${styles.photo}`} src={user?.photo || abstractUser} alt={`Foto de perfil ${user.nickname}`} />
                                        <Card.Body className={styles.bodyStyle}>
                                            <Card.Title className={styles.name}>{user.nickname}</Card.Title>

                                            <Card.Title className={styles.title}>Cargo</Card.Title>
                                            <Card.Text className={styles.text}>
                                                {user.Role.name}
                                            </Card.Text>
                                            <Card.Title className={styles.title}>Senioridade</Card.Title>
                                            <Card.Text className={styles.text}>
                                                {user.seniority}
                                            </Card.Text>
                                            <Card.Title className={styles.title}>Principais Skills</Card.Title>
                                            <Card.Text className={styles.text}>
                                                {user.ProfileSkill.map((item: any) => {
                                                    return item.skill.name
                                                }).join(' | ')}
                                            </Card.Text>
                                            <Link to={"/schedule"}><Button type="button" className={styles.button}>Agendar mentoria</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </>
            }
        </section >
    )
}