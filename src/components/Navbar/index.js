import React, { useState } from 'react'
import { Col, Container, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { BsCart, BsSearch, BsList } from "react-icons/bs";
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    return (
        <Navbar bg="light" expand="lg" fixed='top' className='my-navbar p-0'>

            {/* NAVBAR FOR DESKTOP */}
            <Container className='container-desktop'>
                <Nav className="me-auto w-100">
                    <Nav.Link href="#home" className='p-3' as={Link} to="/">Demos</Nav.Link>
                    <Nav.Link href="#link" className='p-3' onClick={(e) => e.preventDefault()}>Pages</Nav.Link>
                    <NavDropdown title="Portfolio" id="basic-nav-dropdown" 
                        show={isOpen} onMouseEnter={open} 
                        onMouseLeave={close} 
                        className='p-2'
                    >
                        <div className='dropdown-container'>
                            <Row className='w-100'>
                                <Col xl={4}>
                                    <p>Grid Minimal</p>
                                    <ul>
                                        {['2 columns', '3 columns', '4 columns', 'Full Width'].map((el, i) => <li className='mb-2' key={i}><Link to="/portfolio">{el}</Link></li>)}
                                    </ul>
                                </Col>
                                <Col xl={4}>
                                    <p>Masonry Minimal</p>
                                    <ul>
                                        {['2 columns', '3 columns', '4 columns', 'Full Width'].map((el, i) => <li className='mb-2' key={i}><Link to="/portfolio">{el}</Link></li>)}
                                    </ul>
                                </Col>
                                <Col xl={4}>
                                    <p>Grid detailed</p>
                                    <ul>
                                        {['2 columns', '3 columns', '4 columns', 'Full Width'].map((el, i) => <li className='mb-2' key={i}><Link to="/portfolio">{el}</Link></li>)}
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </NavDropdown>
                    <Nav.Link href="#link" className='p-3 ms-auto'><BsCart/></Nav.Link>
                    <Nav.Link href="#link" className='p-3'><BsSearch/></Nav.Link>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 nav-search my-2"
                        aria-label="Search"
                    />
                </Nav>
            </Container>
            {/* END OF NAVBAR FOR DESKTOP */}

            {/* NAVBAR FOR MOBILE */}
            <Container className='container-mobile'>
                <Nav className="me-auto w-100 flex-row justify-content-end">
                    <Nav.Link href="#link" className='p-3'><BsCart/></Nav.Link>
                    <Nav.Link href="#link" className='p-3'><BsSearch/></Nav.Link>
                    <Nav.Link href="#link" className='p-3'><BsList/></Nav.Link>
                </Nav>
            </Container>
            {/* END OF NAVBAR FOR MOBILE */}

        </Navbar>
    )
}

export default MyNavbar
