import React from 'react';
import Layout from '../components/Layout';
import Carrossel from '../components/Carrossel';
import './Portfolio.css'

// Importe as imagens dos projetos DEV como módulos
import portfolioPrintImg from '../assets/images/portfolio-print.PNG';
import vidaAtivaImg from '../assets/images/vida-ativa.PNG';
import appToAquiImg from '../assets/images/app-toaqui.PNG';

// Importe as imagens de Marketing como módulos
import mktImg1 from '../assets/images/MKT0001.jpg';
import mktImg2 from '../assets/images/MKT0002.JPG';
import mktImg3 from '../assets/images/MKT0003.png';

const devItems = [
    {
        image: portfolioPrintImg,
        alt: 'Pagina Pessoal',
        link: 'https://github.com/Vilander/uc5-projeto-integrador-frontend-senac'
    },
    {
        image: vidaAtivaImg, 
        alt: 'Clinica Vida-Ativa - trabalho academico',
        link: 'https://github.com/Vilander/vida-ativa'
    },
    {
        image: appToAquiImg, 
        alt: 'APP Mural de Empreendedorismo Social Senac',
        link: 'https://github.com/Vilander/toAqui'
    }
];

const mktItems = [
    { image: mktImg1, alt: 'social media' },
    { image: mktImg2, alt: 'fotografia digital' },
    { image: mktImg3, alt: 'endomarketing' },
    
];


const Portfolio = () => {
    return (
        <Layout>
            <section id="DEV" className="main-section" style={{ marginTop: '12rem' }}>
                <div className="conteudo">
                    <h2>&#10074;Projetos DEV...</h2>
                    <Carrossel items={devItems} id="carouselDEV" />
                    <h6 className='observacao-direcionamento'><em>CLIQUE NA IMAGEM PARA ACESSAR O REPOSITÓRIO GITHUB</em></h6>
                </div>
            </section>

            <section id="MKT" className="main-section">
                <div className="conteudo">
                    <h2>&#10074;Marketing Digital...</h2>
                    <Carrossel items={mktItems} id="carouselMKT" />
                </div>
            </section>
        </Layout>
    );
};

export default Portfolio;