import { useState } from 'react'
import styles from './index.module.css'
import settingsIcon from '@/assets/images/settings.svg'

export default function Header() {
    const [activeLang, setActiveLang] = useState('Рус')
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <div className={styles.header__left_box}>
                    <h3 className={styles.header__left_title}>
                        Алтынбике <br /> Абилькаримова Алпысбаевна
                    </h3>
                    <div className={styles.header__left_box}>
                        <button
                            className={`${styles.header__left_kaz} ${
                                activeLang === 'Қаз' ? styles.active : ''
                            }`}
                            onClick={() => setActiveLang('Қаз')}
                        >
                            Қаз
                        </button>
                        <button
                            className={`${styles.header__left_rus} ${
                                activeLang === 'Рус' ? styles.active : ''
                            }`}
                            onClick={() => setActiveLang('Рус')}
                        >
                            Рус
                        </button>
                    </div>
                </div>
                <div className={styles.header__info}>
                    <span className={styles.header__info_item}>18.04.1994, 30 лет </span>
                    <span className={styles.header__info_item}>Алматы</span>
                    <span className={styles.header__status}>
                        <span className={styles.header__status_icon} />
                        Неактивен
                    </span>
                </div>
            </div>
            <div className={styles.header__right}>
                <a className={styles.header__right_settingsLink}>
                    <img src={settingsIcon} alt="settings" className={styles.settingsIcon} />
                    Настройки
                </a>
                <button className={styles.header__right_button}>Выбрать тематику T</button>
            </div>
        </header>
    )
}
