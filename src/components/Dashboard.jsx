import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardCards from "./DashboardCards";
import { Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-dark">
      <Container className="d-flex flex-wrap justify-content-center">
        <Row
          xs={2}
          md={3}
          lg={4}
          xl={12}
          className="justify-content-center py-5"
        >
          {data &&
            data.results.map((x, index) => {
              return <DashboardCards data={x} key={index} />;
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
