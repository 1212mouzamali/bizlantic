// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Link} from 'react-router-dom';

// import Blacklogo from '../assets/Blacklogo.png';

// function CostHeaderNav() { 
//     return (
//         <>
//         <Navbar expand="lg" className="bg-body-tertiary border shadow">
//             <Container fluid className='nav-main'>  
//                 <div className='blacklogo-link'>
//                      <Link to='/' >
//                     <img src={Blacklogo} alt="" className='blacklogo' />

//                     </Link>
//                     </div>     

//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <NavDropdown title="Buisness Setup" id="basic-nav-dropdown" className='buisnes-setup'>
//                             <NavDropdown.Item as={Link} to="/freezone">Freezone License</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.2"> Mainland License</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.3">Offshore License</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown title="Finance & Tax" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Corporate Tax
//                             </NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.2"> VAT Resgistration</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.3">Bank Account Assist</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown title="Digital Solution" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Digital Marketing

//                             </NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.2"> Social Media Management</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.3">Website & App Development</NavDropdown.Item>
//                         </NavDropdown>
//                         <Nav.Link href="#home">Golden Visa</Nav.Link>
//                         <Nav.Link href="#link">Citizenship</Nav.Link>
//                         <Nav.Link as={Link} to="/login">  Login  </Nav.Link>
//                         <Nav.Link as={Link} to="/" className=' cost-calc-btn border rounded text-center'>{'<'} Back to Website </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//         </>
//     );
// }

// export default CostHeaderNav;
import { Link } from 'react-router-dom';
import '../1.Home/TopHeader.css';
import Blacklogo from '../assets/Blacklogo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CostHeaderNav() {
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
                        style={{ maxHeight: '100px', color: '#000000', fontSize: 'clamp(18px, 4vw, 18px)' }}
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
                    <Nav.Link as={Link} to="/" className=' border rounded text-white py-1 px-3 Popins-regular cost-calc-btn'>Back to Website </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CostHeaderNav;


