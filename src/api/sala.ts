export interface Sala {
  id: number;
  nome: string;
  andar: number;
  status_atual: boolean;
}

export interface Pavilhao {
  pavilhao: string;
  salas: Sala[];
}

const API_URL = 'http://localhost:5100/salas';

export const fetchSalas = async (): Promise<Pavilhao[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar pavilhões');
  }
  return response.json();
};