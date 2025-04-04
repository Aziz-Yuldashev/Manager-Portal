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

export default function Home() {
    const { activeTab } = useTab()

    const renderTab = () => {
        switch (activeTab) {
            case 'shop':
                return <Shop />
            case 'bills':
                return <Bills />
            case 'deposit':
                return <Deposit />
            case 'credit':
                return <Credit />
            case 'installment':
                return <Installment />
            case 'messages':
                return <Messages />
            default:
                return null
        }
    }
    return (
        <div>
            <Header />
            <Sidebar />
            <div style={{ display: 'flex', gap: '40px' }}>
                <SidebarMenu />
                {renderTab()}
            </div>
        </div>
    )
}
