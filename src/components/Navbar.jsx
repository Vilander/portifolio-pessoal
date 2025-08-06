import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './Navbar.css'

import SearchBar from './SearchBar';

function Navbar() {
    return (
        <>
            <div className="cabecalho-principal">
                <div className="conteudo-cabecalho">
                    <figure className="logo">
                        <a href="../index.html"><img className="icone-sup" src="src\assets\images\logo_vertical_VC_white.png"
                            alt="Logo principal - Vilander Costa"/></a>
                    </figure>

                    <nav className="redes-topo" aria-label="Redes sociais">
                        <h2 className="visually-hidden">Redes sociais</h2>
                        <a href="https://www.linkedin.com/in/vilander-costa/" target="_blank" rel="external"><i
                            className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/vilandercosta/" target="_blank" rel="external"><i
                            className="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/Vilander" target="_blank" rel="external"><i className="fa-brands fa-github"></i></a>
                    </nav>
                </div>

                <div className="menu-superior">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href="../index.html">&lt;HOME&gt;</a> */}
                            <Link className="navbar-brand" to="/">&lt;HOME&gt;</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        {/* <a className="nav-link dropdown-toggle" href="Pages/sobre.html" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            &lt;SOBRE MIM&gt;
                                        </a> */}
                                        <Link className="nav-link dropdown-toggle" to="/Pages/sobre.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sobre Mim</Link>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#bio-pessoal">Hello Word</a></li>
                                            <li><a className="dropdown-item" href="#formação-academica">Formação Acadêmica</a></li>
                                            <li><a className="dropdown-item" href="#cursos">Cursos complementares</a></li>
                                            <li><a className="dropdown-item" href="#skills">Habilidade Técnicas</a></li>
                                            <li><a className="dropdown-item" href="#CLT">Experiências Profissionais</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/Pages/portifolio.html" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            &lt;PORTIFÓLIO&gt;
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="portifolio.html#DEV">Projetos DEV</a></li>
                                            <li><a className="dropdown-item" href="portifolio.html#MKT">Marketing Digital</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="Pages/blog.html" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            &lt;BLOG&gt;
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="blog.html">Eventos,Dicas e Notícias</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="Pages/contato.html" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            &lt;CONTATO&gt;
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="contato.html#formulario">Fale Comigo</a></li>
                                            <li><a className="dropdown-item" href="contato.html#rede">Minhas Redes</a></li>
                                            <li><a className="dropdown-item" href="contato.html#curriculo">Download Currículo</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search" action="search-results.html" method="GET">
                                    <input className="form-control me-2" name="query" type="search" placeholder="Digite aqui..."
                                        aria-label="Search" required />
                                        <button className="btn btn-outline-success" type="submit">Pesquisa</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar