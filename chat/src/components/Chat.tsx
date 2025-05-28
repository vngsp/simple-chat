import { useUser } from "@/contexts/UserContext";
import NameInput from "./NameInput";
import ChatInput from "./ChatInput";
import ChatMsgs from "./ChatMsgs";

const Chat = () => {
    const userCtx = useUser();

    if(!userCtx) return null;
    if(!userCtx.user) return <NameInput/>;

    return (
        <div className="border border-gray-300 rounded-md">
            <div className="h-96 overflow-y-scroll scrollbar-none">
                <ChatMsgs/>
            </div>
            <div className="border-t border-gray-300 p-3">
                <ChatInput name={userCtx.user}/>
            </div>
            <div className="border-t border-gray-300 p-3">
                <ChatInput name={'bot'}/>
            </div>
        </div>
    )
}

export default Chat;