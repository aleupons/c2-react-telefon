import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const teclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const { desactivar, marcar, borrar } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        {teclas.map((tecla) => (
          <Tecla
            key={tecla}
            desactivar={desactivar}
            numero={tecla}
            marcar={marcar}
          />
        ))}
        <button
          className="big"
          onClick={borrar}
          disabled={desactivar ? true : false}
        >
          borrar
        </button>
      </ol>
    </div>
  );
};
