import { useState } from 'react';

import { Botao, CampoTexto } from '../../components';

import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {
  const [nomeTarefa, setNomeTarefa] = useState('');

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  return (
    <form className={style.FormCriarTarefa}>
      <CampoTexto 
        value={nomeTarefa} 
        onChange={onChangeNomeTarefa} 
      />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefa };
