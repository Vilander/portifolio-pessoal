import React from 'react';
import Layout from '../components/Layout';

// Importe ícones e o PDF
import gmailIcon from '../assets/icons/icons8-gmail-novo.svg';
import instagramIcon from '../assets/icons/icons8-instagram.gif';
import linkedinIcon from '../assets/icons/icons8-linkedin-2.gif';
import githubIcon from '../assets/icons/icons8-github.gif';
import downloadIcon from '../assets/icons/—Pngtree—file download icon_4719240.png';
import cvFile from '../assets/CV_TI_Vilander Costa_2025.pdf';

const Contato = () => {
  return (
    <Layout>
      <section id="formulario" className="main-section" style={{ marginTop: '12rem' }}>
        <div className="conteudo">
          <h2>&#10074;Fale Comigo...</h2>
          <div className="meu-contato">
            <a href="mailto:vilander.costa@gmail.com" target="_blank" rel="noopener noreferrer" title="Enviar email" className="email-link">
              <img className="email-icon" src={gmailIcon} alt="email" />
              <h6 className="email-text">vilander.costa@gmail.com</h6>
            </a>
          </div>
        </div>
      </section>

      <section id="rede" className="main-section">
        <div className="conteudo">
          <h2>&#10074;Minhas Redes...</h2>
          <div className="redes_sociais">
            <a href="https://www.instagram.com/vilandercosta/"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/vilander-costa/"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://github.com/Vilander"><img src={githubIcon} alt="Github" /></a>
          </div>
        </div>
      </section>

      <section id="curriculo" className="main-section">
        <div className="conteudo">
          <h2>&#10074;Meu Currículo...</h2>
          <div className="cv-download">
            <img src={downloadIcon} alt="download" />
            <a href={cvFile} download="CV_TI_Vilander Costa_2025.pdf">Download CV</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;