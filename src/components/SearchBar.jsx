import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';

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
    <Form className="d-flex search-bar-form" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Digite aqui..."
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <Button className="btn btn-outline-success" variant="outline-success" type="submit">Pesquisa</Button>
    </Form>
  );
};

export default SearchBar;