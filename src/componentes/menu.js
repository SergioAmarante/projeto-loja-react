import React from 'react';
import './menu.css';

import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

function Basemenu(props){
    
    const {location} = props;

    return(
        <Navbar className="menu navbar-dark" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link as={Link} href="/compras" to="/compras">Pagina Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos "to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/paginafinal" to="/paginafinal">Formas de Pagamento</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contatos "to="/contatos">Contatos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(Basemenu);

export default Menu;