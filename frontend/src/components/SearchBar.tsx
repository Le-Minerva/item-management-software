import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css'; // 引入自定义CSS

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <Form onSubmit={handleSubmit} className="search-bar-container">
      <InputGroup className="search-bar">
        <Form.Control
          placeholder="搜索物品"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="search-input"
        />
        <Button type="submit" className="search-button">
          搜索
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
