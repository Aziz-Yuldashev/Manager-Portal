import { useState } from 'react'
import { useApi } from '@/utils/services'
import { Order } from '@/utils/types/order.types'
import settingsIcon from '@/assets/images/settings.svg'
import searchIcon from '@/assets/images/search.svg'
import styles from './index.module.css'

export default function Shop() {
    const { data: orders } = useApi<Order[]>('/data/orders.json')
    const [searchValue, setSearchValue] = useState('')
    const [hoveredOrderId, setHoveredOrderId] = useState<string | null>(null)

    const filteredOrders = orders?.filter(
        (order) =>
            order.id.startsWith(searchValue) ||
            order.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

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
                    <input
                        onChange={onChange}
                        className={styles.shop__searchInput}
                        placeholder="..."
                    />
                </div>
                {filteredOrders?.length ? (
                    filteredOrders.map((order) => (
                        <div
                            key={order.id}
                            className={styles.shop__order}
                            onMouseEnter={() => setHoveredOrderId(order.id)}
                            onMouseLeave={() => setHoveredOrderId(null)}
                        >
                            <p className={styles.shop__product}>{order.title}</p>
                            <span className={styles.shop__badge}>• {order.status}</span>

                            {hoveredOrderId === order.id && (
                                <div className={styles.shop__tooltip}>
                                    <p>
                                        <strong>Заказ №:</strong> {order.id}
                                    </p>
                                    <p>
                                        <strong>Товар:</strong> {order.title}
                                    </p>
                                    <p>
                                        <strong>Описание:</strong> {order.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className={styles.shop__textLight}>Нет результатов</p>
                )}
            </div>
        </div>
    )
}
