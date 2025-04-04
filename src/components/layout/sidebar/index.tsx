// Sidebar.tsx
import { useTab } from '@/utils/providers/TabContext'
import { TabType } from '@/utils/types/tab.ts'
import styled from './index.module.css'

const TABS: { label: string; key: TabType }[] = [
    { label: 'Магазин', key: 'shop' },
    { label: 'Счета', key: 'bills' },
    { label: 'Депозиты', key: 'deposit' },
    { label: 'Red и Kredit', key: 'credit' },
    { label: 'Рассрочка', key: 'installment' },
    { label: 'Сообщения', key: 'messages' },
]

export default function Sidebar() {
    const { activeTab, setActiveTab } = useTab()

    return (
        <nav className={styled.nav}>
            {TABS.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`${styled.nav__tabButton} ${
                        activeTab === tab.key ? styled.nav__active : ''
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    )
}
