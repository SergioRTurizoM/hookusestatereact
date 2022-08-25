import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Plantilla from "./components/plantilla";
import Circulo from "./components/Circulo";

function App() {
  const title = "Acerca de mi";
  const titleUser = "Mis Hobbies";
  const comidaFavorita = "Mi Comida Favorita";
  const technologies = "Mis Tecnologías";
  const bailes = "Mis bailes favoritos";

  const me = {
    name: "Sergio Turizo",
    movie: "Dr. Strange",
    music: "Salsa",
  };


  const [isBulbOn, setIsBulbOn] = useState(false);

  const toggleIsOn =()=> setIsBulbOn(!isBulbOn)


  return (
    <>
      <Circulo isBulbOn={isBulbOn} toggleIsOn={toggleIsOn}/>
      <Circulo isBulbOn={isBulbOn} toggleIsOn={toggleIsOn}/>
      <Circulo isBulbOn={isBulbOn} toggleIsOn={toggleIsOn}/>

      <Plantilla
        title="Sobre mí"
        item1={me.name}
        item2={me.movie}
        item3={me.music}
        color="#A75EF0"
      />
      <Plantilla
        title="Mis Tecnologías"
        item1="Javascript"
        item2="Angular"
        item3="NodeJS"
        color="cornflowerblue"
      />
      <Plantilla
        title="Mis Hobbies"
        item1="Escuchar Música"
        item2="Estudiar Programación"
        item3="Ver películas"
        color="#26CF1E"
      />
      <Plantilla
        title="Mi Comida Favorita"
        item1="Pastas"
        item2="Pescados y Mariscos"
        item3="Ensaladas"
        color="orange"
      />
      <Plantilla
        title="Mis Bailes Favoritos"
        item1="Salsa y tropical"
        item2="Vallenato"
        item3="Reggaeton"
        color="lightcoral"
      />
    </>
  );
}

export default App;
