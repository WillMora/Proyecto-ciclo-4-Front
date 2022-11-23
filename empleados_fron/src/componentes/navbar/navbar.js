import React from "react";
import {Container, Nav, Navbar, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; 


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        MediClient<span id="usuario-sub-branm"></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>*/}
                         </Nav>
                        <DropdownButton variant="info"  title="Opciones"> 
                             {/*Se agrega el Dropdown.header para añadir un nombre de usuario
                            y una fotografia*/}
                            <Dropdown.Header id="dropdown-header" >
                                <Row>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Row>
                                <Row>#USUARIO#</Row>
                            </Dropdown.Header>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
                            {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

