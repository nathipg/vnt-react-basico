import { Botao, TIPO_BOTAO } from '../../../components';

import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
  const { nome } = props;

  return (
    <li className={style.ListaTarefasItem}>
      <strong>{nome}</strong>
      <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
    </li>
  );
};

export { ListaTarefasItem };
