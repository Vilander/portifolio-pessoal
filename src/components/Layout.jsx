import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsappButton from './WhatsappButton';
import backgroundImage from '../assets/images/background-bolinhas.webp'; // Corrija o caminho

const Layout = ({ children }) => {
  return (
    <>
      {/* Imagem de fundo */}
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      <Header />
      <main className="conteudo-principal">
        {children} {/* Aqui é onde o conteúdo da página será renderizado */}
      </main>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Layout;