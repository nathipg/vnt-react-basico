import style from './Botao.module.css';

const Botao = (props) => {
  const { texto, ...outrasProps } = props;

  return (
    <button className={style.Botao} {...outrasProps}>
      {texto}
    </button>
  )
};

export { Botao };
