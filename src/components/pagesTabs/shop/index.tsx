import styles from './index.module.css'
import settingsIcon from '@/assets/images/settings.svg'
import searchIcon from '@/assets/images/search.svg'

export default function Shop() {
    return (
        <div className={styles.shop}>
            <div className={styles.shop__info}>
                <div className={styles.shop__card}>
                    <div className={styles.shop__cardHeader}>
                        <h4 className={styles.shop__cardTitle}>Магазин</h4>
                        <img src={settingsIcon} alt="настройки" />
                    </div>
                    <div className={styles.shop__infoLine}>
                        <p className={styles.shop__text}>ИП Liverpool</p>
                        <span className={styles.shop__status}>• Активен</span>
                    </div>
                    <div className={styles.shop__infoLine}>
                        <p className={styles.shop__text}>Касса</p>
                        <span className={styles.shop__status}>• Подключена</span>
                    </div>
                </div>

                <div className={styles.shop__card}>
                    <h4 className={styles.shop__cardTitle}>Показатели качества</h4>
                    <div className={styles.shop__ratingBlock}>
                        <div className={styles.shop__rating}>
                            <h4 className={styles.shop__ratingValue}>4.5</h4>
                            <span className={styles.shop__textLight}>144 оценок</span>
                        </div>
                        <div className={styles.shop__cancel}>
                            <h4 className={styles.shop__cancelValue}>4.2</h4>
                            <span className={styles.shop__textLight}>Доля отмен</span>
                        </div>
                    </div>
                </div>

                <div className={styles.shop__card}>
                    <h4 className={styles.shop__cardTitle}>Доставка</h4>
                    <p className={styles.shop__textLight}>Самовывоз</p>
                    <p className={styles.shop__textLight}>Моя доставка</p>
                    <p className={styles.shop__textLight}>Экспресс-доставка</p>
                </div>
            </div>

            <div className={styles.shop__orders}>
                <h3 className={styles.shop__ordersTitle}>Заказы</h3>
                <div className={styles.shop__search}>
                    <img src={searchIcon} alt="search" />
                    <input className={styles.shop__searchInput} placeholder="..." />
                </div>
                <div className={styles.shop__order}>
                    <p className={styles.shop__product}>
                        Advanti T02-C03 универсальный красный, черный
                    </p>
                    <span className={styles.shop__badge}>• Выдан</span>
                </div>
            </div>
        </div>
    )
}
