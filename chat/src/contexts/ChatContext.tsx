import { ChatReducer } from "@/reducers/ChatReducer";
import { Msg } from "@/types/Msg";
import { createContext, ReactNode, useContext, useReducer } from "react";

type ChatContextType = {
    msgs: Msg[];
    addMsg: (user: string, text: string) => void;
}

export const ChatContext = createContext<ChatContextType | null>(null);

type Props = {children: ReactNode};

export const ChatProvider = ({children}: Props) => {
    const [msgs, dispatch] = useReducer(ChatReducer, []);

    const addMsg = (user: string, text: string) => {
        dispatch({
            type: 'add',
            payload: { user, text } 
        })
    }
    return (
        <ChatContext.Provider value={{ msgs, addMsg }}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext)