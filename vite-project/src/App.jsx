import { Inicial } from './pages';
import { Cabecalho, Conteudo, Rodape } from './components';

import style from './App.module.css';

const App = () => {
  return (
    <div className={style.App}>
      <Cabecalho />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Pissuti" />
    </div>
  )
};

export { App };
