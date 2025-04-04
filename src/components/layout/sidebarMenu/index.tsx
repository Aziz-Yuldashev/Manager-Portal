import styles from './index.module.css'
import arrowDown from '@/assets/images/arrowDown.svg'

export default function SidebarMenu() {
    return (
        <aside className={styles.navSidebar}>
            <h3 className={styles.navSidebar__company}>
                <span className={styles.navSidebar__companyText}>ИП LIVERPOOL</span>
                <img src={arrowDown} alt="arrow down" className={styles.arrowIcon} />
            </h3>
            <ul className={styles.navSidebar__list}>
                <li className={`${styles.navSidebar__item} ${styles.navSidebar__active}`}>
                    Главная
                </li>
                <li className={styles.navSidebar__item}>Заказы</li>
                <li className={styles.navSidebar__item}>Моя Доставка</li>
                <li className={styles.navSidebar__item}>Товары</li>
            </ul>
        </aside>
    )
}
