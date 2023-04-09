import React from "react";
import cv from '../../assets/cv.pdf'

export default function Presentation() {
  return (
    <div className="w-[90%] lg:w-[80%] h-[500px] m-auto pt-16 lg:pt-32  font-family">
      <p className="font-normal text-xl">Hola! Me llamo</p>
      <h1 className="text-5xl lg:text-6xl font-semibold dark:text-indigo-500">Lautaro Caballero</h1>
      <p className="mt-3 lg:mt-0 text-5xl lg:text-6xl font-semibold">Soy desarrollador Front End</p>
      <p className="mt-6">
        Comence mis estudios de desarrollo web en el año 2021, comenzando con
        las bases de HTML, CSS y JS, siguiendo por ReactJS y utilizando
        diferentes frameworks de CSS.
      </p>
      <p>
        Actualmente estoy centrado en continuar estudiando y perfeccionando mis
        habilidades asi como tambien volcandome a un desarrollo Full-Stack.
      </p>
      <button className="w-[150px] h-8 mt-10 rounded-md shadow-lg hover:bg-indigo-600 bg-indigo-400" ><a target="blank" href={cv}>Descargar CV!</a></button>
    </div>
  );
}
