import { Plus, Menu, Settings, ChevronDown, Send, Brain, Moon, Sun, User, LogOut, Search, Mic } from 'lucide-react';
import { Button } from './components/ui/button';
import { ConversationItem } from './components/ConversationItem';
import { ChatMessage } from './components/ChatMessage';
import { useState } from 'react';
import { Switch } from './components/ui/switch';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const conversations = [
    { title: "Create Html Game Environment...", active: false },
    { title: "Apply To Leave For Emergency", active: false },
    { title: "What Is UX Design?", active: false },
    { title: "Create POS System", active: false },
    { title: "What Is UX Audit?", active: false },
    { title: "Create Chatbot GPT...", active: true },
    { title: "How Chat GPT Work?", active: false },
  ];

  const oldConversations = [
    { title: "Crypto Lending App Name", active: false },
    { title: "Operator Grammar Types", active: false },
    { title: "Mini Stories For Story CRV", active: false },
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOldConversations = oldConversations.filter(conv =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`h-screen flex p-2 md:p-6 gap-2 md:gap-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {sidebarOpen && (
        <div className={`fixed md:relative inset-y-0 left-0 z-50 w-80 md:rounded-3xl flex flex-col shadow-2xl m-2 md:m-0 rounded-2xl backdrop-blur-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95 border border-gray-200'}`}>
          {/* Header */}
          <div className={`p-4 ${isDarkMode ? 'border-b border-gray-700/50' : 'border-b border-gray-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <h1 className={`text-sm font-bold tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                CHAT A.I+
              </h1>
              <Button
                variant="outline"
                size="icon"
                className={`h-9 w-9 rounded-full border-0 transition-all duration-200 hover:scale-110 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
            <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full h-9 text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <Plus className="h-4 w-4 mr-1" />
              New chat
            </Button>
          </div>

          {/* Search Bar */}
          <div className="px-4 pt-4">
            <div className={`flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
              <Search className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 bg-transparent border-none outline-none text-sm ${isDarkMode ? 'text-gray-200 placeholder:text-gray-500' : 'text-gray-700 placeholder:text-gray-400'}`}
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
            <div className="flex items-center justify-between mb-3 px-3">
              <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your conversations</span>
            </div>

            <div className="space-y-1 mb-6">
              {filteredConversations.map((conv, index) => (
                <ConversationItem 
                  key={index}
                  title={conv.title} 
                  isActive={conv.active}
                  isDarkMode={isDarkMode}
                  searchQuery={searchQuery}
                />
              ))}
            </div>

            {filteredOldConversations.length > 0 && (
              <>
                <div className="px-3 py-2">
                  <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last 7 Days</span>
                </div>

                <div className="space-y-1 mt-3">
                  {filteredOldConversations.map((conv, index) => (
                    <ConversationItem 
                      key={index}
                      title={conv.title}
                      isDarkMode={isDarkMode}
                      searchQuery={searchQuery}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className={`p-4 ${isDarkMode ? 'border-t border-gray-700/50' : 'border-t border-gray-200'}`}>
            {/* Profile Section */}
            <div className="mt-auto">
              <button 
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'}`}
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="Profile"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  {/* Online Status Indicator */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800 animate-pulse"></div>
                </div>
                <div className="flex-1 text-left">
                  <div className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>John Doe</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>john@example.com</div>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${profileMenuOpen ? 'rotate-180' : ''} ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
              
              {/* Profile Dropdown Menu */}
              {profileMenuOpen && (
                <div className={`mt-2 mb-2 rounded-xl overflow-hidden backdrop-blur-xl transition-all duration-300 animate-in slide-in-from-bottom-2 ${isDarkMode ? 'bg-gray-700/80' : 'bg-gray-50/80'}`}>
                  <button className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 hover:scale-[1.02] ${isDarkMode ? 'hover:bg-gray-600/50 text-gray-200' : 'hover:bg-gray-200 text-gray-700'}`}>
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </button>
                  <button className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 hover:scale-[1.02] ${isDarkMode ? 'hover:bg-gray-600/50 text-gray-200' : 'hover:bg-gray-200 text-gray-700'}`}>
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                  <div className={`flex items-center justify-between px-4 py-3 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    <div className="flex items-center gap-3">
                      {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                      <span>Dark Mode</span>
                    </div>
                    <Switch
                      checked={isDarkMode}
                      onCheckedChange={setIsDarkMode}
                    />
                  </div>
                  <button className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 hover:scale-[1.02] ${isDarkMode ? 'hover:bg-gray-600/50 text-red-400' : 'hover:bg-gray-200 text-red-600'}`}>
                    <LogOut className="h-4 w-4" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col rounded-3xl overflow-hidden relative">
        {/* Top Bar with Menu and Logo */}
        <div className={`absolute top-0 left-0 right-0 z-40 flex items-center justify-center px-6 py-4 backdrop-blur-xl ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}>
          {/* Menu Button - Left Side */}
          {!sidebarOpen && (
            <div className="absolute left-6">
              <Button
                variant="outline"
                size="icon"
                className={`h-10 w-10 rounded-full border-0 shadow-lg transition-all duration-200 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          )}
          
          {/* Centered Logo with Epic Animations */}
          <div className="relative flex items-center justify-center">
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 blur-2xl opacity-30">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Single Rotating Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            </div>
            
            {/* Main Logo Text */}
            <h2 className="relative text-xl md:text-2xl font-black tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] drop-shadow-lg">
              CHAT A.I+
            </h2>
            
            {/* Minimal Sparkle */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto pb-32 pt-20 custom-scrollbar">
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
            isTyping={isTyping}
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
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="py-3 md:py-4 px-3 md:px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs md:text-sm font-medium">
                      AI
                    </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                    <div className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`} style={{ animationDelay: '0ms' }}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`} style={{ animationDelay: '150ms' }}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`} style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area - Fixed at Bottom */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-6 pointer-events-none ${isDarkMode ? 'bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent' : 'bg-gradient-to-t from-white via-white/95 to-transparent'}`}>
          <div className="max-w-4xl mx-auto pointer-events-auto px-2 md:px-0">
            <div className={`flex items-center gap-2 md:gap-3 rounded-full px-3 md:px-5 py-2.5 md:py-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-indigo-500/20 ${isDarkMode ? 'bg-gray-800/95 border border-gray-700/50' : 'bg-white/95 border border-gray-200/50'}`}>
              {/* Brain Icon with Voice Recording Animation */}
              <div className="relative">
                <Brain 
                  className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 transition-all duration-300 ${isRecording ? 'text-red-500 animate-pulse' : 'text-indigo-600'}`}
                />
                {isRecording && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-red-500/30 animate-pulse"></div>
                  </>
                )}
              </div>
              
              <input
                type="text"
                placeholder="What is your need..."
                className={`flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
              />
              
              {/* Voice Input Button */}
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${isRecording ? 'bg-red-500/20' : isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <Mic className={`h-4 w-4 ${isRecording ? 'text-red-500' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              
              <Button
                size="icon"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 flex-shrink-0 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50"
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