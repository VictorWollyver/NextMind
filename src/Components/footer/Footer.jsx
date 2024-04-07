import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8 h-40 flex items-center">
      <div className="container mx-auto px-4 max-w-[1246px] py-8 lg:py-0">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <li>
            <h1 className="leading-6 font-bold text-2xl">
              Next
              <br />
              <span className="text-primary">Mind</span>
            </h1>
            <p className="font-medium">O melhor ensino para você.</p>
            <ul className="flex gap-4 mt-4 ">
              <li className="cursor-pointer">
                <Facebook />
              </li>

              <li className="cursor-pointer">
                <Instagram />
              </li>
              <li className="cursor-pointer">
                <Twitter />
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li className="text-primary font-bold text-xl">Menu</li>
              <li className="font-medium">Home</li>
              <li className="font-medium">Sobre</li>
              <li className="font-medium">Contato</li>
            </ul>
          </li>

          <li>
            <ul>
              <li className="text-primary font-bold text-xl">Endereço</li>
              <li className="font-medium">Campinas - Brasil</li>
              <li className="font-medium">Av. dos Esportes, 999</li>
              <li className="font-medium">Centro</li>
            </ul>
          </li>

          <li>
            <ul>
              <li className="text-primary font-bold text-xl">Navegação</li>
              <li className="font-medium">Download</li>
              <li className="font-medium">Contate-nos</li>
              <li className="font-medium">Cursos da semana</li>
            </ul>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
