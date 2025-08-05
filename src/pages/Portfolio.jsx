import React from 'react';
import Layout from '../components/Layout';
import Carrossel from '../components/Carrossel';

// Importe as imagens dos projetos DEV
const devItems = [
    {
        image: '../assets/images/portfolio-print.PNG',
        alt: 'Pagina Pessoal',
        link: 'https://github.com/Vilander/uc5-projeto-integrador-frontend-senac'
    },
    {
        image: '../assets/images/vida-ativa.PNG',
        alt: 'Clinica Vida-Ativa - trabalho academico',
        link: 'https://github.com/Vilander/vida-ativa'
    },
    {
        image: '../assets/images/app-toaqui.PNG',
        alt: 'APP Mural de Empreendedorismo Social Senac',
        link: 'https://github.com/Vilander/toAqui'
    }
];

// Importe as imagens de Marketing
const mktItems = [
    { image: '../assets/images/MKT0001.jpg', alt: 'social media' },
    { image: '../assets/images/MKT0002.JPG', alt: 'fotografia digital' },
    { image: '../assets/images/MKT0003.png', alt: 'endomarketing' },
    // ... adicione os outros
];


const Portfolio = () => {
    return (
        <Layout>
            <section id="DEV" className="main-section" style={{ marginTop: '12rem' }}>
                <div className="conteudo">
                    <h2>&#10074;Projetos DEV...</h2>
                    <Carrossel items={devItems} id="carouselDEV" />
                    <h6 style={{ color: '#9BA0AA' }}><em>CLIQUE NA IMAGEM PARA ACESSAR O REPOSITÓRIO GITHUB</em></h6>
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