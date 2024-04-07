// import React from 'react'

const NavMenuHeader = () => {
  return (
    <ul className="hidden lg:flex gap-10 lg:flex-row">
      <li>
        <a href="/" className="font-semibold hover:text-secondary">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="font-semibold hover:text-secondary">
          Sobre Nós
        </a>
      </li>
      <li>
        <a href="/contact" className="font-semibold hover:text-secondary">
          Serviços
        </a>
      </li>
      <li>
        <a href="/contact" className="font-semibold hover:text-secondary">
          Cursos
        </a>
      </li>
      <li>
        <a href="/contact" className="font-semibold hover:text-secondary">
          Contate-Nos
        </a>
      </li>
    </ul>
  );
};

export default NavMenuHeader;
