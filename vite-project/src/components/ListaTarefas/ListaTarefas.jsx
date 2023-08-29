import { ListaTarefasItem } from './ListaTarefasItem';

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
  return (
    <ul className={style.ListaTarefas}>
      <ListaTarefasItem nome="Item 1" />
      <ListaTarefasItem nome="Item 2" />
      <ListaTarefasItem nome="Item 3" />
    </ul>
  );
};

export { ListaTarefas };
