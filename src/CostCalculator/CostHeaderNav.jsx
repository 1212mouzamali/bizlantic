import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

import Blacklogo from '../assets/Blacklogo.png';

function CostHeaderNav() { 
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary border shadow">
            <Container fluid className='nav-main'>  
                <div className='blacklogo-link'>
                     <Link to='/' >
                    <img src={Blacklogo} alt="" className='blacklogo' />
                    
                    </Link>
                    </div>     
                                     
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Buisness Setup" id="basic-nav-dropdown" >
                            <NavDropdown.Item as={Link} to="/freezone">Freezone License</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2"> Mainland License</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Offshore License</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Finance & Tax" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Corporate Tax
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2"> VAT Resgistration</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Bank Account Assist</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Digital Solution" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Digital Marketing

                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2"> Social Media Management</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Website & App Development</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Golden Visa</Nav.Link>
                        <Nav.Link href="#link">Citizenship</Nav.Link>
                        <Nav.Link as={Link} to="/login">  Login  </Nav.Link>
                        <Nav.Link as={Link} to="/" className=' cost-calc-btn border rounded text-center'>{'<'} Back to Website </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default CostHeaderNav;