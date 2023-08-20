const Rodape = (props) => {
  const { criador } = props;

  const anoAtual = (new Date()).getFullYear();

  return (
    <p>
      React Básico - {anoAtual} - {criador}
    </p>
  );
};

export { Rodape };