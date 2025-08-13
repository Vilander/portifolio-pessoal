# Portfólio Pessoal - Documentação Técnica

Este documento fornece uma visão técnica detalhada do projeto de portfólio pessoal. O objetivo é servir como um guia completo para desenvolvedores, abordando desde a arquitetura e tecnologias utilizadas até a instalação e execução do projeto.

## 1. Visão Geral do Projeto

O projeto é uma aplicação web de página única (SPA) que serve como portfólio pessoal. Foi desenvolvido para apresentar informações sobre o autor, incluindo suas habilidades, experiências, projetos e um meio para contato. A aplicação é moderna, interativa e totalmente responsiva, construída com foco em boas práticas de desenvolvimento e usabilidade.

## 2. Estrutura do Projeto

A estrutura de diretórios foi organizada para promover a modularidade e a manutenibilidade do código.

```
portifolio-pessoal/
├── src/
│   ├── assets/           # Arquivos estáticos como imagens e ícones
│   ├── components/       # Componentes React reutilizáveis (ex: Navbar, Footer)
│   ├── pages/            # Componentes que representam as páginas da aplicação (ex: Home, Sobre)
│   ├── styles/           # Arquivos de estilização globais e específicos (Sass/CSS)
│   ├── data/             # Dados estáticos (mock data) para funcionalidades como busca
│   ├── App.jsx           # Componente raiz que gerencia as rotas
│   ├── main.jsx          # Ponto de entrada da aplicação React
│   └── index.css         # Estilos globais
├── public/               # Arquivos públicos que não passam pelo processo de build
├── .eslintrc.cjs         # Arquivo de configuração do ESLint
├── .gitignore            # Arquivos e pastas a serem ignorados pelo Git
├── package.json          # Metadados do projeto e lista de dependências
└── vite.config.js        # Arquivo de configuração do Vite
```
## 3. Tecnologias e Dependências

O projeto utiliza um conjunto de tecnologias modernas para o desenvolvimento frontend. As versões exatas estão listadas abaixo, conforme o arquivo `package.json`.

### 3.1. Dependências de Produção (`dependencies`)

| Pacote | Versão | Descrição |
| :--- | :--- | :--- |
| **React** | `^19.1.0` | Biblioteca principal para a construção da interface de usuário. |
| **React DOM** | `^19.1.0` | Pacote para renderização do React no DOM do navegador. |
| **React Router DOM** | `^7.7.1` | Para gerenciamento de rotas e navegação na aplicação. |
| **React Bootstrap** | `^2.10.10` | Componentes React pré-construídos baseados no Bootstrap. |
| **Bootstrap** | `^5.3.7` | Framework CSS para estilização e responsividade. |
| **React Icons** | `^5.5.0` | Biblioteca de ícones populares para projetos React. |
| **Font Awesome** | `^7.0.0` | Biblioteca adicional de ícones. |
| **Sass** | `^1.89.2` | Pré-processador CSS para uma escrita de estilos mais avançada. |
| **React Router Hash Link**| `^2.4.3` | Permite a navegação para seções específicas da página (links âncora). |

### 3.2. Dependências de Desenvolvimento (`devDependencies`)

| Pacote | Versão | Descrição |
| :--- | :--- | :--- |
| **Vite** | `^7.0.4` | Ferramenta de build para desenvolvimento frontend rápido. |
| **ESLint** | `^9.30.1` | Linter para análise estática de código e padronização. |
| **@vitejs/plugin-react** | `^4.6.0` | Plugin oficial para integração do React com o Vite. |
| **@types/react** | `^19.1.8` | Definições de tipo TypeScript para o React. |
| **@types/react-dom** | `^19.1.6` | Definições de tipo TypeScript para o React DOM. |
| **eslint-plugin-react-hooks**| `^5.2.0` | Plugin do ESLint para reforçar as regras dos Hooks do React. |
| **eslint-plugin-react-refresh**|`^0.4.20` | Plugin do ESLint para o Fast Refresh do React com Vite. |
| **globals** | `^16.3.0` | Variáveis globais para configuração do ESLint. |

## 4. Funcionalidades Principais

* **Navegação por Rotas**: Utiliza o `react-router-dom` para criar uma navegação fluida entre as páginas: `Home`, `Sobre Mim`, `Portfólio`, `Blog`, `Contato` e uma página `404` para rotas inexistentes.
* **Busca Dinâmica**: Implementa uma funcionalidade de busca onde o termo pesquisado é passado como parâmetro na URL, exibindo os resultados de forma dinâmica.
* **Acessibilidade**: Contém uma barra de acessibilidade que permite ao usuário ativar **modo escuro**, **alto contraste** e **ajustar o tamanho da fonte**.
* **Responsividade**: O layout é totalmente responsivo, garantindo uma boa experiência de usuário em desktops, tablets e smartphones, graças ao uso do Bootstrap e de media queries em Sass.

## 5. Instalação e Execução

Para configurar e executar o projeto em um ambiente de desenvolvimento local, siga os passos abaixo.

### 5.1. Pré-requisitos

* **Node.js**: Certifique-se de ter o Node.js instalado.
* **npm** (geralmente instalado com o Node.js).

### 5.2. Passos para Instalação

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/Vilander/portifolio-pessoal.git](https://github.com/Vilander/portifolio-pessoal.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```sh
    cd portifolio-pessoal
    ```

3.  **Instale as dependências:**
    Este comando irá instalar todas as dependências listadas no `package.json`.
    ```sh
    npm install
    ```

## 6. Scripts Disponíveis

Os seguintes scripts estão definidos no `package.json` e podem ser executados com `npm run <nome-do-script>`:

* `"dev"`:
    * **Comando**: `vite`
    * **Descrição**: Inicia o servidor de desenvolvimento do Vite com Hot Module Replacement (HMR) ativado. Ideal para o desenvolvimento diário. A aplicação estará disponível em `http://localhost:5173`.

* `"build"`:
    * **Comando**: `vite build`
    * **Descrição**: Compila e otimiza a aplicação para produção. Os arquivos finais são gerados no diretório `dist/`.

* `"preview"`:
    * **Comando**: `vite preview`
    * **Descrição**: Inicia um servidor local para visualizar a versão de produção (após executar `npm run build`).

* `"lint"`:
    * **Comando**: `eslint .`
    * **Descrição**: Executa o ESLint para analisar todos os arquivos do projeto em busca de erros de código e inconsistências de estilo.

## 7. Licença

Este projeto está licenciado sob a **MIT License**.

## 8. Contato

* **Desenvolvido por**: Vilander Costa
* **LinkedIn**: [in/vilander-costa](https://www.linkedin.com/in/vilander-costa/)
* **GitHub**: [@Vilander](https://github.com/Vilander)