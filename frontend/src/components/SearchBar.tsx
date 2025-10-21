import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="搜索物品"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">搜索</button>
    </form>
  );
};

export default SearchBar;
