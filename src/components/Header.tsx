import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap size={32} />
          <h1 className="text-2xl font-bold">Dublinia Academy Patraix</h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:655179601" className="hover:text-blue-200 transition-colors">
            📞 655 179 601
          </a>
        </div>
      </div>
    </header>
  );
}