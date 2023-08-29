import { createContext, useEffect, useState } from 'react';

import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [tarefas, setTarefas] = useState([]);
  const [loadingCarregarTarefas, setLoadingCarregarTarefas] = useState(true);
  const [loadingAdicionarTarefa, setLoadingAdicionarTarefa] = useState(false);
  const [loadingEditarTarefa, setLoadingEditarTarefa] = useState(null);
  const [loadingRemoverTarefa, setLoadingRemoverTarefa] = useState(null);

  const adicionarTarefa = async (nomeTarefa) => {
    setLoadingAdicionarTarefa(true);

    const { data: tarefa } = await api.post('/tarefas', {
      nome: nomeTarefa,
    });

    setTarefas((estadoAtual) => {
      return [
        ...estadoAtual,
        tarefa,
      ];
    });

    setLoadingAdicionarTarefa(false);
  };

  const removerTarefa = async (idTarefa) => {
    setLoadingRemoverTarefa(idTarefa);

    await api.delete(`/tarefas/${idTarefa}`);
    
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.filter((tarefa) => tarefa.id != idTarefa);
      
      return [
        ...tarefasAtualizadas,
      ];
    });

    setLoadingRemoverTarefa(null);
  };

  const editarTarefa = async (tarefa) => {
    const { id, nome } = tarefa;

    setLoadingEditarTarefa(id);

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

    setLoadingEditarTarefa(null);
  };

  const carregarTarefas = async () => {
    const { data = [] } = await api.get('/tarefas');
    setTarefas(data);
    setLoadingCarregarTarefas(false);
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
        loadingCarregarTarefas,
        loadingAdicionarTarefa,
        loadingEditarTarefa,
        loadingRemoverTarefa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
