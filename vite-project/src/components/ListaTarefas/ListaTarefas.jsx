import { Loading } from '../../components';
import { useAppContext } from '../../hooks';

import { ListaTarefasItem } from './ListaTarefasItem';

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
  const { tarefas, loadingCarregarTarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefas}>
      {loadingCarregarTarefas && (
        <p>
          Carregando... 
          <Loading />
        </p>
      )}

      {!loadingCarregarTarefas && !tarefas.length && (
        <p>A lista está vazia</p>
      )}
      
      {tarefas.map(tarefa => (
        <ListaTarefasItem 
          key={tarefa.id} 
          id={tarefa.id} 
          nome={tarefa.nome} 
        />
      ))}
    </ul>
  );
};

export { ListaTarefas };
