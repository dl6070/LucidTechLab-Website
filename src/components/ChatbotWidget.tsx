import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { openai } from '../lib/openai';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const SYSTEM_PROMPT = `You are an AI assistant for Lucid Tech LLC, a company that specializes in practical AI automation solutions for service-based businesses like plumbers, builders, HVAC technicians, and painters. Your role is to:

1. Help potential clients understand how AI automation can benefit their specific service business
2. Explain Lucid Tech's services and capabilities
3. Answer questions about pricing, implementation, and integration
4. Guide users to the contact form for detailed inquiries
5. Maintain a professional, helpful, and knowledgeable tone

Keep responses concise but informative. If you don't know something specific, guide the user to contact the sales team.`;

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! How can Lucid Tech help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Store message in Supabase
      const { error: supabaseError } = await supabase
        .from('messages')
        .insert([
          {
            content: userMessage.content,
            sender: userMessage.sender,
          },
        ]);

      if (supabaseError) throw supabaseError;

      // Get OpenAI response
      const chatHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...chatHistory,
          { role: "user", content: userMessage.content }
        ],
        temperature: 0.7,
        max_tokens: 200
      });

      const botResponse = completion.choices[0]?.message?.content;

      if (botResponse) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);

        // Store bot response in Supabase
        await supabase
          .from('messages')
          .insert([
            {
              content: botResponse,
              sender: 'bot',
            },
          ]);
      }
    } catch (error) {
      console.error('Error in chat:', error);
      toast.error('Sorry, there was an error processing your message');
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our team directly.",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      ) : (
        <div className="chatbot-widget dark:bg-gray-900">
          <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Lucid Tech Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 h-80 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === 'user' ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div
                  className={`p-3 rounded-lg shadow max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-orange-500 text-white ml-auto'
                      : 'bg-white dark:bg-gray-700 dark:text-white'
                  }`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex space-x-2 justify-center p-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500
                         dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;