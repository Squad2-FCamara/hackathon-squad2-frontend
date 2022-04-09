import styles from 'styles.module.scss'

export function MainProfile() {
    return (
        <section className={styles.cardColumn}>
            <div className={styles.card1}>
                <p>Foto</p>
                <p>Email</p>
                <p>Localização??</p>
            </div>

            <div className={styles.card2}>
                <h5>Quem sou eu na FC</h5>
                <p>Cargo</p>
                <p>Senioridade</p>
            </div>
        </section >
    )
}