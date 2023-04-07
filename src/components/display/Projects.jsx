import React from "react";

export default function Projects() {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto font-famil mt-72 lg:mt-48">
      <div className="w-[100%] h-[1px] bg-gray-400 mb-4"></div>
      <h2 className="text-xl font-semibold">
        Una lista de algunos proyectos que realicé.
      </h2>
      <div className="lg:flex pb-5 pt-6 mb-10">
        <img
          className="h-[250px]"
          src="https://i.postimg.cc/hvtJfQXG/Tasklist.jpg"
          alt=""
        />
        <div className="mt-5 lg:mt-0 lg:pl-4">
          <p className="text-lg font-bold">Open Task List!</p>
          <p className="text-xl">
            Open Task List es un pequeño CRUD con la finalidad de ayudarte a
            mantener un orden, pudiendo agregar, editar, eliminar o marcar como
            completadas todas tus tareas.
          </p>
          <a className="" href="https://opentasklist.vercel.app/">
            <button className="mt-14 lg:ml-36 w-[200px] h-8 rounded-md shadow-lg bg-indigo-500 hover:bg-indigo-700">
              Ir al sitio
            </button>
          </a>
        </div>
      </div>
      <div className="lg:flex pb-6">
        <img
          className="h-[230px]"
          src="https://i.postimg.cc/52spK8Vx/ecommerce.jpg"
          alt=""
        />
        <div className="lg:pl-4 mt-5 lg:mt-0">
          <p className="text-lg font-bold">Future Shop</p>
          <p className="text-xl">
            Future Shop es un e-commerce realizado con una api publica que
            cuenta con carrito de comprtas totalmente funcional, ademas de haber
            sido creado con redux.
          </p>
          <a className="" href="https://e-commerce-redux-nu.vercel.app/">
            <button className="mt-14 lg:ml-36 w-[200px] h-8 rounded-md shadow-lg bg-indigo-500 hover:bg-indigo-700">
              Ir al sitio
            </button>
          </a>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-400 mb-4"></div>
    </div>
  );
}
