// components/SalaList.tsx
import React from 'react';
import { StatusDot } from './ui/status-dot';
import AutomaticModeButton from './change-mode-button';
import { Sala } from '../api/sala';

interface SalaListProps {
  pavilhao: string;
  salas: Sala[];
}

export const SalaList: React.FC<SalaListProps> = ({ pavilhao, salas }) => {
  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-bold mb-4">{pavilhao} - Salas</h2>
      {salas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {salas.map((sala) => (
            <div key={sala.id} className="p-4 border rounded-lg shadow">
              <div className="flex flex-row">
                <h3 className="text-lg font-semibold"> Sala {sala.nome} </h3>
                <StatusDot color={sala.presenca ? 'green' : 'red'} />
              </div>
              <p>Andar: {sala.andar}</p>
              <p>Temperatura: {sala.temperatura ? `${sala.temperatura}°C` : 'Sem dados'}</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Exibir detalhes
                </button>
                <AutomaticModeButton salaId={sala.id} currentMode={sala.modo_automatico}/>
            </div>
          ))}
        </div>
        
      ) : (
        <p>Não há salas disponíveis neste pavilhão.</p>
      )}
    </div>
  );
};
