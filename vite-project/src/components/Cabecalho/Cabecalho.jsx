const Cabecalho = (props) => {
  const { nomeUsuario } = props;

  return (
    <div>
      Bem-vindo(a), {nomeUsuario}
    </div>
  );
};

export { Cabecalho };
