import { ListaTarefasItem } from './ListaTarefasItem';

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
  return (
    <ul className={style.ListaTarefas}>
      <ListaTarefasItem>Item 1</ListaTarefasItem>
      <ListaTarefasItem>Item 2</ListaTarefasItem>
      <ListaTarefasItem>Item 3</ListaTarefasItem>
    </ul>
  );
};

export { ListaTarefas };
