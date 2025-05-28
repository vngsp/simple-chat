import { useChat } from "@/contexts/ChatContext";
import { useState } from "react";

type Props = {
    name: string;
}
const ChatInput = ({name}: Props) => {
    const chatCtx = useChat();
    const [textInput, setTextInput] = useState('');

    const handleKeyUpAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code.toLocaleLowerCase() === 'enter') {
            if(textInput.trim() !== '') {
                chatCtx?.addMsg(name, textInput.trim());
                setTextInput('');
            }
        }
    }

    return (
        <input
            type="text"
            placeholder={`${name} place a message`}
            className="flex-1 px-2 py-1 outline-none bg-gray/50"
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
        />
    )
}

export default ChatInput;