import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader';
import './Home.css'

// Importe suas imagens
import fotoPerfil from '../assets/images/foto-perfil.png';
import card1 from '../assets/images/card1.webp';
import card2 from '../assets/images/card2.webp';
import card3 from '../assets/images/card3.webp';

const Home = () => {
    return (
        <Layout header={<HomeHeader />}>
            <section className="conteudo-destaque">
                <h2 className="developer-digital">
                    developer &<br />
                    digital marketing
                </h2>

                <nav className="menu-lateral" aria-label="Menu principal">
                    <Link className="botao-menu" to="/sobre">&lt;SOBRE MIM&gt;</Link>
                    <Link className="botao-menu" to="/portfolio">&lt;PORTFÓLIO&gt;</Link>
                    <Link className="botao-menu" to="/blog">&lt;BLOG&gt;</Link>
                    <Link className="botao-menu" to="/contato">&lt;CONTATO&gt;</Link>
                </nav>

                <figure className="perfil-destaque">
                    <img className="foto-destaque" src={fotoPerfil} alt="Foto de Vilander Costa em destaque" />
                </figure>
            </section>

            <section className="secao-destaque" aria-label="Seção de destaques">
                <div className="titulo-destaque">DESTAQUES</div>
                <section className="cards-destaque" aria-label="Artigos em destaque">
                    <article className="card">
                        <Link to="/sobre#CLT">
                            <img src={card1} alt="Imagem ilustrativa sobre experiências profissionais" />
                            <p className="texto-card">
                                Fotografia, marketing ou desenvolvimento? Saiba mais sobre minhas experiências profissionais e minhas formações.
                            </p>
                        </Link>
                    </article>
                    <article className="card">
                        <Link to="/sobre#CLT">
                            <img src={card2} alt="Imagem ilustrativa sobre experiências profissionais" />
                            <p className="texto-card">
                                Fotografia, marketing ou desenvolvimento? Saiba mais sobre minhas experiências profissionais e minhas formações.
                            </p>
                        </Link>
                    </article>
                    <article className="card">
                        <Link to="/sobre#CLT">
                            <img src={card3} alt="Imagem ilustrativa sobre experiências profissionais" />
                            <p className="texto-card">
                                Fotografia, marketing ou desenvolvimento? Saiba mais sobre minhas experiências profissionais e minhas formações.
                            </p>
                        </Link>
                    </article>
                    {/* Repita para os outros cards */}
                </section>
            </section>
        </Layout>
    );
};

export default Home;