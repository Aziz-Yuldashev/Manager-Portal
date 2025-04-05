import { useTab } from '@/utils/providers/TabContext'
import Header from '@/components/layout/header/index'
import Sidebar from '@/components/layout/sidebar'
import SidebarMenu from '@/components/layout/sidebarMenu'
import Shop from '@/components/pagesTabs/shop/index'
import Bills from '@/components/pagesTabs/bills/index'
import Credit from '@/components/pagesTabs/credit/index'
import Deposit from '@/components/pagesTabs/deposit/index'
import Installment from '@/components/pagesTabs/installment/index'
import Messages from '@/components/pagesTabs/messages/index'

const TABS = {
    shop: Shop,
    bills: Bills,
    deposit: Deposit,
    credit: Credit,
    installment: Installment,
    messages: Messages,
}

export default function Main() {
    const { activeTab } = useTab()
    const ActiveComponent = TABS[activeTab] ?? null

    return (
        <div>
            <Header />
            <Sidebar />
            <div style={{ display: 'flex', gap: '40px' }}>
                <SidebarMenu />
                {ActiveComponent && <ActiveComponent />}
            </div>
        </div>
    )
}
