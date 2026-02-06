import { ThumbsUp, ThumbsDown, Copy, RotateCcw, Volume2 } from 'lucide-react';
import { Button } from './ui/button';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string | React.ReactNode;
  label?: string;
  avatar?: string;
  isDarkMode?: boolean;
}

export function ChatMessage({ role, content, label, avatar, isDarkMode }: ChatMessageProps) {
  return (
    <div className="py-3 md:py-4 px-3 md:px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-3 md:gap-4">
          <div className="flex-shrink-0">
            {role === 'user' ? (
              avatar ? (
                <img
                  src={avatar}
                  alt="User"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs md:text-sm font-medium">
                  U
                </div>
              )
            ) : (
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs md:text-sm font-medium">
                AI
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0 pr-1 md:pr-0">
            {label && (
              <div className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
            )}
            <div className={`leading-relaxed text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{content}</div>
            {role === 'assistant' && (
              <div className="flex gap-1 md:gap-2 mt-3 md:mt-4">
                <Button variant="ghost" size="icon" className={`h-7 w-7 md:h-8 md:w-8 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                  <ThumbsUp className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </Button>
                <Button variant="ghost" size="icon" className={`h-7 w-7 md:h-8 md:w-8 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                  <ThumbsDown className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </Button>
                <Button variant="ghost" size="icon" className={`h-7 w-7 md:h-8 md:w-8 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                  <Copy className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </Button>
                <Button variant="ghost" size="icon" className={`h-7 w-7 md:h-8 md:w-8 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                  <Volume2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </Button>
              </div>
            )}
          </div>
          {role === 'assistant' && (
            <div className="hidden">
              <Button variant="ghost" size="icon" className={`h-7 w-7 md:h-8 md:w-8 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}>
                <RotateCcw className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}