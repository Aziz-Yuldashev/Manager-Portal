import styles from '../index.module.css'

export default function Credit() {
    return (
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <img
                    src="https://www.svgrepo.com/show/42266/credit-card.svg"
                    alt="Кредит"
                    className={styles.icon}
                />
                <h2 className={styles.title}>Вы находитесь во вкладке: Кредит</h2>
            </div>
            <p className={styles.subtitle}>Здесь будет контент кредитов 💳</p>
        </div>
    )
}
