import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';



interface SidebarContextData {
    startSidebar: () => void;
    isActive: boolean;
    startHome: boolean;
}

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarContext = createContext({} as SidebarContextData);

export function CountdownProvider({ children }: SidebarProviderProps) {
    const [isActive, setIsActive] = useState(false);
    const [startHome] = useState(false);

    function startSidebar() {
        isActive(true);
      }

      return (
        <SidebarContext.Provider value={{
            startHome,
            isActive,
        }}>
            { children }
        </SidebarContext.Provider>
    )
};