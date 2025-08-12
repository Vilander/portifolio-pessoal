import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
      setQuery(''); // Limpa o campo após a busca
    }
  };

  return (
    // AQUI: Adicionamos classes para controlar a direção do flex
    <Form className="d-flex flex-column flex-md-row align-items-center search-bar-form" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Digite aqui..."
        className="w-100 mb-2 mb-md-0 me-md-2" 
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      {/* AQUI: Classes para largura responsiva do botão */}
      <Button className="btn btn-outline-success w-100 w-md-auto" variant="outline-success" type="submit">
        Pesquisa
      </Button>
    </Form>
  );
};

export default SearchBar;