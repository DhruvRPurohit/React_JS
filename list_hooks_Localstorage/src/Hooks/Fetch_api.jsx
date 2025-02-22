import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FetchApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((res) => setData(res.data))
            .catch((err) => console.log("The error is", err));
    }, []);

    return (
        <Container>
            <Row>
                {data.map((item, index) => (
                    <Col key={index} md={4} sm={6} xs={12} className='mb-4'>
                        <Card style={{ width: '18rem' }}>
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
        </Container>
    );
};

export default FetchApi;
