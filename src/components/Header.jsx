import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../assets/images/logo_vertical_VC_white.png';
import SearchBar from './SearchBar'; 

const Header = () => {
  return (
    <header className="cabecalho-principal">
      <div className="conteudo-cabecalho">
        <figure className="logo">
          <Link to="/"><img className="icone-sup" src={logo} alt="Logo principal - Vilander Costa" /></Link>
        </figure>
        <nav className="redes-topo" aria-label="Redes sociais">
          <a href="https://www.linkedin.com/in/vilander-costa/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/vilandercosta/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/Vilander" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </nav>
      </div>

      <div className="menu-superior">
        <Navbar expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">&lt;HOME&gt;</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="me-auto mb-2 mb-lg-0">
                <NavDropdown title="<SOBRE MIM>" id="sobre-dropdown">
                  <NavDropdown.Item as={Link} to="/sobre#bio-pessoal">Hello Word</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sobre#formacao-academica">Formação Acadêmica</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sobre#cursos">Cursos complementares</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sobre#skills">Habilidade Técnicas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sobre#CLT">Experiências Profissionais</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="<PORTIFÓLIO>" id="portfolio-dropdown">
                  <NavDropdown.Item as={Link} to="/portfolio#DEV">Projetos DEV</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/portfolio#MKT">Marketing Digital</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/blog">&lt;BLOG&gt;</Nav.Link>

                <NavDropdown title="<CONTATO>" id="contato-dropdown">
                  <NavDropdown.Item as={Link} to="/contato#formulario">Fale Comigo</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contato#rede">Minhas Redes</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contato#curriculo">Download Currículo</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <SearchBar />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;