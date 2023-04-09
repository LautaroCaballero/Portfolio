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
            Open Task List es una aplicación sencilla que te permite mantener un
            registro de tus tareas, con la posibilidad de agregar, editar,
            eliminar o marcarlas como completadas. Esta herramienta es ideal
            para aquellos que buscan mantener un orden en su vida diaria y
            desean maximizar su productividad. Con Open Task List, puedes tener
            un mayor control sobre tus responsabilidades y organizar tus
            actividades de manera efectiva.
          </p>
          <a
            className=""
            href="https://opentasklist.vercel.app/"
            target="blank"
          >
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
            Future Shop es una plataforma de comercio electrónico construida a
            partir de una API pública, la cual te ofrece un carrito de compras
            completamente funcional. Este sitio web fue desarrollado utilizando
            la tecnología de Redux, lo que garantiza una experiencia de usuario
            fluida y sin interrupciones.
          </p>
          <a
            className=""
            href="https://e-commerce-redux-nu.vercel.app/"
            target="blank"
          >
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
