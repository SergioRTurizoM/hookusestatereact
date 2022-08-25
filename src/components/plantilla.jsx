import { useState } from "react";

const Plantilla = ({ title, item1, item2, item3, color }) => {
  const [texto, settexto] = useState("Ver mas");

    const cambiar = ()=> {
        texto == "Ver mas" ? texto == "No hay mas" : texto == "Ver mas"
    }

  return (
    <>
      <div className="App" style={{ background: color }}>
        <h1 className="red">{title}</h1>
        <ul>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
        <p>{texto}</p>
        <button onClick={() => settexto(frase)}>
          Más Información
        </button>
      </div>
    </>
  );
};

export default Plantilla;
