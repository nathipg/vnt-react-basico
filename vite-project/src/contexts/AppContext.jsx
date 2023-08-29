import { createContext, useEffect, useState } from 'react';

import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (nomeTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefa = {
        id: estadoAtual.length + 1,
        nome: nomeTarefa,
      };

      return [
        ...estadoAtual,
        tarefa,
      ];
    });
  };

  const removerTarefa = (idTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.filter((tarefa) => tarefa.id != idTarefa);
      
      return [
        ...tarefasAtualizadas,
      ];
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
