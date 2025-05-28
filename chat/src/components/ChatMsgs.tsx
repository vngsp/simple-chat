import { useChat } from "@/contexts/ChatContext";
import { useUser } from "@/contexts/UserContext";

const ChatMsgs = () => {
    const chatCtx = useChat();
    const userCtx = useUser();

    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.msgs.map(msg => (
                <div 
                    key={msg.id}
                    className={`border border-white/20 rounded-md p-2 m-8 text-sm
                        ${msg.user === userCtx?.user ? 
                            'self-end bg-white/20':
                            'self-start bg-white/10'
                        }    
                    `}
                >
                    <div className="font-bold">{msg.user}</div>
                    <p>{msg.text}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatMsgs;