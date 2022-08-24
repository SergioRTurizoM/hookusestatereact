import { useState } from "react";

const Plantilla = ({ title, item1, item2, item3, color }) => {
  const [texto, settexto] = useState("");

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
        <button onClick={() => settexto("No hay más por ahora")}>
          Más Información
        </button>
      </div>
    </>
  );
};

export default Plantilla;
