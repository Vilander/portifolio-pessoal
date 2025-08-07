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
                            alt="Logo principal - Vilander Costa" /></a>
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
                            <Link className="navbar-brand" to="/">&lt;HOME&gt;</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    {/* SOBRE MIM */}
                                    <li className="nav-item dropdown">
                                        <button
                                            className="nav-link dropdown-toggle btn"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Sobre Mim
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#bio-pessoal">Hello Word</a></li>
                                            <li><a className="dropdown-item" href="#formação-academica">Formação Acadêmica</a></li>
                                            <li><a className="dropdown-item" href="#cursos">Cursos complementares</a></li>
                                            <li><a className="dropdown-item" href="#skills">Habilidade Técnicas</a></li>
                                            <li><a className="dropdown-item" href="#CLT">Experiências Profissionais</a></li>
                                        </ul>
                                    </li>

                                    {/* PORTFÓLIO */}
                                    <li className="nav-item dropdown">
                                        <button
                                            className="nav-link dropdown-toggle btn"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            &lt;PORTIFÓLIO&gt;
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/portifolio#DEV">Projetos DEV</Link></li>
                                            <li><Link className="dropdown-item" to="/portifolio#MKT">Marketing Digital</Link></li>
                                        </ul>
                                    </li>

                                    {/* BLOG */}
                                    <li className="nav-item dropdown">
                                        <button
                                            className="nav-link dropdown-toggle btn"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            &lt;BLOG&gt;
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/blog">Eventos, Dicas e Notícias</Link></li>
                                        </ul>
                                    </li>

                                    {/* CONTATO */}
                                    <li className="nav-item dropdown">
                                        <button
                                            className="nav-link dropdown-toggle btn"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            &lt;CONTATO&gt;
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/contato#formulario">Fale Comigo</Link></li>
                                            <li><Link className="dropdown-item" to="/contato#rede">Minhas Redes</Link></li>
                                            <li><Link className="dropdown-item" to="/contato#curriculo">Download Currículo</Link></li>
                                        </ul>
                                    </li>
                                </ul>

                                {/* FORMULÁRIO DE BUSCA */}
                                <form className="d-flex" role="search" action="/search-results" method="GET">
                                    <input
                                        className="form-control me-2"
                                        name="query"
                                        type="search"
                                        placeholder="Digite aqui..."
                                        aria-label="Search"
                                        required
                                    />
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