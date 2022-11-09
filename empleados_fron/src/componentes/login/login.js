import React from 'react';
//import { Container } from 'react-bootstrap';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './login.css';
import axios from 'axios';


export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            pass:'',
        }
    }
    // Creacion de metodo
    iniciarSesion(){
        axios.
        
        alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);
        

    }

    render() {
        return (
            <Container id="login-container">
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar sesion</h2>
                        </Row>
                        <Row>
                            
                            <Col // Definir el tamaño que manejaran los recuadros del login.
                                sm="12"
                                xs="12"
                                md={{span:4, offset: 4}}
                                lg={{span:4, offset: 4}}
                                xl={{span:4, offset: 4}}
                                >
                                <Form>
                                    <Form.Group> 
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control 
                                            onChange={(e) =>
                                                this.setState({usuario: e.target.value})
                                            }
                                        />
                                        { // Mostrar si se está recuperando los datos
                                           // this.state.usuario 
                                        }
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            onChange={(e) =>
                                                this.setState({pass: e.target.value})
                                            }
                                        />
                                        
                                        {// Mostrar si se está recuperando los datos
                                            //this.state.pass
                                        }
                                    </Form.Group>

                                    <Button
                                        variant="info"
                                        //type="submit" 
                                        onClick= {()=> {
                                             this.iniciarSesion();
                                        }}
                                        >
                                        Ingresar
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

