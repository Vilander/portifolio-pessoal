import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import SearchBar from './SearchBar';


import logo from '../assets/images/logo_vertical_VC_white.png';

function Navbar() {
    return (
        <header className="cabecalho-principal">
            <div className="conteudo-cabecalho">
                <figure className="logo">
                    <Link to="/">
                        <img className="icone-sup" src={logo} alt="Logo principal - Vilander Costa" />
                    </Link>
                </figure>

                <nav className="redes-topo" aria-label="Redes sociais">
                    <h2 className="visually-hidden">Redes sociais</h2>
                    <a href="https://www.linkedin.com/in/vilander-costa/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/vilandercosta/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://github.com/Vilander" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </nav>
            </div>

            <div className="menu-superior">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">&lt;HOME&gt;</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
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
                                        <li><HashLink className="dropdown-item" to="/sobre#bio-pessoal">Hello Word</HashLink></li>
                                        <li><HashLink className="dropdown-item" to="/sobre#formacao-academica">Formação Acadêmica</HashLink></li>
                                        <li><HashLink className="dropdown-item" to="/sobre#cursos">Cursos complementares</HashLink></li>
                                        <li><HashLink className="dropdown-item" to="/sobre#skills">Habilidades Técnicas</HashLink></li>
                                        <li><HashLink className="dropdown-item" to="/sobre#CLT">Experiências Profissionais</HashLink></li>
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
                                        &lt;PORTFÓLIO&gt;
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><HashLink className="dropdown-item" to="/portfolio#DEV">Projetos DEV</HashLink></li>
                                        <li><HashLink className="dropdown-item" to="/portfolio#MKT">Marketing Digital</HashLink></li>
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
                                        <li><HashLink className="dropdown-item" to="/contato#formulario">Fale Comigo</HashLink></li>
                                        <li><HashLink className="dropdown-item" to="/contato#rede">Minhas Redes</HashLink></li>
                                        <li><HashLink className="dropdown-item" to="/contato#curriculo">Download Currículo</HashLink></li>
                                    </ul>
                                </li>
                            </ul>

                            {/* FORMULÁRIO DE BUSCA */}
                            {/* <form className="d-flex" role="search" action="/search-results" method="GET">
                                <input
                                    className="form-control me-2"
                                    name="query"
                                    type="search"
                                    placeholder="Digite aqui..."
                                    aria-label="Search"
                                    required
                                />
                                <button className="btn btn-outline-success" type="submit">Pesquisa</button>
                            </form> */}
                            <SearchBar />

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
