import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_vertical_VC_white.png';

const HomeHeader = () => {
  return (
    // A classe aqui pode ser diferente se precisar de estilos únicos
    <header className="cabecalho-principal"> 
      <div className="conteudo-cabecalho">
        <figure className="logo">
          <Link to="/"><img className="icone-sup" src={logo} alt="Logo principal - Vilander Costa" /></Link>
        </figure>
        <nav className="redes-topo" aria-label="Redes sociais">
          <a href="https://www.linkedin.com/in/vilander-costa/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/vilandercosta/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/Vilander" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;