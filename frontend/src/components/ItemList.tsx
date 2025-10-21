import React from "react";
import type { Item } from "../types";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./ItemList.css"; // 引入自定义 CSS

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col md={6} lg={4} key={item.id} className="mb-4">
            <Card className="item-card">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>
                  <strong>联系人:</strong> {item.contact}
                </Card.Text>
                {item.id !== undefined && (
                  <div className="button-container">
                    <Button
                      variant="danger"
                      onClick={() => onDelete(item.id!)}
                    >
                      删除
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
