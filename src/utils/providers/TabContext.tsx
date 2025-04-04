import { createContext, useContext, useState, ReactNode } from 'react'
import { TabType } from '@/utils/types/tab.ts'

interface TabContextType {
    activeTab: TabType
    setActiveTab: (tab: TabType) => void
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export const TabProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState<TabType>('shop')

    return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>
}

export const useTab = (): TabContextType => {
    const context = useContext(TabContext)
    if (!context) throw new Error('useTab must be used within TabProvider')
    return context
}
