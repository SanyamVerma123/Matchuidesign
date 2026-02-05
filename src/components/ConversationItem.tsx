import { Circle, Pencil, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface ConversationItemProps {
  title: string;
  isActive?: boolean;
  isDarkMode?: boolean;
}

export function ConversationItem({ title, isActive, isDarkMode }: ConversationItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors group cursor-pointer ${
        isActive
          ? isDarkMode 
            ? 'bg-gray-700 text-white' 
            : 'bg-gray-100 text-gray-900'
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
      <Circle className="h-4 w-4 flex-shrink-0" />
      <span className="text-sm truncate flex-1">{title}</span>
      {isHovered && (
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className={`h-6 w-6 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Pencil className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`h-6 w-6 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
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