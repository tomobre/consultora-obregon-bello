// @ts-nocheck
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div className=" mb-10 bg-gray-50 p-5 flex justify-center sticky top-0 z-10 ">
      <img src="" alt="" />
      <Link className="mx-5 " to="#home">
        <h3>Inicio</h3>
      </Link>
      <Link className="mx-5" to="#services">
        <h3>¿Que hacemos?</h3>
      </Link>
      <Link className="mx-5" to="#team">
        <h3>¿Quienes somos?</h3>
      </Link>
      <Link className="mx-5" to="#jobs">
        <h3>Proyectos</h3>
      </Link>
      <Link className="mx-5" to="#contact">
        <h3>Contacto</h3>
      </Link>
    </div>
  );
};

export default Navbar;
