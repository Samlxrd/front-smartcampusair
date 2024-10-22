interface FilterMenuProps {
  pavilhoes: string[];
  selectedPavilhao: string;
  onPavilhaoChange: (pavilhao: string) => void;
}

export function FilterMenu({ pavilhoes, selectedPavilhao, onPavilhaoChange }: FilterMenuProps) {
  return (
    <div className="w-1/4 bg-gray-100 h-full p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Filtrar Pavilhões</h2>
      <ul>
        {pavilhoes.map((pavilhao) => (
          <li key={pavilhao}>
            <button
              className={`w-full text-left p-2 mb-2 ${selectedPavilhao === pavilhao ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => onPavilhaoChange(pavilhao)}
            >
              {pavilhao}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
