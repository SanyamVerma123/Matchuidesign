import { ThumbsUp, ThumbsDown, Copy, RotateCcw, Volume2 } from 'lucide-react';
import { Button } from './ui/button';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string | React.ReactNode;
  label?: string;
  avatar?: string;
}

export function ChatMessage({ role, content, label, avatar }: ChatMessageProps) {
  return (
    <div className="py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            {role === 'user' ? (
              avatar ? (
                <img
                  src={avatar}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
                  U
                </div>
              )
            ) : (
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-medium">
                AI
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            {label && (
              <div className="text-xs text-gray-500 mb-2">{label}</div>
            )}
            <div className="text-gray-800 leading-relaxed">{content}</div>
            {role === 'assistant' && (
              <div className="flex gap-2 mt-4">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          {role === 'assistant' && (
            <div className="flex-shrink-0">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}