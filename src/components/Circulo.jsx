import React, { Component, useState } from "react";


const Circulo = ({ isBulbOn, toggleIsOn}) => {
  return (
    <div>
      <div
        className="circulocolor"
        style={{ background: isBulbOn ? "blue" : "yellow" }}
      ></div>
      <button onClick={toggleIsOn}>Cambiar</button>
    </div>
  );
};

export default Circulo;
