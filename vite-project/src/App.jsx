import { Cabecalho, Conteudo, Rodape } from './components';

import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <h1>Titulo</h1>
        <p>Texto texto texto</p>
      </Conteudo>
      <Rodape criador="Pissuti" />
    </>
  )
};

export { App };
