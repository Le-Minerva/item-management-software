import React, { useState, useEffect } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import type { Item } from "./types";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");

  const fetchItems = async (searchTerm = "") => {
    const response = await fetch(`http://localhost:5000/api/items?search=${searchTerm}`);
    const data: Item[] = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item: Item) => {
    await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchItems(search);
  };

  const deleteItem = async (id: number) => {
    await fetch(`http://localhost:5000/api/items/${id}`, { method: "DELETE" });
    fetchItems(search);
  };

  const handleSearch = (term: string) => {
    setSearch(term);
    fetchItems(term);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>物品复活平台</h1>
      <SearchBar onSearch={handleSearch} />
      <ItemForm onAdd={addItem} />
      <ItemList items={items} onDelete={deleteItem} />
    </div>
  );
};

export default App;
