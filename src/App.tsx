import { Plus, Menu, Settings, ChevronDown, Send, Brain, Moon, Sun } from 'lucide-react';
import { Button } from './components/ui/button';
import { ConversationItem } from './components/ConversationItem';
import { ChatMessage } from './components/ChatMessage';
import { Textarea } from './components/ui/textarea';
import { useState } from 'react';
import { Switch } from './components/ui/switch';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`h-screen flex p-2 md:p-6 gap-2 md:gap-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className={`fixed md:relative inset-y-0 left-0 z-50 w-80 md:rounded-3xl flex flex-col shadow-xl m-2 md:m-0 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
          {/* Header */}
          <div className={`p-4 ${isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
            <h1 className={`text-sm font-semibold tracking-wider mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              CHAT A.I+
            </h1>
            <div className="flex gap-2">
              <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-9 text-sm">
                <Plus className="h-4 w-4 mr-1" />
                New chat
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`h-9 w-9 rounded-full border-0 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <div className="flex items-center justify-between mb-3 px-3">
              <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your conversations</span>
            </div>

            <div className="space-y-1 mb-6">
              <ConversationItem title="Create Html Game Environment..." isDarkMode={isDarkMode} />
              <ConversationItem title="Apply To Leave For Emergency" isDarkMode={isDarkMode} />
              <ConversationItem title="What Is UX Design?" isDarkMode={isDarkMode} />
              <ConversationItem title="Create POS System" isDarkMode={isDarkMode} />
              <ConversationItem title="What Is UX Audit?" isDarkMode={isDarkMode} />
              <ConversationItem title="Create Chatbot GPT..." isActive isDarkMode={isDarkMode} />
              <ConversationItem title="How Chat GPT Work?" isDarkMode={isDarkMode} />
            </div>

            <div className="px-3 py-2">
              <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last 7 Days</span>
            </div>

            <div className="space-y-1 mt-3">
              <ConversationItem title="Crypto Lending App Name" isDarkMode={isDarkMode} />
              <ConversationItem title="Operator Grammar Types" isDarkMode={isDarkMode} />
              <ConversationItem title="Mini Stories For Story CRV" isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* Footer */}
          <div className={`p-4 ${isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'}`}>
            {/* Settings with Theme Toggle */}
            <div className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors mb-3 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-3">
                <div className={`h-9 w-9 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                  <Settings className={`h-4 w-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                </div>
                <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Settings</span>
              </div>
              <div className="flex items-center gap-2">
                {isDarkMode ? (
                  <Moon className="h-4 w-4 text-gray-400" />
                ) : (
                  <Sun className="h-4 w-4 text-gray-500" />
                )}
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
              </div>
            </div>
            
            <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isDarkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="User"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <div className="flex-1 text-left">
                <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Andrew Nielsen</div>
                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>andrew@email.com</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col rounded-3xl overflow-hidden relative">
        {/* Menu button when sidebar is closed */}
        {!isSidebarOpen && (
          <div className="absolute top-6 left-6 z-40">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-white text-gray-800 hover:bg-gray-100 border-0 shadow-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto pb-32">
          {/* App Name Banner */}
          <div className="pt-6 md:pt-8 pb-4 text-center">
            <h2 className={`text-xl md:text-2xl font-bold tracking-wide ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              CHAT A.I+
            </h2>
          </div>
          
          <ChatMessage
            role="user"
            content="Create a chatbot gpt using python language what will be step for that"
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            isDarkMode={isDarkMode}
          />
          
          <ChatMessage
            role="assistant"
            label="CHAT A.I + O"
            isDarkMode={isDarkMode}
            content={
              <div className="space-y-4">
                <p>
                  Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:
                </p>
                <ol className="space-y-3 ml-4">
                  <li className="pl-2">
                    <span className="font-medium">1. Install the required libraries:</span> You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip:
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">2. Load the pre-trained model:</span> GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model from Hugging Face, which is a powerful and relatively recent model.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">3. Create a chatbot logic:</span> You'll need to create a loop that takes user input generates a response using the GPT model, and outputs it to the user. Here's an example loop that uses the input() function to get user input and the (gpt) function to generate a response. This loop will keep running until the user types "quit" and the conversation is interrupted.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">4. Add some personality to the chatbot:</span> While GPT can generate text it doesn't have any inherent personality or style. You can make your chatbot more interesting by adding custom prompts or responses that reflect your desired personality. You can then modify the chatbot loop to use these prompts and responses when appropriate. This will make the chatbot seem more human-like and engaging.
                  </li>
                </ol>
                <p>
                  These are just the basic steps to get started with a GPT chatbot in Python. Depending on your requirements, you may need to add more features or complexity to the chatbot. Good luck!
                </p>
              </div>
            }
          />

          <ChatMessage
            role="user"
            content="What is use of that chatbot ?"
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            isDarkMode={isDarkMode}
          />
          
          <ChatMessage
            role="assistant"
            label="CHAT A.I + O"
            isDarkMode={isDarkMode}
            content={
              <div className="space-y-3">
                <p>Chatbots can be used for a wide range of purposes, including:</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Customer service chatbots can handle frequently asked questions, provide basic support, and help customers
                </p>
              </div>
            }
          />
        </div>

        {/* Input Area - Fixed at Bottom */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-6 pointer-events-none ${isDarkMode ? 'bg-gradient-to-t from-gray-900 via-gray-900 to-transparent' : 'bg-gradient-to-t from-white via-white to-transparent'}`}>
          <div className="max-w-4xl mx-auto pointer-events-auto px-2 md:px-0">
            <div className={`flex items-center gap-2 md:gap-3 rounded-full px-3 md:px-5 py-2.5 md:py-3 shadow-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
              <Brain className="h-4 w-4 md:h-5 md:w-5 text-indigo-600 flex-shrink-0" />
              <input
                type="text"
                placeholder="What is your need..."
                className={`flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
              />
              <Button
                size="icon"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-indigo-600 hover:bg-indigo-700 flex-shrink-0"
              >
                <Send className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}