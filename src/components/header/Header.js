import React from 'react'
import '../header/Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    const cart = useSelector(state => state.Cart.cart)

    return (
        <>
            <section class="navbar-area">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src="images/ivory_logo 1.png" alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav>
                                <Nav.Link href="#action1">
                                    <Link to="/" class="nav-link ">
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to="/productpage" class="nav-link">
                                        Products
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to="/about" class="nav-link">
                                        About us
                                    </Link>
                                </Nav.Link>

                            </Nav>
                            <div className='cart-button-box'>
                                <div class="button">
                                    <Link to="cart">
                                        <i class="fa-solid fa-store"><sup>{cart.length}</sup></i>
                                    </Link>
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </>
    )
}
