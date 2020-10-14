import React, { Component } from 'react';
import axios from 'axios';
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap';

export default class AboutUs extends Component {
    state = {
        books: []
    };

    componentDidMount = () => {

        axios({
            url: '/api/book',
            method: 'GET'
        })

        .then((response) => {
            console.log('Data: ', response.data);
            this.setState({books: response.data});
        })
        .catch(() => {
            alert('Oooops!!!');
        });
    };

    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Евгений Онегин</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Вишнёвый сад</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Герой нашего времени</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Горе от ума</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth5">Лебедь, Щука и Рак</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourt6">Бахчисарайский фонтан</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourt7">Чайка</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>

                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://moscsp.ru/uploads/8d2f3058faf5d9abe8ad4be515971159.jpg" />
                                    <p>
                                        <h3> Евгений Онегин 1823г.</h3>
                                        <p> Евге́ний Оне́гин — роман в стихах русского писателя и поэта Александра Сергеевича Пушкина, написанный в 1823—1830 годах, одно из самых значительных произведений русской словесности.</p> 
                                    </p>
                                </Tab.Pane>    
                                <Tab.Pane eventKey="second">
                                    <img src="https://moscsp.ru/uploads/ee8006c5ccfd2029d1d5fca07d0e2b62.jpg" />
                                    <p>
                                    <h3> Вишнёвый сад 1823г</h3>
                                        <p>Вишнёвый сад - пьеса в четырёх действиях Антона Павловича Чехова, жанр которой сам автор определил как комедия</p>
                                    </p>
                                </Tab.Pane>     
                                <Tab.Pane eventKey="third">
                                    <img src="https://moscsp.ru/uploads/81b2710d003f98520fca6e7fbec8b32a.jpg" />
                                    <p>
                                    <h3> Герой нашего времени 1823г</h3>
                                        <p>Геро́й на́шего вре́мени — первый в русской прозе лирико-психологический роман, написанный Михаилом Юрьевичем Лермонтовым в 1838—1840 годах. Классика русской литературы. Впервые роман был издан в Санкт-Петербурге.</p>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://moscsp.ru/uploads/163dae57d3c2ca75d711fcf219eec4ec.jpg" />
                                    <p>
                                    <h3> Горе от ума 1823г</h3>
                                        <p>Го́ре от ума́ — комедия в стихах Александра Сергеевича Грибоедова. Она сочетает в себе элементы классицизма и новых для начала XIX века романтизма и реализма. Она описывает светское общество времен крепостного права и показывает жизнь 1808—1824 годов.</p>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth5">
                                    <img src="https://moscsp.ru/uploads/eaef45bc5f1695a3c9351fd77f19d97d.jpg" />
                                    <p>
                                    <h3>Лебедь, Щука и Рак 1814г</h3>
                                        <p>«Ле́бедь, Щука и Рак» — басня Ивана Андреевича Крылова, написанная в 1814 году и опубликованная в сборнике «Новые басни».</p>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourt6">
                                    <img src="https://moscsp.ru/uploads/de2a6288148d12049631c3beb577e2e8.jpg" />
                                    <p>
                                    <h3>Бахчисарайский фонтан 1821г</h3>
                                        <p>«Бахчисара́йский фонта́н» — вторая южная байроническая поэма Александра Сергеевича Пушкина, написанная им в 1821—1823 годах (время южной ссылки) под впечатлением от посещения Бахчисарайского дворца крымских ханов.</p>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourt7">
                                    <img src="https://moscsp.ru/uploads/707ce5e5210b86c1a24e2ca3e7dde44d.jpg" />
                                    <p>
                                    <h3>Чайка 1895г</h3>
                                        <p>«Ча́йка» — пьеса в четырёх действиях Антона Чехова, написанная в 1895—1896 годах и впервые опубликованная в журнале «Русская мысль», в № 12 за 1896 год. Премьера состоялась 17 октября 1896 года на сцене петербургского Александринского театра. Стилизованный силуэт чеховской чайки по эскизу Фёдора Шехтеля стал эмблемой МХТ.</p>
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Tab.Container>

                            <div class="card">
                                <div class="card-body">
                                <h2>Here you can check the availability of books in the store.</h2>
                                </div>
                            </div>

                            
                    <Row>
                        <Col md="12">
                            <p></p>
                             <table class="table">
                                <thead class>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.books.map((book, index) => (
                                <tr>
                                    <td>{book.id}</td>
                                    <td>{book.name} </td>
                                    <td>{book.year} </td>
                                    <td>{book.cost} </td> 
                                    <td>{book.amount} </td>     
                                </tr> 
                                ))}
                                </tbody>
                                </table>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

