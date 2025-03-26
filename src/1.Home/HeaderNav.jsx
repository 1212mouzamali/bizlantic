import { Link } from 'react-router-dom';
import './TopHeader.css';
import Blacklogo from '../assets/Blacklogo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderNav() {
    return (
        <Navbar expand="lg" className="bg-body-white shadow">
            <Container fluid>
                <Navbar className="bg-body-white pe-0 me-0">
                    <Container className='pe-0 me-0'>
                        <Navbar.Brand href="#home" className='pe-0 me-0' as={Link} to="/">
                            <img
                                src={Blacklogo}
                                width="240"
                                //height="35"
                                className="d-inline-block "
                                alt="Bizlantic logo"
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll ">
                    <Nav
                        className="m-auto my-2 my-lg-0 Popins-regular business-setup"
                        style={{ maxHeight: '100px', color:'#000000', fontSize:'clamp(18px, 4vw, 18px)' }}
                        navbarScroll

                    >                      
                        <NavDropdown title="Buisness Setup" id="basic-nav-dropdown"  >
                            <NavDropdown.Item as={Link} to="/freezone">Freezone License</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/mainmain"> Mainland License</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/offshoremain">Offshore License</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Finance Service" id="basic-nav-dropdown" className='px-lg-2'>
                            <NavDropdown.Item as={Link} to="/corporatemain">Corporate Tax
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/vatmain"> VAT Registration</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/bankmain">Bank Account Assist</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Digital" id="basic-nav-dropdown" >
                            <NavDropdown.Item as={Link} to="/digitalmain">Digital Marketing </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/socialmain"> Social Media Management</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/webmain" className='w-50'>Website & App Development</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Residence" id="basic-nav-dropdown" className='px-lg-2'>
                            <NavDropdown.Item as={Link} to="/goldmain">Golden Visa </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/citymain">Citizenship</NavDropdown.Item>
                            <NavDropdown.Divider />                            
                        </NavDropdown>
                       
                        <NavDropdown title="Legal" id="basic-nav-dropdown" className='px-lg-2'>
                            <NavDropdown.Item as={Link} to="/terms">Terms and Conditions </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/privacy">Privacy</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/faq">Faq</NavDropdown.Item>                            
                        </NavDropdown>                       
                        <Nav.Link as={Link} to="/login">  Login {">"}  </Nav.Link>
                        <div className="col d-md-none">
                        <Nav.Link as={Link} to="/about">  About Us   </Nav.Link>
                        <Nav.Link as={Link} to="/contact">  Contact Us   </Nav.Link>
                        <Nav.Link as={Link} to="/faq">  FAQs   </Nav.Link>
                        <Nav.Link as={Link} to="/blog">  Blog   </Nav.Link>
                        </div>
                    </Nav>
                    <Nav.Link as={Link} to="/costcalc" className=' bg-primary border rounded text-white py-1 px-3 Popins-regular cost-calc-btn'>Cost Calculator </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;


 