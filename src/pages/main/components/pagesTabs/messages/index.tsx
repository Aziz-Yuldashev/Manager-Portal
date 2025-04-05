import styles from '../index.module.css'

export default function Messages() {
    return (
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <img
                    src="https://www.svgrepo.com/show/1284/message.svg"
                    alt="Сообщения"
                    className={styles.icon}
                />
                <h2 className={styles.title}>Вы находитесь во вкладке: Сообщения</h2>
            </div>
            <p className={styles.subtitle}>Здесь будет контент сообщений 💬</p>
        </div>
    )
}
