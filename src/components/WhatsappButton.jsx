import React from 'react';

const WhatsappButton = () => {
  return (
    <aside id="WhatsApp" aria-label="Contato pelo WhatsApp">
      <h2 className="visually-hidden">Fale comigo pelo WhatsApp</h2>
      <a 
        href="https://wa.me/5519993223509?text=Olá,%20tudo%20bem?" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Fale comigo no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </aside>
  );
};

export default WhatsappButton;