import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Jumbo extends Component {
    render () {
        return (
            <>
            <Jumbotron className="bg-img">
            <Container fluid>
            <h1 className="display-2 ">Scalable Solutions</h1>
            <p className="lead displa-2">Your Dapp, Smart contract and Web Development done correctly</p>
            </Container>
            </Jumbotron>
            </>
        ) 
    }
}

export default Jumbo;