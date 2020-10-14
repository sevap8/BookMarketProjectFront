import React, { Component } from 'react';
import { Col, Container, Row, Media, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

class Book extends Component {
    state = {
        writers: []
    };

    componentDidMount = () => {

        axios({
            url: '/api/writer',
            method: 'GET'
        })

        .then((response) => {
            console.log('Data: ', response.data);
            this.setState({writers: response.data});
        })
        .catch(() => {
            alert('Oooops!!!');
        });
    };
    render() {
        return (
            
                <Container>
                    <Row>
                    <Col md="9">
                    {this.state.writers.map((writer, index) => (
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={writer.img}
                            />
                            <Media.Body>
                            <h4>{writer.name} {writer.surname}</h4>
                                <p>{writer.info}</p>
                            </Media.Body>
                        </Media>
                            ))}
                                </Col> 

                        <Col md="3">
                            <h4 className="text-center mt-5">Categories</h4>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Some1</ListGroup.Item>
                                    <ListGroup.Item>Some2</ListGroup.Item>
                                    <ListGroup.Item>Some3</ListGroup.Item>
                                    <ListGroup.Item>Some4</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default Book;