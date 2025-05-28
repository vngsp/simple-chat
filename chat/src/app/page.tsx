"use client"

import Chat from "@/components/Chat";
import { ChatProvider } from "@/contexts/ChatContext";
import { UserProvider } from "@/contexts/UserContext";

const Page = () => {
  return (
    <div className="container mx-auto max-w-lg px-2">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl font-bold text-indigo-300 my-2">Simple Chat</h1>

          <Chat/>
        </ChatProvider>
      </UserProvider>
    </div>
  )
}

export default Page;