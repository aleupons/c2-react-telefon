export const Tecla = (props) => {
  const { numero, marcar } = props;
  return (
    <li>
      <button onClick={() => marcar(numero)}>{numero}</button>
    </li>
  );
};
