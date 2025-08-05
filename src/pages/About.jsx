import React from 'react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';
import Carrossel from '../components/Carrossel';

// Importe todas as imagens e logos necessários
// Ex: import familiaImg from '../assets/images/IMG_1260.png';
import univespLogo from '../assets/images/univesp.png';
import senacLogo from '../assets/images/senac.png';
import unisalLogo from '../assets/images/unisal.png';
import dev1Img from '../assets/images/dev_1.png';
import dev2Img from '../assets/images/dev_2.png';
import safraLogo from '../assets/images/logo_safra.png';
import schoolLogo from '../assets/images/logo_school.svg';
import ajaxLogo from '../assets/images/logo_ajax.png';

// Importe as imagens dos certificados para o carrossel
// Crie uma lista de objetos para o carrossel de cursos
const cursoItems = [
  { image: '../assets/images/certificado (1).png', alt: 'Certificado 1' },
  { image: '../assets/images/certificado (2).png', alt: 'Certificado 2' },
  // Adicione todos os 13 certificados aqui...
];

const About = () => {
  return (
    <Layout>
      <section id="bio-pessoal" className="main-section" style={{marginTop: '12rem'}}>
        {/* Adicione a tag <picture> se precisar de imagens responsivas */}
        <img src={'../assets/images/IMG_1260.png'} alt="Família de Vilander" />
        <div>
          <h1>&#10074;Hello World...</h1>
          <p>
            Olá mundo, sou Vilander, nascido em novembro de 1986, casado, pai de três filhos e dois cachorros...
          </p>
        </div>
      </section>

      <section id="formacao-academica" className="main-section">
        <h2>&#10074;Formação Acadêmica...</h2>
        <InfoCard imageSrc={univespLogo} imageAlt="Logo UNIVESP">
          <p>Bacharel em Ciência de Dados - UNIVESP (cursando)</p>
        </InfoCard>
        <InfoCard imageSrc={senacLogo} imageAlt="Logo SENAC">
          <p>Técnico em Informática para Internet - SENAC (cursando)</p>
        </InfoCard><InfoCard imageSrc={unisalLogo} imageAlt="Logo Unisal">
          <p>Técnico em Informática para Internet - SENAC (cursando)</p>
        </InfoCard>
        {/* Adicione os outros InfoCards aqui */}
      </section>

      <section id="cursos" className="main-section">
        <h2>&#10074;Cursos Complementares...</h2>
        <Carrossel items={cursoItems} id="cursosCarousel" />
      </section>

      <section id="skills" className="main-section">
        <h2>&#10074;Habilidades Técnicas...</h2>
        <div className="habilidades">
          <img src={dev1Img} alt="Ícones de Hard Skills" />
          <div>
            <h3 className="hard_skill">Hard Skills:</h3>
            {/* Listas de habilidades aqui */}
          </div>
        </div>
        <div className="habilidades hab_soft">
          <div>
            <h3 className="soft_skill">Soft Skills:</h3>
            {/* Listas de habilidades aqui */}
          </div>
          <img src={dev2Img} alt="Ícones de Soft Skills" />
        </div>
      </section>

      <section id="CLT" className="main-section">
        <h2>&#10074;Experiências Profissionais...</h2>
        <InfoCard imageSrc={safraLogo} imageAlt="Logo SAFRA BAG">
          <h3>Safra Bag</h3>
          <p>Assistente de Marketing</p>
        </InfoCard><InfoCard imageSrc={schoolLogo} imageAlt="Logo SAFRA BAG">
          <h3>Safra Bag</h3>
          <p>Assistente de Marketing</p>
        </InfoCard><InfoCard imageSrc={ajaxLogo} imageAlt="Logo SAFRA BAG">
          <h3>Safra Bag</h3>
          <p>Assistente de Marketing</p>
        </InfoCard>
        {/* Adicione as outras experiências aqui */}
      </section>
    </Layout>
  );
};

export default About;