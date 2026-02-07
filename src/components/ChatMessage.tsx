import { ThumbsUp, ThumbsDown, Copy, Volume2, Smile, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string | React.ReactNode;
  label?: string;
  avatar?: string;
  isDarkMode?: boolean;
  isTyping?: boolean;
  animate?: boolean;
  userBubbleColor?: string;
}

const reactions = ['👍', '❤️', '😊', '🎉', '🤔', '👏'];

export function ChatMessage({ 
  role, 
  content, 
  label, 
  avatar, 
  isDarkMode, 
  isTyping, 
  animate = false,
  userBubbleColor = 'from-indigo-500 via-purple-500 to-pink-500'
}: ChatMessageProps) {
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [displayedContent, setDisplayedContent] = useState('');
  const [isAnimating, setIsAnimating] = useState(animate && role === 'assistant');

  // Typewriter effect for AI responses
  useEffect(() => {
    if (animate && role === 'assistant' && typeof content === 'string') {
      setIsAnimating(true);
      let currentIndex = 0;
      const text = content;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedContent(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsAnimating(false);
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    } else if (typeof content === 'string') {
      setDisplayedContent(content);
    }
  }, [content, animate, role]);

  const handleCopy = () => {
    if (typeof content === 'string') {
      navigator.clipboard.writeText(content);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleReaction = (emoji: string) => {
    setSelectedReaction(emoji);
    setShowReactions(false);
  };

  return (
    <div className={`py-4 md:py-6 px-4 md:px-8 group animate-in fade-in slide-in-from-bottom-3 duration-500 ${
      role === 'assistant' ? 'bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent' : ''
    }`}>
      <div className="w-full">
        {/* Avatar + Name Bubble (Chat Input Style) */}
        <div className="mb-3">
          <div 
            className={`inline-flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-[1.02] ${
              role === 'user'
                ? `bg-gradient-to-r ${userBubbleColor}`
                : isDarkMode
                ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'
                : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400'
            }`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0 relative">
              {role === 'user' ? (
                avatar ? (
                  <img
                    src={avatar}
                    alt="User"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover ring-2 ring-white/40 shadow-md"
                  />
                ) : (
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold shadow-md ring-2 ring-white/40">
                    U
                  </div>
                )
              ) : (
                <div className="relative">
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold shadow-md ring-2 ring-white/40 ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}>
                    AI
                  </div>
                  {isAnimating && (
                    <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                  )}
                </div>
              )}
            </div>

            {/* Name */}
            <span className="text-white font-bold text-sm md:text-base drop-shadow-md">
              {role === 'user' ? 'You' : 'CHAT A.I+'}
            </span>
          </div>
        </div>

        {/* Message Content - Full Width (No Bubble) */}
        <div className={`w-full leading-relaxed text-sm md:text-base pl-0 pr-0 ${
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {typeof content === 'string' && animate && role === 'assistant' 
            ? displayedContent 
            : content
          }
          {isAnimating && <span className="inline-block w-0.5 h-5 bg-emerald-500 ml-1 animate-pulse"></span>}
        </div>

        {/* Action Buttons for Assistant Messages */}
        {role === 'assistant' && !isAnimating && (
          <div className="flex items-center gap-1 md:gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex gap-1 md:gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-green-400 hover:bg-green-400/10' 
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-red-400 hover:bg-red-400/10' 
                    : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleCopy}
                className={`h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 ${
                  copiedCode 
                    ? (isDarkMode ? 'text-green-400' : 'text-green-600')
                    : (isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400 hover:bg-blue-400/10' 
                      : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50')
                }`}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-purple-400 hover:bg-purple-400/10' 
                    : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Volume2 className="h-4 w-4" />
              </Button>
              
              {/* Regenerate Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-180 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-indigo-400 hover:bg-indigo-400/10' 
                    : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              
              {/* Reactions Button */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowReactions(!showReactions)}
                  className={`h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10' 
                      : 'text-gray-500 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  <Smile className="h-4 w-4" />
                </Button>
                
                {/* Reactions Popup */}
                {showReactions && (
                  <div className={`absolute bottom-full left-0 mb-2 flex gap-1 p-2 rounded-xl shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-2 ${
                    isDarkMode 
                      ? 'bg-gray-800/95 border border-gray-700' 
                      : 'bg-white/95 border border-gray-200'
                  }`}>
                    {reactions.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleReaction(emoji)}
                        className={`text-xl hover:scale-125 transition-transform duration-200 p-1.5 rounded-lg ${
                          isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Selected Reaction Display */}
            {selectedReaction && (
              <div className={`ml-2 px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 animate-in zoom-in ${
                isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
              }`}>
                <span>{selectedReaction}</span>
                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>1</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
