function App() {
  return (
    <div class="contenedor">
      <span class="mensaje">Llamando...</span>
      <main class="telefono">
        <div class="botones">
          <ol class="teclado">
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>6</button>
            </li>
            <li>
              <button>7</button>
            </li>
            <li>
              <button>8</button>
            </li>
            <li>
              <button>9</button>
            </li>
            <li>
              <button>0</button>
            </li>
            <li>
              <button class="big">borrar</button>
            </li>
          </ol>
        </div>
        <div class="acciones">
          <span class="numero">667359961</span>
          <a href="llamar" class="llamar">
            Llamar
          </a>
          <a href="colgar-telefono" class="colgar activo">
            Colgar
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
