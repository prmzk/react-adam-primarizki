import React, { useState } from 'react'
import { Col, Container, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { BsSearch, BsList, BsX, BsFillChatLeftTextFill, BsArrowDownCircle, BsNewspaper, BsCameraReels, BsFilePerson, BsCart, BsCaretRightFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Drawer from 'rc-drawer'

const menus = [
    {
        id: 1,
        icon: <BsFillChatLeftTextFill/>,
        text: 'Chat' 
    },
    {
        id: 2,
        icon: <BsArrowDownCircle/>,
        text: 'Download' 
    },
    {
        id: 3,
        icon: <BsNewspaper/>,
        text: 'Read Newspaper' 
    },
    {
        id: 4,
        icon: <BsCameraReels/>,
        text: 'Watch Video' 
    },
    {
        id: 5,
        icon: <BsFilePerson/>,
        text: 'View Profile' 
    },
    {
        id: 6,
        icon: <BsCart/>,
        text: 'View Cart' 
    }
]

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    const [drawerMenu, setDrawerMenu] = useState(false)
    const showDrawer = () => setDrawerMenu(true)
    const hideDrawer = () => setDrawerMenu(false)

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
                                <Col xl={4} lg={4}>
                                    <p>Grid Minimal</p>
                                    <ul>
                                        {['2 columns', '3 columns', '4 columns', 'Full Width'].map((el, i) => <li className='mb-2' key={i}><Link onClick={close} to="/portfolio">{el}</Link></li>)}
                                    </ul>
                                </Col>
                                <Col xl={4} lg={4}>
                                    <p>Masonry Minimal</p>
                                    <ul>
                                        {['2 columns', '3 columns', '4 columns', 'Full Width'].map((el, i) => <li className='mb-2' key={i}><Link onClick={close} to="/portfolio">{el}</Link></li>)}
                                    </ul>
                                </Col>
                                <Col xl={4} lg={4}>
                                    <p>Grid detailed</p>
                                    <ul>
                                        {['2 columns', '3 columns', '4 columns', 'Full Width'].map((el, i) => <li className='mb-2' key={i}><Link onClick={close} to="/portfolio">{el}</Link></li>)}
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

            {/* NAVBAR FOR MOBILE */}
            <Container className='container-mobile'>
                <Nav className="me-auto w-100 flex-row justify-content-end">
                    <Nav.Link className='p-3'><BsCart/></Nav.Link>
                    <Nav.Link className='p-3'><BsSearch/></Nav.Link>
                    <Nav.Link className='p-3' onClick={showDrawer}><BsList/></Nav.Link>
                </Nav>
            </Container>

            {/* DRAWER */}
            <Drawer
            level={null}
            placement="right"
            handleChild={false}
            open={drawerMenu}
            onClose={hideDrawer}
            handler={false}

            >
                <nav className='mobile-drawer'>
                    <div className='d-flex justify-content-end'>
                        <div className='py-1 px-2' onClick={hideDrawer}><BsX/></div>
                    </div>
                    <div className='d-flex flex-column'>
                        <Link className='text-black fw-bold mb-3' to="/" onClick={hideDrawer}>Demos</Link>
                        <Link className='text-black fw-bold mb-3' to="/portfolio" onClick={hideDrawer}>Portfolio</Link>
                    </div>
                    <div className='border-top pt-3'>
                        {menus.map(({text, id, icon}) => <div key={id} className='d-flex mb-3 align-items-center'>
                            <div>{icon}</div>
                            <p className='ms-2 mb-0'>{text}</p>
                        </div>)}
                    </div>
                </nav>
            </Drawer>
        </Navbar>
    )
}

export default MyNavbar
