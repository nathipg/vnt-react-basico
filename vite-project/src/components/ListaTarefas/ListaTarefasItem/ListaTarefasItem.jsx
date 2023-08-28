import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
  const { children } = props;

  return (
    <li className={style.ListaTarefasItem}>
      {children}
    </li>
  );
};

export { ListaTarefasItem };
