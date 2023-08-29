import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { AppContext } from '../../contexts';
import { Cabecalho, Conteudo, Rodape } from '../../components';

import style from './LayoutPadrao.module.css';

const LayoutPadrao = () => {
  const { nomeUsuario } = useContext(AppContext);

  return (
    <div className={style.LayoutPadrao}>
      <Cabecalho />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador={nomeUsuario} />
    </div>
  );
};

export { LayoutPadrao };
