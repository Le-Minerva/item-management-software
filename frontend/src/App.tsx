import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
    <Container fluid className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-primary">Item Management Platform</h1>
        </Col>
      </Row>

      <Row className="mb-3 justify-content-center">
        <Col md={12}>
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col md={12}>
          <Card className="p-3 shadow-sm">
            <ItemForm onAdd={addItem} />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="p-3 shadow-sm">
            <ItemList items={items} onDelete={deleteItem} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
