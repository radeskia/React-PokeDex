import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../assets/cards.css";
import axios from "axios";

const DashboardCards = (props) => {
  const [data2, setData2] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.data.name}`
      );
      setData2(response.data);
    }
    fetchData();
  }, []);

  return data2 ? (
    <Col className="my-2" style={{ width: "11rem" }}>
      <Card className="card-shadow bg-dark text-light">
        <Card.Img
          className="card-img"
          variant="top"
          src={data2.sprites.front_default}
        />
        <Card.Body>
          <Card.Title className="text-center" style={{fontSize:'16px'}}>{props.data.name.toUpperCase()}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ) : null;
};

export default DashboardCards;
