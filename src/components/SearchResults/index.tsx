import { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import capitalizeText from '../../utils/capitalizeText'
import { SearchContext } from '../../context/SearchContext'
import styles from './styles.module.scss'
import error from '../../img/error.png'
import abstractUser from '../../img/abstract-user.svg'


export function SearchResults() {
    const { searchResult } = useContext(SearchContext);

    function schedule(user: any) {
        console.log(user.user.id)
        localStorage.setItem('mentorId', user.user.id)
    }

    return (
        <section className={styles.section}>
            {!searchResult.length ? (
                <div className={styles.msgError}>
                    <h2 className={styles.errorTitle}>Vixe! Não encontramos resultados para sua pesquisa.</h2>
                    <img src={error} className={styles.img} />
                </div>
            ) : (
                <>
                    <h2 className={styles.sectionName}>Sangues Laranjas que mais se encaixam na sua pesquisa:</h2>
                    <Row lg={"auto"} md={2} xs={1} className={`g-4 ${styles.cardRow}`}>
                        {searchResult.map((item: any, index: any) => {
                            const nickname = capitalizeText(item.nickname)
                            return (
                                <Col key={index}>
                                    <Card className={styles.card}>
                                        <Card.Img variant="top" className={`rounded-circle ${styles.photo}`} src={item.photo || abstractUser} alt={`Foto de perfil ${nickname}`} />
                                        <Card.Body className={styles.bodyStyle}>
                                            <Card.Title className={styles.name}>{nickname}</Card.Title>
                                            <Card.Title className={styles.email}>{item.user.email}</Card.Title>
                                            <hr />
                                            <Card.Title className={styles.title}>Cargo</Card.Title>
                                            <Card.Text className={styles.text}>
                                                {capitalizeText(item.Role.name)}
                                            </Card.Text>
                                            <Card.Title className={styles.title}>Senioridade</Card.Title>
                                            <Card.Text className={styles.text}>
                                                {capitalizeText(item.seniority)}
                                            </Card.Text>
                                            <Card.Title className={styles.title}>Principais Skills</Card.Title>
                                            <Card.Text className={styles.text}>
                                                {item.ProfileSkill.map((item: any) => {
                                                    return item.skill.name.toUpperCase()
                                                }).join(' | ')}
                                            </Card.Text>
                                            <Link to={"/schedule"} className={styles.button}>Agendar mentoria</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row></>
            )}
        </section >
    )
}