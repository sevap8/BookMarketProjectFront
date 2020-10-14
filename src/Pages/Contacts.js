import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1> Contact us</h1>
                <Form style={{width: '600px'}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"></Form.Control>
                            <Form.Text>
                            Some text to send contacts;
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Text 1</Form.Label>
                        <Form.Control as="textarea" rows="3"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me!"></Form.Check>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

