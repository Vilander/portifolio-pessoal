import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { searchableContent } from '../search-data'; // Importa os dados

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const foundResults = searchableContent.filter(page =>
        page.content.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(foundResults);
    }
  }, [query]);

  return (
    <Layout>
      <div className="search-results-container">
        <h2>Resultados da pesquisa para: "<span>{query}</span>"</h2>
        <div id="results-container">
          {results.length > 0 ? (
            <ul className="search-results-list">
              {results.map(result => (
                <li key={result.path} className="search-result-item">
                  <h3><Link to={result.path}>{result.title}</Link></h3>
                  <p className="snippet">
                    {/* Simplesmente mostra um trecho inicial, pode ser melhorado */}
                    {result.content.substring(0, 150)}...
                  </p>
                  <Link to={result.path} className="result-link">
                    Acessar a página
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum resultado encontrado para sua busca.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;