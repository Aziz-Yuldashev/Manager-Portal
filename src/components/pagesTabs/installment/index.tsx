import styles from '../index.module.css'

export default function Installment() {
    return (
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <img
                    src="https://www.svgrepo.com/show/282720/deposit.svg"
                    alt="Рассрочка"
                    className={styles.icon}
                />
                <h2 className={styles.title}>Вы находитесь во вкладке: Рассрочка</h2>
            </div>
            <p className={styles.subtitle}>Здесь будет контент рассрочки 🛒</p>
        </div>
    )
}
