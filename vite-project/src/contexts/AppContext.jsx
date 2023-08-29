import { createContext, useEffect, useState } from 'react';

import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = async (nomeTarefa) => {
    const { data: tarefa } = await api.post('/tarefas', {
      nome: nomeTarefa,
    });

    setTarefas((estadoAtual) => {
      return [
        ...estadoAtual,
        tarefa,
      ];
    });
  };

  const removerTarefa = async (idTarefa) => {
    await api.delete(`/tarefas/${idTarefa}`);
    
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.filter((tarefa) => tarefa.id != idTarefa);
      
      return [
        ...tarefasAtualizadas,
      ];
    });
  };

  const editarTarefa = async (tarefa) => {
    const { id, nome } = tarefa;

    await api.put(`/tarefas/${id}`, {
      nome,
    });

    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.map((tarefa) => {
        return tarefa.id == id ? {
          ...tarefa,
          nome: nome,
        } : tarefa;
      });

      return [...tarefasAtualizadas];
    });
  };

  const carregarTarefas = async () => {
    const { data = [] } = await api.get('/tarefas');
    setTarefas(data);
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider 
      value={{
        nomeUsuario: 'Pissuti',
        tarefas,
        adicionarTarefa,
        removerTarefa,
        editarTarefa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
