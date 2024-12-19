"use client";

import { User2, Bot } from "lucide-react";
import { formatMessage } from "@/lib/format-message";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
    const width = isUser? 'max-w-[320px]' : 'max-w-[600px]'
  return (
    <div className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-4`}>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isUser ? 'bg-[#33101A]' : 'bg-gray-600'}`}>
        {isUser ? <User2 className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
      </div>
      <div className={`flex flex-col w-full ${width} leading-1.5 ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`p-4 ${isUser ? 'bg-[#33101A]' : 'bg-gray-700'} rounded-lg`}>
          <p 
            className="text-sm font-normal text-white"
            dangerouslySetInnerHTML={{ __html: formatMessage(message) }}
          />
        </div>
      </div>
    </div>
  );
}