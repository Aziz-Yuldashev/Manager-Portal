import styles from '../index.module.css'

export default function Bills() {
    return (
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <img
                    src="https://www.svgrepo.com/show/144404/bill.svg"
                    alt="Счета"
                    className={styles.icon}
                />
                <h2 className={styles.title}>Вы находитесь во вкладке: Счета</h2>
            </div>
            <p className={styles.subtitle}>Здесь будет контент счетов 🧾</p>
        </div>
    )
}
