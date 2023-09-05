import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO } from '../../Botao';

import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { removerTarefa } = useAppContext();

  return (
    <li className={style.ListaTarefasItem}>
      {nome}
      <Botao 
        texto="-" 
        tipo={TIPO_BOTAO.SECUNDARIO} 
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
