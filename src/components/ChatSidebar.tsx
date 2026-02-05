import { Plus, MessageSquare, Flame, FileText, Settings } from 'lucide-react';
import { Button } from './ui/button';

export function ChatSidebar() {
  const conversations = [
    { id: 1, title: 'Cleveris Html Game Environment...', icon: MessageSquare },
    { id: 2, title: 'Apply To Leave For Emergency', icon: MessageSquare },
    { id: 3, title: 'What Is Crypto Currency?', icon: MessageSquare },
    { id: 4, title: 'Creare POS System', icon: MessageSquare },
    { id: 5, title: 'What Is UX Audit?', icon: MessageSquare },
    { id: 6, title: 'Creare Chatbot GPT...', icon: MessageSquare, active: true },
    { id: 7, title: 'How Chat GPT Work?', icon: MessageSquare },
  ];

  const last7Days = [
    { id: 8, title: 'Crypto Landing App Name', icon: MessageSquare },
    { id: 9, title: 'Openator Grammar Types', icon: MessageSquare },
    { id: 10, title: 'Mini Ideas For Diary DPS', icon: MessageSquare },
  ];

  return (
    <div className="w-[280px] bg-[#f8f9fa] border-r border-gray-200 flex flex-col p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-4">CHAT A.I+</h1>
        <div className="flex gap-2">
          <Button className="flex-1 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full">
            <Plus className="w-4 h-4 mr-2" />
            New chat
          </Button>
          <Button className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full p-0">
            <Flame className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">Your conversations</span>
          <button className="text-sm text-[#6366f1] hover:underline">Clear All</button>
        </div>

        <div className="space-y-1 mb-6">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                conv.active
                  ? 'bg-white text-[#6366f1] shadow-sm'
                  : 'text-gray-700 hover:bg-white/50'
              }`}
            >
              <conv.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm truncate">{conv.title}</span>
            </button>
          ))}
        </div>

        <div className="text-xs text-gray-400 mb-2 px-3">Last 7 Days</div>
        <div className="space-y-1">
          {last7Days.map((conv) => (
            <button
              key={conv.id}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-gray-700 hover:bg-white/50 transition-colors"
            >
              <conv.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm truncate">{conv.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-gray-700 hover:bg-white/50 transition-colors">
          <Settings className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-gray-700 hover:bg-white/50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0" />
          <span className="text-sm font-medium">Andrew Nielsen</span>
        </button>
      </div>
    </div>
  );
}
