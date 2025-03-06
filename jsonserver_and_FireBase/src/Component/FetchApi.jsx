import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";

const FetchApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get("https://api.escuelajs.co/api/v1/products");
            setData(res.data);
        } catch (err) {
            setError("Failed to fetch data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-4">
            {loading && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}

            {error && (
                <Alert variant="danger" className="text-center">
                    {error}
                    <div className="mt-2">
                        <Button variant="primary" onClick={fetchData}>Retry</Button>
                    </div>
                </Alert>
            )}

            {!loading && !error && (
                <Row>
                    {data.map((item, index) => (
                        <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={item.images} alt="No Image" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.slug}</Card.Text>
                                    <Card.Text>${item.price}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default FetchApi;
