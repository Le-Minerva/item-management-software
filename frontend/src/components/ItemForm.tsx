import React, { useState } from "react";
import type { Item } from "../types";

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
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="物品名称"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="物品描述"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        placeholder="联系人信息"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <button type="submit">添加物品</button>
    </form>
  );
};

export default ItemForm;
