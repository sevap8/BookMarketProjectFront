import axios from 'axios';
import React, { Component } from 'react';
import PostForm from '../Components/PostForm';
import App from '../App';
import { Col, Container, Row, Media, Card, ListGroup } from 'react-bootstrap';

class Сustomer extends React.Component {

    state = {
        сustomers: []
    }; 
    constructor(){
        super();
    }

    componentDidMount = () => {

        axios({
            url: '/api/сustomer',
            method: 'GET'
        })

        .then((response) => {
            console.log('Data: ', response.data);
            this.setState({сustomers: response.data});
        })
        .catch(() => {
            alert('Oooops!!!');
        });
    };


    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <Col md="9">
                            <p></p>
                             <table class="table">
                                <thead class>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.сustomers.map((сustomer, index) => (
                                <tr>
                                    <td>{сustomer.id}</td>
                                    <td>{сustomer.login} </td>
                                    <td>{сustomer.password} </td>     
                                </tr> 
                                ))}
                                </tbody>
                                </table>
                        </Col>
                        <Col md="3">
                        <PostForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Сustomer;