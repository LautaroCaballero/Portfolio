import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  return (
    <div className="font-family w-[80%] m-auto items-center pb-20">
      <div className="flex text-2xl justify-center"> 
      <a href="https://github.com/LautaroCaballero" target="blank"><BsGithub className="mx-3"></BsGithub></a>
      <a href="https://www.linkedin.com/in/lautaro-caballero-40b7ba205/" target="blank"><BsLinkedin className="mx-3"></BsLinkedin></a>
      <a href="mailto:laucaballero50@gmail.com"><IoMdMail className="mx-3"></IoMdMail></a>
      </div>
    </div>
  );
}
