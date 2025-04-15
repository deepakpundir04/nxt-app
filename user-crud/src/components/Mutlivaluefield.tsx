'use client';

import { useState, useRef } from 'react';
import { X } from 'lucide-react';

export default function TagInput({ tags, setTags,name='interest' }: { tags: string[]; setTags: (tags: string[]) => void ,name?:string }) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && input.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput('');
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <>
    <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg">
      {tags.map((tag, index) => (
        <div key={index} className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
          {tag}
          <button
            onClick={() => removeTag(index)}
            className="ml-1 hover:text-red-500"
            aria-label="Remove tag"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTag}
        placeholder="Type and press Enter"
        className="flex-1 outline-none min-w-[120px] text-sm"
      />
    </div>
    <input type="hidden" name={name} value={JSON.stringify(tags)} />
    </>
  );
}
