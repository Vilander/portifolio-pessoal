import React from 'react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';
import Carrossel from '../components/Carrossel';
import { PiArrowBendDownLeftFill } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import './About.css'

// Imagens pessoais 
import familiaGrandeImg from '../assets/images/IMG_1260.png';
import familiaMediaImg from '../assets/images/IMG_1260_M.png';
import familiaPequenaImg from '../assets/images/IMG_1260_P.png';

// logos
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
import cert4 from '../assets/images/certificado (4).png';
import cert5 from '../assets/images/certificado (5).png';
import cert6 from '../assets/images/certificado (6).png';
import cert7 from '../assets/images/certificado (7).png';
import cert8 from '../assets/images/certificado (8).png';
import cert9 from '../assets/images/certificado (9).png';
import cert10 from '../assets/images/certificado (10).png';
import cert11 from '../assets/images/certificado (11).png';
import cert12 from '../assets/images/certificado (12).png';
import cert13 from '../assets/images/certificado (13).png';


const cursoItems = [
  { image: cert1, alt: 'Certificado 1' },
  { image: cert2, alt: 'Certificado 2' },
  { image: cert3, alt: 'Certificado 3' },
  { image: cert4, alt: 'Certificado 4' },
  { image: cert5, alt: 'Certificado 5' },
  { image: cert6, alt: 'Certificado 6' },
  { image: cert7, alt: 'Certificado 7' },
  { image: cert8, alt: 'Certificado 8' },
  { image: cert9, alt: 'Certificado 9' },
  { image: cert10, alt: 'Certificado 10' },
  { image: cert11, alt: 'Certificado 11' },
  { image: cert12, alt: 'Certificado 12' },
  { image: cert13, alt: 'Certificado 13' },

];

const About = () => {
  return (
    <Layout>

      <section id="bio-pessoal" className="main-section" style={{ marginTop: '12rem' }}>
        <div className='area-desenho'>
          
          <div className='credito-geral'>
            <a href="#" className='cursor-box pointer credito-sara'> Desenho feito pela minha artista favorita: <em className='credito-destaque'><CiStar /> Sara <CiStar /></em></a>
            <PiArrowBendDownLeftFill size={50} className='visually-hidden-2'/>
          </div>
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
        </div>
        <div>
          <h1>&#10074;Hello World...</h1>
          <p>
            Olá mundo, sou Vilander, nascido em novembro de 1986, moro em Americana/SP, casado, pai de três filhos e dois cachorros. Meu maior prazer é estar com todos eles curtindo cada momento juntos. Atualmente, estou em transição de carreira para a área de Tecnologia, cursando Ciência de Dados na Univesp e Técnico de Informática para Internet no Senac, com foco em desenvolvimento. Tenho experiência anterior em marketing, design gráfico e gestão de equipes, habilidades que hoje somo ao meu aprendizado em programação, análise de dados e desenvolvimento web. Acredito na importância do aprendizado contínuo e busco sempre evoluir, equilibrando vida pessoal e profissional com muita dedicação e entusiasmo.
          </p>
        </div>
      </section>


      <section id="formacao-academica" className="main-section">
        <h2>&#10074;Formação Acadêmica...</h2>
        <InfoCard imageSrc={univespLogo} imageAlt="Logo UNIVESP">
          <p>Bacharel em Ciência de Dados - UNIVESP (cursando)</p>
        </InfoCard><InfoCard imageSrc={univespLogo} imageAlt="Logo UNIVESP">
          <p>Bacharel em Tecnologia da Informação - ênfase em analise de dados- UNIVESP (2025)</p>
        </InfoCard>
        <InfoCard imageSrc={senacLogo} imageAlt="Logo SENAC">
          <p>Técnico em Informática para Internet - SENAC (cursando)</p>
        </InfoCard>
        <InfoCard imageSrc={unisalLogo} imageAlt="Logo UNISAL">
          <p>Curso complementar em Desenvolvimento Web - UNISAL(2009)</p>
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
              <li>Desenvolvimento Web</li>
              <ul>
                <li className="sub-list-item">HTML | CSS | JavaScript | React | WordPress</li>
              </ul>
              <li>Linguagens de Programação e Dados</li>
              <ul>
                <li className="sub-list-item">Python | SQL | Power BI | Excel</li>
              </ul>
              <li>Ferramentas de Versionamento e DevOps</li>
              <ul>
                <li className="sub-list-item">Git | Github | Linux</li>
              </ul>
              <li>Design e Comunicação Visual</li>
              <ul>
                <li className="sub-list-item">Figma | Photoshop | Illustrator | InDesign | Fotografia</li>
              </ul>
              <li>Pacote Office</li>
              <ul>
                <li className="sub-list-item">Excel | Word | PowerPoint</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="habilidades hab_soft">
          <div>
            <h3 className="soft_skill">Soft Skills:</h3>
            <ul>
              <li>
                Pensamento Crítico | Curiosidade | Agilidade
                de Aprendizagem | Perfil Analítico
              </li>
              <li>
                Comunicação | Trabalho em Equipe | Gestão
                de Conflitos | Inteligência Emocional | Liderança
              </li>
              <li>
                Organização | Gestão do Tempo | Compromisso com
                Resultados | Foco em Qualidade | Senso de Urgência
              </li>
              <li>
                Proatividade | Criatividade | Adaptabilidade |
                Resiliência
              </li>

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
          <p>Líder Pré-Impressão</p>
        </InfoCard>
        <InfoCard imageSrc={ajaxLogo} imageAlt="Logo Ajax">
          <h3>Ajax</h3>
          <p>Assitente de escritório</p>
        </InfoCard>
      </section>

    </Layout>
  );
};

export default About;
