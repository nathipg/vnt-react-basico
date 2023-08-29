import { Outlet } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape } from '../../components';

import style from './LayoutPadrao.module.css';

const LayoutPadrao = () => {
  return (
    <div className={style.LayoutPadrao}>
      <Cabecalho />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador="Pissuti" />
    </div>
  );
};

export { LayoutPadrao };