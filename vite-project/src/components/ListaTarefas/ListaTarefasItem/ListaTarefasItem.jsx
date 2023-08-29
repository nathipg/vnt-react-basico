import { useState } from 'react';

import { Botao, CampoTexto, TIPO_BOTAO } from '../../../components';
import { useAppContext } from '../../../hooks';

import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { editarTarefa, removerTarefa } = useAppContext();

  const [estaEditando, setEstaEditando] = useState(false);

  const onBlurEditarTarefa = (event) => {
    const tarefa = {
      id,
      nome: event.currentTarget.value,
    };

    editarTarefa(tarefa);
    setEstaEditando(false);
  };

  return (
    <li className={style.ListaTarefasItem}>
      {estaEditando && (
        <CampoTexto defaultValue={nome} onBlur={onBlurEditarTarefa} autoFocus />
      )}
      {!estaEditando && (
          <strong onDoubleClick={() => setEstaEditando(true)}>{nome}</strong>
      )}
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
