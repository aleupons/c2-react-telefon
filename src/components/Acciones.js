import { Accion } from "./Accion";

export const Acciones = (props) => {
  const { accion, activarBoton, toogleAccion } = props;
  return (
    <>
      <Accion
        accion={accion}
        activarBoton={activarBoton}
        toogleAccion={toogleAccion}
      />
    </>
  );
};
