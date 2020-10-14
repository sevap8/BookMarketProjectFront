import React, {Component} from "react";
import { Button, Container, FormControl, Navbar, NavLink, Nav, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo192.png"
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Contacts from '../Pages/Contacts';
import Some from '../Pages/Some';
import Сustomer from '../Pages/Сustomer';
import TransactionHistory from '../Pages/TransactionHistory';
import Book from '../Pages/Book';

export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="35"
                            width="35"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"> 
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/aboutUs">Book</Nav.Link>
                            <Nav.Link href="/some">Writer</Nav.Link>
                            <Nav.Link href="/сustomer">Сustomer</Nav.Link>
                            <Nav.Link href="/transactionHistory">History</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aboutUs" component={AboutUs} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/some" component={Some} />
                    <Route exact path="/сustomer" component={Сustomer} />
                    <Route exact path="/transactionHistory" component={TransactionHistory} />
                </Switch>
            </Router>
            </>
        );
    }
}