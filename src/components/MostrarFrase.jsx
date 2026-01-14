import { useState } from "react";

function MostrarFrase() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={mostrar}
        onChange={() => setMostrar(!mostrar)}
      />
      <span> Alternar frase </span>

      {mostrar && <p>oieeee</p>}
    </div>
  );
}

export default MostrarFrase;

//evento + estado 