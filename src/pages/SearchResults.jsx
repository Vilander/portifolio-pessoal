import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { searchData } from '../data/search-data';
import Layout from '../components/Layout';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const createSnippet = (content, lowerQuery) => {
    const index = content.toLowerCase().indexOf(lowerQuery);
    if (index === -1) return content.substring(0, 180) + "...";

    const start = Math.max(0, index - 80);
    const end = Math.min(content.length, index + lowerQuery.length + 100);
    let snippet = content.substring(start, end);

    if (start > 0) snippet = "..." + snippet;
    if (end < content.length) snippet += "...";

    return snippet.replace(new RegExp(lowerQuery, "gi"), match => `<mark>${match}</mark>`);
  };

  const performSearch = useCallback((searchQuery) => {
    setLoading(true);
    setError(null);
    setResults([]);

    const lowerQuery = searchQuery.toLowerCase();

    const foundResults = searchData
      .filter(item => item.content.toLowerCase().includes(lowerQuery))
      .map(item => ({
        ...item,
        snippet: createSnippet(item.content, lowerQuery)
      }));

    setResults(foundResults);
    setLoading(false);
  }, []);

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
  }, [location.search, performSearch]);

  return (
    <Layout>
      <div className="container mx-auto p-4 main-section">
        <h2 className="text-2xl font-bold mb-4">
          Resultados da pesquisa para: "<span className="text-blue-600">{query}</span>"
        </h2>

        <div id="results-container">
          {loading && <p>Pesquisando...</p>}
          {error && <p className="text-danger">{error}</p>}
          {!loading && !error && results.length === 0 && (
            <p>Nenhum resultado encontrado para sua busca.</p>
          )}
          {!loading && !error && results.length > 0 && (
            <ul className="search-results-list list-unstyled">
              {results.map((result, index) => (
                <li key={index} className="search-result-item bg-light p-4 mb-4 rounded shadow-sm">
                  <h3 className="h5 mb-2">
                    <a href={result.url} className="text-primary text-decoration-none" dangerouslySetInnerHTML={{ __html: result.title }}></a>
                  </h3>
                  <p className="snippet text-dark" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                  <a href={result.url} className="result-link text-muted small">
                    {window.location.origin}{result.url}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
