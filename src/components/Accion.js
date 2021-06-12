export const Accion = (props) => {
  const { accion, activarBoton, toogleAccion } = props;
  return (
    <a
      onClick={toogleAccion}
      href={accion}
      className={`${accion}${activarBoton ? " activo" : ""}`}
    >
      {accion.charAt(0).toUpperCase() + accion.slice(1, accion.length)}
    </a>
  );
};
