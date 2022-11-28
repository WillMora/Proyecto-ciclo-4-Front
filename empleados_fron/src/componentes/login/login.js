import React from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import app from "../../app.json"
import './login.css';
import { isNull } from 'util'
import Cookies from "universal-cookie";
import { calculateExpiracionSesion } from '../helper/helper';
import Loading from '../loading/loading';

const { APIHOST } = app;
const cookies = new Cookies();


export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass:'',
        }
    }
    // Creacion de metodo
    iniciarSesion(){

        this.setState({loading: true });

        axios.post(`${APIHOST}/usuarios/login`, {
            usuario: this.state.usuario, 
            pass: this.state.pass,
        })
        
        .then((response) => {
            if (isNull (response.data.token)){
                alert("usuario y/o contraseña invalido");
            }else{
                cookies.set('_s', response.data.token, {
                    path: '/',
                    expires: calculateExpiracionSesion(),
                });

                this.props.history.push(window.open('/empleados'));
                //this.props.history.push('/home');
                
            }

            this.setState({loading: false });
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading: false });
        })

    }

    render() {
        return (
            <Container id="login-container">
                <Loading show={this.state.loading} />
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

