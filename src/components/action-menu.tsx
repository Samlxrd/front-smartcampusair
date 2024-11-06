// components/ActionMenu.tsx
import React from 'react';

interface ActionMenuProps {
  selectedPavilhao: string | null;
  onAddPavilhao: () => void;
  onEditPavilhao: () => void;
  onDeletePavilhao: () => void;
  onLogout: () => void;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({
  selectedPavilhao,
  onAddPavilhao,
  onEditPavilhao,
  onDeletePavilhao,
  onLogout
}) => {
  return (
    <div className="w-1/6 bg-gray-100 h-full p-4 overflow-y-auto absolute right-0">
      <ul>
        <li className="mb-2">
          <button className="w-full bg-blue-500 rounded-lg text-white p-2" onClick={onLogout}>
            Logout
          </button>
        </li>
        <li className="mb-2">
          <button className="w-full bg-gray-100 p-2 hover:underline" onClick={onAddPavilhao}>
            Adicionar Pavilhão
          </button>
        </li>
        {selectedPavilhao && (
          <>
            <li className="mb-2">
              <button className="w-full bg-gray-100 p-2 hover:underline" onClick={onEditPavilhao}>
                Editar Pavilhão
              </button>
            </li>
            <li className="mb-2">
              <button className="w-full bg-gray-100 p-2 hover:underline" onClick={onDeletePavilhao}>
                Excluir Pavilhão
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
