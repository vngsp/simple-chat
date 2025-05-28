import { useUser } from "@/contexts/UserContext";
import { useState } from "react";

const NameInput = () => {
    const userCtx = useUser();
    const [name, setName] = useState('');

    const handleKeyUpAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code.toLocaleLowerCase() === 'enter') {
            if(name.trim() !== '' && name !== 'bot') {
                userCtx?.setUser(name.trim());
            }
        }
    }

    return (
        <div className="mt-14">
            <p className="text-xl mb-4 text-indigo-300">What's your name?</p>
            <div className="flex gap-3 items-center text-lg">
                <input
                    type="text" 
                    className="flex-1 border border-gray-300 rounded-md px-2 py-1 outline-none bg-gray/50"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                 />
            </div>
        </div>
    )
}
export default NameInput;