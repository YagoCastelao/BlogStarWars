import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Details = () => {
  const { id, type } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(`https://swapi.tech/api/${type}/${id}`);
        const data = await response.json();
        setItemDetails(data.result.properties);
        setLoading(false);

        setImageUrl(
          `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`
        );
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        setLoading(false);
      }
    };

    getDetails();
  }, [id, type]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!itemDetails) {
    return <div>Detalhes não encontrados!</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card className="card-details">
            <Card.Body>
              <Card.Title>
                {itemDetails.name}
              </Card.Title>
              <Card.Text>
                <strong>Descripción:</strong> {itemDetails.description}
              </Card.Text>
              {Object.keys(itemDetails).map((key) => {
                if (key !== "name" && key !== "description") {
                  return (
                    <div key={key}>
                      <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                      {itemDetails[key]}
                    </div>
                  );
                }
                return null;
              })}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img
            src={imageUrl}
            alt={itemDetails.name}
            className="img-fluid rounded details-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
