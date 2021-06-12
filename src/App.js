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
  let timer = 0;
  const toogleAccion = (e) => {
    e.preventDefault();
    if (accion === "llamar" && activarBoton) {
      setAccion("colgar");
      setActivarInfo(true);
      timer = setTimeout(() => {
        // Si es penja expressament després no funciona bé perquè no es mata el setTimeout
        // Estaria dins d'un if (si no pasa "res"...)
        setAccion("llamar");
        setActivarInfo(false);
        setDisplay("");
        setActivarBoton(false);
      }, 5000);
    } else if (accion === "colgar") {
      setAccion("llamar");
      setActivarInfo(false);
      setDisplay("");
      setActivarBoton(false);
      clearTimeout(timer);
      timer = 0;
    }
  };

  return (
    <div className="contenedor">
      <Info activarInfo={activarInfo} />
      <main className="telefono">
        <Teclado desactivar={activarInfo} marcar={marcar} borrar={borrar} />
        <div className="acciones">
          <Display numerosMarcats={display} />
          <Acciones
            accion={accion}
            activarBoton={activarBoton}
            toogleAccion={toogleAccion}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
