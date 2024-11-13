import { useQuery } from "@tanstack/react-query";

export interface Sala {
  id: number;
  nome: string;
  andar: number;
  presenca: boolean;
  temperatura: number;
  modo_automatico: boolean;
}

export interface Pavilhao {
  pavilhao: string;
  salas: Sala[];
}

const API_URL = 'http://localhost:3333/salas';

// Sincronização da interface com os dados do servidor
// a cada "refetchInterval" milissegundos.
export const useSalas = () => {
  return useQuery<Pavilhao[]>({
    queryKey: ['salas'],
    queryFn: fetchSalas,
    staleTime: 60000,
    refetchInterval: 5000,
  });
};

// Função que busca os pavilhões e as informações de suas salas.
export const fetchSalas = async (): Promise<Pavilhao[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar pavilhões');
  }

  return response.json();
};

// Função que atualiza o estado do modo automático de uma sala.
// Isso é, se desliga o ar condicionado automaticamente.
export const toggleAutomaticMode = async (salaId: number, automaticMode: boolean): Promise<boolean> => {
  const response = await fetch(`${API_URL}/status/${salaId}/mode`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modo_automatico: automaticMode }),
    });

  if (!response.ok) {
    throw new Error('Erro ao atualizar modo automático');
  }

  return true
}