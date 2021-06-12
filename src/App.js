import { Info } from "./components/Info";
import { Display } from "./components/Display";
import { Acciones } from "./components/Acciones";
import { Teclado } from "./components/Teclado";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [activarBoton, setActivarBoton] = useState(false);
  const marcar = (numero) => {
    if (display.length < 8) {
      setDisplay(display + numero);
    } else if (display.length === 8) {
      setDisplay(display + numero);
      setActivarBoton(true);
    }
  };
  const borrar = () => {
    setDisplay(display.slice(0, -1));
    setActivarBoton(false);
  };

  const [accion, setAccion] = useState("llamar");
  const [activarInfo, setActivarInfo] = useState(false);
  const toogleAccion = (e) => {
    e.preventDefault();
    if (accion === "llamar") {
      setAccion("colgar");
      setActivarInfo(true);
    } else if (accion === "colgar") {
      setAccion("llamar");
      setActivarInfo(false);
    }
  };

  return (
    <div className="contenedor">
      <Info activarInfo={activarInfo} />
      <main className="telefono">
        <Teclado marcar={marcar} borrar={borrar} />
        <div className="acciones">
          <Display numerosMarcats={display} />
          <Acciones
            accion={accion}
            toogleAccion={toogleAccion}
            activarBoton={activarBoton}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
