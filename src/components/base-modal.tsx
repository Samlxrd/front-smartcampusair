import React, { useState, useEffect } from 'react';

interface BaseModalProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (nome?: string) => void;
  confirmLabel: string;
  cancelLabel?: string;
  mode: 'create' | 'edit' | 'delete';
  initialName?: string;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
  confirmLabel,
  cancelLabel = 'Cancelar',
  mode,
  initialName = '',
}) => {
  const [nome, setNome] = useState<string>(initialName);

  useEffect(() => {
    if (mode === 'edit') {
      setNome(initialName);
    }
  }, [initialName, mode]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {mode === 'edit' || mode === 'create' ? (
          <div>
            <label className="block mb-2 font-semibold" htmlFor="nome">
              Nome do Pavilhão
            </label>
            <input
              id="nome"
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome do pavilhão"
            />
          </div>
        ) : (
          <p className="mb-6">{description}</p>
        )}

        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            {cancelLabel}
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => onConfirm(nome)}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
