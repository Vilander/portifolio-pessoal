import React from 'react';
import arrowUp from '../assets/images/arrow-up-white-vazado.png';
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="main-footer" aria-label="Rodapé do site">
      <div className="elipse">
        <a href="#top" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
          <img src={arrowUp} alt="Voltar ao topo" />
        </a>
      </div>
      <div className="footer-conteudo">
        <p className="vilander-costa">© Vilander Costa 2025</p>
        <address className="infoContato">
          Tel: +55 19 99322.3509<br />
          e-mail: <a href="mailto:vilander.costa@gmail.com">vilander.costa@gmail.com</a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;