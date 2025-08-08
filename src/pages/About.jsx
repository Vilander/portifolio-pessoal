import React from 'react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';
import Carrossel from '../components/Carrossel';
import './About.css'

// Imagens pessoais e logos
// import familiaImg from '../assets/images/IMG_1260.png';
import familiaGrandeImg from '../assets/images/IMG_1260.png';
import familiaMediaImg from '../assets/images/IMG_1260_M.png';
import familiaPequenaImg from '../assets/images/IMG_1260_P.png';
import univespLogo from '../assets/images/univesp.png';
import senacLogo from '../assets/images/senac.png';
import unisalLogo from '../assets/images/unisal.png';
import dev1Img from '../assets/images/dev_1.png';
import dev2Img from '../assets/images/dev_2.png';
import safraLogo from '../assets/images/logo_safra.png';
import schoolLogo from '../assets/images/logo_school.svg';
import ajaxLogo from '../assets/images/logo_ajax.png';

// Certificados
import cert1 from '../assets/images/certificado (1).png';
import cert2 from '../assets/images/certificado (2).png';
import cert3 from '../assets/images/certificado (3).png';
// Importe os demais certificados até o 13...

const cursoItems = [
  { image: cert1, alt: 'Certificado 1' },
  { image: cert2, alt: 'Certificado 2' },
  { image: cert3, alt: 'Certificado 3' },
  // Adicione os demais certificados aqui...
];

const About = () => {
  return (
    <Layout>
      {/* <section id="bio-pessoal" className="main-section" style={{ marginTop: '12rem' }}>
        <img src={familiaImg} alt="Família de Vilander" />
        <div>
          <h1>&#10074;Hello World...</h1>
          <p>
            Olá mundo, sou Vilander, nascido em novembro de 1986, casado, pai de três filhos e dois cachorros...
          </p>
        </div>
      </section> */}
      <section id="bio-pessoal" className="main-section" style={{ marginTop: '12rem' }}>
        <picture className='foto-familia'>
          <source
            media="(max-width: 600px)"
            srcSet={familiaPequenaImg}
          />

          <source
            media="(max-width: 1200px)"
            srcSet={familiaMediaImg}
          />

          <img
            src={familiaGrandeImg}
            alt="Família de Vilander"
            className="imagem-responsiva"
          />
        </picture>
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
        </InfoCard>
        <InfoCard imageSrc={unisalLogo} imageAlt="Logo UNISAL">
          <p>Curso complementar em Desenvolvimento Web - UNISAL</p>
        </InfoCard>
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
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Node.js</li>
              <li>Git, GitHub</li>
              <li>Banco de Dados SQL</li>
            </ul>
          </div>
        </div>
        <div className="habilidades hab_soft">
          <div>
            <h3 className="soft_skill">Soft Skills:</h3>
            <ul>
              <li>Comunicação</li>
              <li>Trabalho em equipe</li>
              <li>Resolução de problemas</li>
              <li>Adaptabilidade</li>
            </ul>
          </div>
          <img src={dev2Img} alt="Ícones de Soft Skills" />
        </div>
      </section>

      <section id="CLT" className="main-section">
        <h2>&#10074;Experiências Profissionais...</h2>
        <InfoCard imageSrc={safraLogo} imageAlt="Logo Safra Bag">
          <h3>Safra Bag</h3>
          <p>Assistente de Marketing</p>
        </InfoCard>
        <InfoCard imageSrc={schoolLogo} imageAlt="Logo School">
          <h3>School</h3>
          <p>Instrutor de Informática</p>
        </InfoCard>
        <InfoCard imageSrc={ajaxLogo} imageAlt="Logo Ajax">
          <h3>Ajax</h3>
          <p>Desenvolvedor Júnior</p>
        </InfoCard>
      </section>
    </Layout>
  );
};

export default About;
