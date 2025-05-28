import { createContext, ReactNode, useContext, useState } from "react";

type UserContextType = {
    user: string;
    setUser: (username: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

type Props = { children: ReactNode };
export const UserProvider = ({children}: Props) => {
    const [user, setUser] = useState('');
    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);