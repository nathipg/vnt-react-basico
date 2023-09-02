import { useState } from 'react';

import { Botao, CampoTexto, Loading, TIPO_BOTAO } from '../../../components';
import { useAppContext } from '../../../hooks';

import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { editarTarefa, removerTarefa, loadingEditarTarefa, loadingRemoverTarefa } = useAppContext();

  const [estaEditando, setEstaEditando] = useState(false);

  const onBlurEditarTarefa = (event) => {
    const tarefa = {
      id,
      nome: event.currentTarget.value,
    };

    editarTarefa(tarefa);
    setEstaEditando(false);
  };

  const temRemocaoPendente = loadingRemoverTarefa == id;
  const temEdicaoPendente = loadingEditarTarefa == id;

  return (
    <li className={style.ListaTarefasItem}>
      {(estaEditando || temEdicaoPendente) && (
        <CampoTexto defaultValue={nome} onBlur={onBlurEditarTarefa} autoFocus />
      )}

      {!temEdicaoPendente && !estaEditando && (
          <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}

      {temEdicaoPendente && (
        <Loading />
      )}
      
      <Botao
        texto={temRemocaoPendente ? <Loading /> : '-'}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
