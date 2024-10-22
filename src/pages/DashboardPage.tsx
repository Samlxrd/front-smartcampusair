import { useState } from 'react';
import { FilterMenu } from '../components/filter-menu';
import { SalaList } from '../components/sala-list';

const mockData: Record<string, { id: number; nome: string; andar: number }[]> = {
  "pavilhão a": [
    { id: 1, nome: "16B", andar: 1 },
    { id: 2, nome: "17B", andar: 2 },
    { id: 3, nome: "18A", andar: 1 },
    { id: 4, nome: "19C", andar: 3 },
    { id: 5, nome: "20B", andar: 2 }
  ],
  "pavilhão b": [
    { id: 6, nome: "21A", andar: 1 },
    { id: 7, nome: "22B", andar: 2 },
    { id: 8, nome: "23C", andar: 3 },
    { id: 9, nome: "24A", andar: 1 },
    { id: 10, nome: "25B", andar: 2 }
  ],
  "pavilhão c": [
    { id: 11, nome: "26A", andar: 1 },
    { id: 12, nome: "27B", andar: 2 },
    { id: 13, nome: "28C", andar: 3 },
    { id: 14, nome: "29A", andar: 1 },
    { id: 15, nome: "30B", andar: 2 }
  ]
};

export function DashboardPage() {
  const [selectedPavilhao, setSelectedPavilhao] = useState('pavilhão a');

  const handlePavilhaoChange = (pavilhao: string) => {
    setSelectedPavilhao(pavilhao);
    console.log(selectedPavilhao);
  };

  return (
    <div className="flex h-screen">
      <FilterMenu
        pavilhoes={Object.keys(mockData)}
        selectedPavilhao={selectedPavilhao}
        onPavilhaoChange={handlePavilhaoChange}
      />
      <SalaList salas={mockData[selectedPavilhao]} />
    </div>
  );
}
