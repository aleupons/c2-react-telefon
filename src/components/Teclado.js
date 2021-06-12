import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const teclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const { marcar, borrar } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        {teclas.map((tecla) => (
          <Tecla key={tecla} numero={tecla} marcar={marcar} />
        ))}
        <button className="big" onClick={borrar}>
          borrar
        </button>
      </ol>
    </div>
  );
};
