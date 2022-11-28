import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from '../../loading/loading';
import MessagePrompt from "../../prompts/message";
import './empleados.css';
import ConfirmationPrompts from "../../prompts/confirmation";

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdEmpleado(),
            rediret: false,
            message: {
                text: "",
                show: false
            },
            confirmation: {
                title: "Modificar empleado",
                text: "¿Desea modificar el empleado?",
                show: false,
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
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.getEmpleado();
    }

    getEmpleado() {
        this.setState({ loading: true });
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                //console.log(response);
                this.setState({
                    empleados: response.data,
                    loading: false,

                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }



    setValue(index, value) {
        this.setState({
            empleados: {
                ...this.state.empleados,
                [index]: value,
            },
        });
    }

    guardarEmpleados() {
        this.setState({ loading: true });
        request
            .put(`/empleados/${this.state.idEmpleado}`, this.state.empleados)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab('buscar');
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');
    }

    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }

    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.guardarEmpleados()
        );

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
                <ConfirmationPrompts
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h1>Editar Empledos</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control
                                value={this.state.empleados.nombres}
                                onChange={(e) => this.setValue('nombres', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                value={this.state.empleados.apellidos}
                                onChange={(e) => this.setValue('apellidos', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control
                                value={this.state.empleados.documento}
                                onChange={(e) => this.setValue('documento', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                value={this.state.empleados.telefono}
                                onChange={(e) => this.setValue('telefono', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                value={this.state.empleados.correo}
                                onChange={(e) => this.setValue('correo', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                value={this.state.empleados.direccion}
                                onChange={(e) => this.setValue('direccion', e.target.value)} />
                        </Form.Group>

                        <Button
                            variant="info"
                            onClick={() =>
                                this.setState({
                                    confirmation: { ...this.state.confirmation, show: true },
                                })
                            }
                        >
                            actualizar empleado
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

