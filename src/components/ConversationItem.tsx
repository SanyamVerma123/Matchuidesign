import { Circle, Pencil, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface ConversationItemProps {
  title: string;
  isActive?: boolean;
  isDarkMode?: boolean;
  searchQuery?: string;
}

export function ConversationItem({ title, isActive, isDarkMode, searchQuery = '' }: ConversationItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark 
          key={index} 
          className={`${isDarkMode ? 'bg-yellow-500/30 text-yellow-300' : 'bg-yellow-200 text-yellow-900'} rounded px-0.5`}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group cursor-pointer hover:scale-[1.02] hover:shadow-md ${
        isActive
          ? isDarkMode 
            ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white shadow-md' 
            : 'bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-900 shadow-sm'
          : isDarkMode
          ? 'text-gray-300 hover:bg-gray-700/50'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        // Handle conversation selection
      }}
    >
      <Circle className={`h-4 w-4 flex-shrink-0 ${isActive ? 'fill-current' : ''}`} />
      <span className="text-sm truncate flex-1">
        {highlightText(title, searchQuery)}
      </span>
      {isHovered && (
        <div className="flex items-center gap-1 animate-in fade-in slide-in-from-right-2">
          <Button
            variant="ghost"
            size="icon"
            className={`h-6 w-6 transition-all duration-200 hover:scale-110 ${isDarkMode ? 'hover:bg-gray-600 text-blue-400' : 'hover:bg-gray-200 text-blue-600'}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Pencil className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`h-6 w-6 transition-all duration-200 hover:scale-110 ${isDarkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-200 text-red-600'}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      )}
    </div>
  );
}
