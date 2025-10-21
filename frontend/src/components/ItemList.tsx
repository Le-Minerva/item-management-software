import React from "react";
import type { Item } from "../types";

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
        >
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>联系人: {item.contact}</p>
          {item.id !== undefined && (
            <button onClick={() => onDelete(item.id!)}>删除</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
