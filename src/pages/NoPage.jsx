import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader';
import { GiCancel } from "react-icons/gi";
import './NoPage.css'
import './Home.css'

const NoPage = () => {
    return (
        <Layout header={<HomeHeader />}>
            <section className="pagina-404">
                <div className='nopage-text'>
                    <GiCancel />    
                    <h1>404</h1>
                    <h2>Página não encontrada</h2>
                </div>
                <button className='btn-404'><Link className="botao-no-page" to="/">&lt;VOLTAR PARA HOME&gt;</Link></button>
            </section>
        </Layout>
    );
};

export default NoPage;