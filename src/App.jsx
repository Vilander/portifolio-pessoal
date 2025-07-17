import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {


  return (
    <>
      <header class="cabecalho-principal">
        <div class="conteudo-cabecalho">
          <figure class="logo">
            <a href="../index.html"><img class="icone-sup" src="\src\assets\logo_vertical_VC_white.png"
              alt="Logo principal - Vilander Costa"></img></a>
          </figure>

          <nav class="redes-topo" aria-label="Redes sociais">
            <h2 class="visually-hidden">Redes sociais</h2>
            <a href="https://www.linkedin.com/in/vilander-costa/" target="_blank" rel="external"><i
              class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/vilandercosta/" target="_blank" rel="external"><i
              class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/Vilander" target="_blank" rel="external"><i class="fa-brands fa-github"></i></a>
          </nav>
        </div>

        <div class="menu-superior">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="../index.html">&lt;HOME&gt;</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="sobre.html" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      &lt;SOBRE MIM&gt;
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/Pages/sobre.html#bio-pessoal">Hello Word</a></li>
                      <li><a class="dropdown-item" href="/sobre.html#formação-academica">Formação Acadêmica</a></li>
                      <li><a class="dropdown-item" href="/sobre.html#cursos">Cursos complementares</a></li>
                      <li><a class="dropdown-item" href="/sobre.html#skills">Habilidade Técnicas</a></li>
                      <li><a class="dropdown-item" href="/sobre.html#CLT">Experiências Profissionais</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      &lt;PORTIFÓLIO&gt;
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="portifolio.html#DEV">Projetos DEV</a></li>
                      <li><a class="dropdown-item" href="portifolio.html#MKT">Marketing Digital</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      &lt;BLOG&gt;
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="blog.html">Eventos</a></li>
                      <li><a class="dropdown-item" href="blog.html">Dicas e Notícias</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      &lt;CONTATO&gt;
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="contato.html#formulario">Fale Comigo</a></li>
                      <li><a class="dropdown-item" href="contato.html#rede">Minhas Redes</a></li>
                      <li><a class="dropdown-item" href="contato.html#curriculo">Download Currículo</a></li>
                    </ul>
                  </li>

                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Digite aqui..." aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Pesquisa</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default App
