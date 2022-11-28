import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from '../../loading/loading';
import MessagePrompt from "../../prompts/message";

export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message:{
                text: "",
                show: false
            },
            loading: false,
            empleados: {
                nombres: "",
                apellidos: "",
                documento: "",
                telefono: "",
                correo: "",
                direccion: "",
            },
        };
        this.onExitedMessage =  this.onExitedMessage.bind(this);
    }

    setValue(index, value) {
        this.setState({
            empleados: {
                ...this.state.empleados,
                [index]: value,
            },
        });
    }

    guardarEmpleados(){
        this.setState({ loading: true });
        request
        .post('/empleados', this.state.empleados)
        .then((response) => {
            if (response.data.exito){
                this.setState({
                    rediret: response.data.exito,
                    message: {
                        text: response.data.msg,
                        show: true,
                    },
                });
            }
            this.setState({ loading: false });
            
        })
        .catch((err) => {
            console.error(err);
            this.setState({ loading: true});
        });
    }

    onExitedMessage(){
        if (this.state.rediret) this.props.changeTab('buscar');
    }

    render() {
        return (
            <Container id="empleados-crear-container">
                <MessagePrompt 
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={1000}
                    onExited={this.onExitedMessage}
                />
                <Loading show={this.state.loading}/>
                <Row>
                    <h1>Crear Empledos</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('nombres', e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('apellidos', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('documento', e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('telefono', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('correo', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('direccion', e.target.value)} />
                        </Form.Group>

                        <Button variant="info" onClick={() => console.log(this.guardarEmpleados())}>
                            Guardar empleado
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

