import { Accion } from "./Accion";

export const Acciones = (props) => {
  const { accion, toogleAccion, activarBoton } = props;
  return (
    <>
      <Accion
        accion={accion}
        toogleAccion={toogleAccion}
        activarBoton={activarBoton}
      />
    </>
  );
};
