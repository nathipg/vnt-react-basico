import { ListaTarefasItem } from './ListaTarefasItem';

import style from './ListaTarefas.module.css';

const ListaTarefas = (props) => {
  const { tarefas } = props;
  
  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map(tarefa => <ListaTarefasItem key={tarefa.id} nome={tarefa.nome} />)}
    </ul>
  );
};

export { ListaTarefas };
