import { StatusDot } from "./ui/status-dot";

interface Sala {
  id: number;
  nome: string;
  andar: number;
}

interface SalaListProps {
  salas: Sala[];
}

export function SalaList({ salas }: SalaListProps) {
  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-bold mb-4">Salas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {salas.map((sala) => (
          <div key={sala.id} className="p-4 border rounded-lg shadow">
            <div className="flex flex-row">
              <h3 className="text-lg font-semibold">Sala {sala.nome}</h3>
              <StatusDot color="green" />
            </div>
            <p>Andar: {sala.andar}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Exibir detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
