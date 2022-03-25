import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardCards from "./DashboardCards";
import { Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "./../assets/pagination.css";

const Dashboard = () => {
    const [data, setData] = useState();

    const [pageNumber, setPageNumber] = useState(0);
    const pokemonPerPage = 24;
    const pastPokemon = pageNumber * pokemonPerPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
            );
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
                    {data
                        ? data.results
                              .slice(pastPokemon, pastPokemon + pokemonPerPage)
                              .map((x, index) => {
                                  return (
                                      <DashboardCards
                                          data={x}
                                          key={index}
                                          pageNumber={pageNumber}
                                      />
                                  );
                              })
                        : null}

                    {data && (
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            pageCount={Math.ceil(
                                data.results.length / pokemonPerPage
                            )}
                            onPageChange={changePage}
                            containerClassName={"paginationButtons"}
                            previousLinkClassName={"previousButton"}
                            nextLinkClassName={"nextButton"}
                            activeClassName={"paginationActive"}
                        />
                    )}
                </Row>
            </Container>
        </div>
    );
};
/*

*/
export default Dashboard;
