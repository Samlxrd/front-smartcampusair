// components/FilterMenu.tsx
import React from 'react';
import { Sala } from '../api/sala';

interface Pavilhao {
  pavilhao: string;
  salas: Sala[];
}

interface FilterMenuProps {
  pavilhoes: Pavilhao[];
  onSelectPavilhao: (pavilhao: Pavilhao) => void;
}

export const FilterMenu: React.FC<FilterMenuProps> = ({ pavilhoes, onSelectPavilhao }) => {
  return (
    <div className="w-1/4 bg-gray-200 h-full p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Pavilhões</h2>
      <ul>
        {pavilhoes.map((pavilhao) => (
          <li 
            className="bg-gray-100 my-4 rounded-lg" 
            key={pavilhao.pavilhao}>
            <button
              className="w-full text-left p-3 mb-2 flex rounded-lg hover:bg-gray-50"
              onClick={() => onSelectPavilhao(pavilhao)}>
              {pavilhao.pavilhao}
            </button>
          
          </li>
        ))}
      </ul>
    </div>
  );
};