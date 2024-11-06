import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSalas, Pavilhao } from '../api/sala';
import { FilterMenu } from '../components/filter-menu';
import { SalaList } from '../components/sala-list';
import { ActionMenu } from '../components/action-menu';
import { BaseModal } from '../components/base-modal';

export const DashboardPage: React.FC = () => {
  const [selectedPavilhao, setSelectedPavilhao] = useState<Pavilhao | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { data: pavilhoes = [], isLoading, error } = useQuery<Pavilhao[]>({
    queryKey: ['salas'],
    queryFn: fetchSalas
  });

  const handleSelectPavilhao = (pavilhao: Pavilhao) => {
    setSelectedPavilhao(pavilhao);
  };

  const handleAddPavilhao = () => {
    setIsAddModalOpen(true);
  };

  const handleEditPavilhao = () => {
    if (selectedPavilhao) {
      setIsEditModalOpen(true);
    }
  };

  const handleDeletePavilhao = () => {
    if (selectedPavilhao) {
      setIsDeleteModalOpen(true);
    }
  };

  const handleLogout = () => {
    console.log('Deslogar');
  };

  const confirmAdd = (nome?: string) => {
    if (nome) {
      console.log(`Novo pavilhão adicionado: ${nome}`);
      // Mandar para API
    }
    setIsAddModalOpen(false);
  };

  const confirmEdit = () => {
    console.log('Pavilhão editado');
    setIsEditModalOpen(false);
    setSelectedPavilhao(null);
  };

  const confirmDelete = () => {
    console.log('Pavilhão excluído');
    setIsDeleteModalOpen(false);
    setSelectedPavilhao(null);
  };

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar pavilhões: {error.message}</p>;

  return (
    <div className="flex h-screen">
      <FilterMenu pavilhoes={pavilhoes} onSelectPavilhao={handleSelectPavilhao} />
      <div className="flex-grow p-4">
        {selectedPavilhao ? (
          <SalaList pavilhao={selectedPavilhao.pavilhao} salas={selectedPavilhao.salas} />
        ) : (
          <p>Selecione um pavilhão para ver as salas.</p>
        )}
      </div>
      <ActionMenu
        selectedPavilhao={selectedPavilhao?.pavilhao || null}
        onAddPavilhao={handleAddPavilhao}
        onEditPavilhao={handleEditPavilhao}
        onDeletePavilhao={handleDeletePavilhao}
        onLogout={handleLogout}
      />

      <BaseModal
        title="Adicionar Pavilhão"
        isOpen={isAddModalOpen}
        onClose={() => {setIsAddModalOpen(false)}}
        onConfirm={confirmAdd}
        confirmLabel="Adicionar"
        mode="edit"
        initialName=''
      />

      <BaseModal
        title="Editar Pavilhão"
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onConfirm={confirmEdit}
        confirmLabel="Salvar"
        mode="edit"
        initialName={selectedPavilhao?.pavilhao || ''}
      />

      <BaseModal
        title="Excluir Pavilhão"
        description={`Tem certeza que deseja excluir o pavilhão: ${selectedPavilhao?.pavilhao}?`}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        confirmLabel="Excluir"
        cancelLabel="Cancelar"
        mode="delete"
      />
    </div>
  );
};
