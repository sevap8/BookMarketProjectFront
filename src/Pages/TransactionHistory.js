import React, { Component } from 'react';
import axios from 'axios';
import { Col, Container, Row, Media, Card, ListGroup } from 'react-bootstrap';
import Loader from '../Components/Loader';

class TransactionHistory extends Component {

    state = {
        transactions: []
    };


    componentDidMount = () => {
        axios({
            url: '/api/transaction',
            method: 'GET'
        })

        .then((response) => {
            console.log('Data: ', response.data);
            this.setState({transactions: response.data});
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
                                    <th scope="col">Data</th>
                                    <th scope="col">CustomerId</th>
                                    <th scope="col">BookId</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.transactions.map((transaction, index) => (
                                <tr>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.data} </td>
                                    <td>{transaction.сustomerId} </td>
                                    <td>{transaction.bookId} </td> 
                                    <td>{transaction.cost} </td>     
                                    <td>{transaction.quantity} </td>         
                                </tr> 
                                ))}
                                </tbody>
                                </table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TransactionHistory;