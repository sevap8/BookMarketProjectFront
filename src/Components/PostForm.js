import React, { Component } from 'react';
import axios from 'axios';
import { Col, Container, Row, Media, Card, ListGroup } from 'react-bootstrap';

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('/api/сustomer', this.state)
        .then(response => {
            console.log(response)
            window.location.reload();
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        const{ login, password } = this.state
        return (
            <div>
            <form onSubmit={this.submitHandler}>
        <div class="card-body">
            <h5 class="card-title">Специальный заголовок</h5>
                <input type="text" name="login" value={login} onChange={this.changeHandler} />
                <br/>
                <br/>
                <input type="text" name="password" value={password} onChange={this.changeHandler}/>
                <br/>
                <br/>
            <button type="submit" class="btn btn-primary">Add</button>
        </div>
        </form>
        </div>
        );
    }
}

export default PostForm;