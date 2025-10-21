import React, { useState } from "react";
import type { Item } from "../types";
import { Form, Button, Container } from "react-bootstrap";
import "./ItemForm.css"; 

interface ItemFormProps {
  onAdd: (item: Item) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, description, contact });
    setName("");
    setDescription("");
    setContact("");
  };

  return (
    <Container className="item-form-container">
      <Form onSubmit={handleSubmit} className="item-form p-4 shadow-sm rounded">
        <Form.Group className="mb-3" controlId="formItemName">
          <Form.Label>物品名称</Form.Label>
          <Form.Control
            type="text"
            placeholder="请输入物品名称"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="custom-input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formItemDescription">
          <Form.Label>物品描述</Form.Label>
          <Form.Control
            type="text"
            placeholder="请输入物品描述"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="custom-input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>联系人信息</Form.Label>
          <Form.Control
            type="text"
            placeholder="请输入联系人信息"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="custom-input"
          />
        </Form.Group>

        <Button type="submit" className="custom-button w-100">
          添加物品
        </Button>
      </Form>
    </Container>
  );
};

export default ItemForm;
