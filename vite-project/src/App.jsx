import { Cabecalho } from './components';

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Cabecalho nomeUsuario="Joana" />
      <Cabecalho nomeUsuario="Apollo" />
      <Cabecalho nomeUsuario="Lilly" />
      <Cabecalho nomeUsuario="Scully" />
    </>
  )
};

export {
  App,
};
