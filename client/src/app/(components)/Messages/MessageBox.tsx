"use client";

import { useState, useEffect } from 'react';
import { fetchConversations, fetchMessages } from '@/state/message';
import { MessageCircle, X } from 'lucide-react'; // Assurez-vous que le composant MessageCircle est importé

interface MessageBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Conversation {
  id: string;
  title: string;
}

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
}

const MessageBox = ({ isOpen, onClose }: MessageBoxProps) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetchConversations().then(setConversations);
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages(selectedConversation.id).then(setMessages);
    }
  }, [selectedConversation]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg border border-gray-300 rounded-lg w-80">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Messages</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X />
        </button>
      </div>
      <div className="flex mt-2">
        <div className="w-1/3 border-r border-gray-300 pr-2">
          <h3 className="font-semibold">Conversations</h3>
          <ul className="list-none p-0">
            {conversations.map(convo => (
              <li
                key={convo.id}
                onClick={() => setSelectedConversation(convo)}
                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
              >
                {convo.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 pl-2">
          <h3 className="font-semibold">Messages</h3>
          <div className="max-h-60 overflow-y-auto">
            {messages.length === 0 ? (
              <p>No messages</p>
            ) : (
              messages.map(msg => (
                <div key={msg.id} className="mb-2 p-2 bg-gray-100 rounded">
                  <p className="text-sm text-gray-600">{msg.sender}:</p>
                  <p>{msg.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;