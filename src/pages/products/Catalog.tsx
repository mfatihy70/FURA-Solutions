import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "@/styles/Catalog.css";
import {
  cableChannel,
  cableGland,
  cableMarking,
  trainScale,
  customCable,
} from "@/assets/images/products/import";

const Catalog: React.FC = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.cursor = hovered !== null ? "pointer" : "auto";
  }, [hovered]);

  const products = [
    { image: cableChannel, name: t("product.cableChannel"), price: "10€" },
    { image: cableGland, name: t("product.cableGland"), price: "20€" },
    { image: cableMarking, name: t("product.cableMarking"), price: "30€" },
    { image: trainScale, name: t("product.trainScale"), price: "40€" },
    { image: customCable, name: t("product.customCable"), price: "50€" },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col key={index} sm={10} md={6} lg={4} className="mb-4">
            <Card
              className={`product-card ${hovered === index ? "hovered" : ""}`}
              onPointerOver={() => setHovered(index)}
              onPointerOut={() => setHovered(null)}
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">{t("product.addToCart")}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalog;
