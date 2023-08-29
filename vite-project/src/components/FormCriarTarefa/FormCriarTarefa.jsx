import { useState } from 'react';

import { Botao, CampoTexto } from '../../components';

import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = (props) => {
  const { setTarefas } = props;

  const [nomeTarefa, setNomeTarefa] = useState('');

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const onSubmitFormCriarTarefa = (event) => {
    event.preventDefault();

    if(!nomeTarefa) {
      return;
    }

    setTarefas((estadoAtual) => {
      const tarefa = {
        id: estadoAtual.length + 1,
        nome: nomeTarefa,
      };

      return [
        ...estadoAtual,
        tarefa,
      ];
    });

    setNomeTarefa('');
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={onSubmitFormCriarTarefa}>
      <CampoTexto 
        value={nomeTarefa} 
        onChange={onChangeNomeTarefa} 
      />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefa };
