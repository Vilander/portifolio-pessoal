import React, { useState, useEffect, useCallback } from 'react'; // Importe useCallback
import { useLocation } from 'react-router-dom';
import './SearchResults.css'; // Você pode criar um CSS específico para os resultados

const SearchResults = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função auxiliar para criar o snippet (trecho do texto)
  const createSnippet = (content, lowerCaseQuery) => {
    const index = content.toLowerCase().indexOf(lowerCaseQuery);

    if (index === -1) {
      return content.substring(0, 180) + "...";
    }

    const start = Math.max(0, index - 80);
    const end = Math.min(content.length, index + lowerCaseQuery.length + 100);

    let snippet = content.substring(start, end);

    if (start > 0) {
      snippet = "..." + snippet;
    }
    if (end < content.length) {
      snippet = snippet + "...";
    }

    return snippet;
  };

  // Função principal para realizar a busca, agora memorizada com useCallback
  const performSearch = useCallback(async (searchQuery) => {
    setLoading(true);
    setError(null);
    setResults([]);

    // Lista das páginas onde vamos procurar a palavra.
    // ATENÇÃO: Para que `fetch` funcione, esses arquivos HTML (sobre.html, etc.)
    // precisam estar na pasta 'public' do seu projeto React, ou acessíveis via URL.
    const pages = ["sobre.html", "contato.html", "portifolio.html", "blog.html"];

    const lowerCaseQuery = searchQuery.toLowerCase();

    try {
      const pagePromises = pages.map(async (pageUrl) => {
        try {
          // Ajuste o caminho conforme a estrutura da sua pasta 'public'
          // Ex: se os arquivos estão em public/Pages/, use `/Pages/${pageUrl}`
          const response = await fetch(`/Pages/${pageUrl}`);
          if (!response.ok) {
            throw new Error(`Erro ao carregar a página: ${pageUrl} (Status: ${response.status})`);
          }
          const html = await response.text();

          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");

          const pageContent = doc.querySelector("main")?.innerText || doc.body.innerText;
          const pageTitle = doc.querySelector("title")?.innerText || pageUrl;

          if (pageContent.toLowerCase().includes(lowerCaseQuery)) {
            const snippet = createSnippet(pageContent, lowerCaseQuery);
            return {
              title: pageTitle.replace("Vilander Costa", "").trim(),
              url: `/Pages/${pageUrl}`, // Caminho para a página no React Router
              snippet: snippet.replace(
                new RegExp(searchQuery, "gi"),
                `<mark>${searchQuery}</mark>`
              ),
            };
          }
          return null;
        } catch (innerError) {
          console.error(`Falha ao processar ${pageUrl}:`, innerError);
          return null;
        }
      });

      const foundResults = (await Promise.all(pagePromises)).filter((result) => result !== null);
      setResults(foundResults);
    } catch (outerError) {
      console.error("Erro geral na busca:", outerError);
      setError("Ocorreu um erro ao realizar a busca. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setResults]); // As dependências de performSearch são os setters de estado

  // useEffect para extrair a query da URL e iniciar a busca
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const currentQuery = urlParams.get("query");
    if (currentQuery) {
      setQuery(currentQuery);
      performSearch(currentQuery);
    } else {
      setQuery('');
      setResults([]);
      setLoading(false);
    }
  }, [location.search, performSearch]); // performSearch agora é uma dependência

  return (
    <div className="container mx-auto p-4 main-section"> {/* Adicione classes Tailwind ou Bootstrap para estilização */}
      <h2 className="text-2xl font-bold mb-4">
        Resultados da pesquisa para: "<span className="text-blue-600" id="search-query-display">{query}</span>"
      </h2>

      <div id="results-container">
        {loading && <p>Pesquisando...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && results.length === 0 && (
          <p>Nenhum resultado encontrado para sua busca.</p>
        )}
        {!loading && !error && results.length > 0 && (
          <ul className="search-results-list list-none p-0">
            {results.map((result, index) => (
              <li key={index} className="search-result-item bg-white p-4 mb-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={result.url} className="text-blue-700 hover:underline" dangerouslySetInnerHTML={{ __html: result.title }}></a>
                </h3>
                <p className="snippet text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                <a href={result.url} className="result-link text-sm text-green-600 hover:underline">
                  {window.location.origin}{result.url}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
