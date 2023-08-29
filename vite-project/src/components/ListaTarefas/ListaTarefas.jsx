import { useAppContext } from '../../hooks';

import { ListaTarefasItem } from './ListaTarefasItem';

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
  const { tarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefas}>
      {!tarefas.length && (
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
