import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import {faBagShopping}  from '@fortawesome/free-solid-svg-icons'
import {faUser}  from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
function Navbbar() {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  }
  const hideDropdown = () => {
    setShow(false);
  }
  const [showi, setShowi] = useState(false);
  const showDropDown = () => {
    setShowi(!show);
  }
  const hideDropDown = () => {
    setShowi(false);
  }
  const [showin, setShowin] = useState(false);
  const showDropDowN = () => {
    setShowin(!show);
  }
  const hideDropDowN = () => {
    setShowin(false);
  }
  const [showit, setShowit] = useState(false);
  const showDropDoWN = () => {
    setShowit(!show);
  }
  const hideDropDoWN = () => {
    setShowit(false);
  }


  const naviagte = useNavigate();
  const goToContact=()=>{
      naviagte("/")
  }
  const naviagten = useNavigate();
  const goToContacti=()=>{
      naviagten("/faq")
  }
  const naviagtenis = useNavigate();
  const goToContacter=()=>{
      naviagtenis("/contact")
  }
  const naviagt = useNavigate();
  const goToterms=()=>{
      naviagt("/terms_condition")
  }
  const naviagtoo = useNavigate();
  const goTologin=()=>{
      naviagtoo("/login")
  }


  return (
    <>
      <Navbar id="tytg" expand="lg"  className="bg-white">
        <Container>
          <Navbar.Brand className='reding' >
          <a id="hello" >
          {/* <FontAwesomeIcon className='fixeden' icon={faInfinity} size="1x" /> */}
          <img onClick={()=>goToContact()} className="metass"style={{height:"20px" , width:"40px"}} src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"/>
                </a>Meta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-white-example"
                  // className='text-primary'
                  title={
                    <span id="metas" className="text-primary">Meta Quest</span>
                }
                  menuVariant="light"
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  
                >
                  <div id="henta">
                  <NavDropdown.Item href="#action/3.1">Meta Quest Overview</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Meta Warranty Plus</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Gift Cards</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Compare Devices</NavDropdown.Item>
                  </div>
                </NavDropdown>

              </Nav>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={
                    <span className="text-primary" >Ray-Ban | Meta</span>
                }
                  menuVariant="Light"
                  show={showi}
                  onMouseEnter={showDropDown}
                  onMouseLeave={hideDropDown}
                >
                  <div id="henta">
                  <NavDropdown.Item href="#action/3.1">Shopall</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Wayfarer</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Headliner</NavDropdown.Item>
                  </div>
                </NavDropdown>


              </Nav>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
               
                  title={
                    <span className="text-primary ">Apps and Games</span>
                }
                  menuVariant="Light"
                  aria-controls="example-collapse-text"
                  aria-expanded={showin}
                  show={showin}
                  onMouseEnter={showDropDowN}
                  onMouseLeave={hideDropDowN}
                >
                  <div id="henta">
                  <NavDropdown.Item id="git" href="#action/3.1">Shop all</NavDropdown.Item>
                  <NavDropdown.Item id="git"href="#action/3.2">Social</NavDropdown.Item>
                  <NavDropdown.Item id="git"href="#action/3.3">Gaming</NavDropdown.Item>
                  <NavDropdown.Item id="git" href="#action/3.3">Fitness</NavDropdown.Item>
                  <NavDropdown.Item id="git" href="#action/3.3">Entertainment</NavDropdown.Item>
                  <NavDropdown.Item id="git" href="#action/3.3">Productivity</NavDropdown.Item>
                  <NavDropdown.Item id="git" href="#action/3.3">Mixed Reality</NavDropdown.Item>
                  <NavDropdown.Item id="git" href="#action/3.3">Meta Quest +</NavDropdown.Item>
                  </div>
                </NavDropdown>
                
              </Nav>
              <Nav.Link id="help"  href="#home">About Meta</Nav.Link>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={
                    <span className="text-primary">Support</span>
                }
                  menuVariant="Light"
                  show={showit}
                  onMouseEnter={showDropDoWN}
                  onMouseLeave={hideDropDoWN}
                >
                  <div id="henta">
                  <NavDropdown.Item href="#action/3.1" onClick={()=>goToContacti()} >FAQ</NavDropdown.Item>
                  <NavDropdown.Item  onClick={()=>goToContacter()}  href="#action/3.2">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>goToterms()} href="#action/3.3">Terms & Conditions</NavDropdown.Item>
                  </div>
                </NavDropdown>

              </Nav>
              <Form className='searchin'>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    {/* <Button id="btnn" type="submit">Submit</Button> */}
                  </Col>
                </Row>
              </Form>
              {/* <Button id="btnn" type="submit">Submit</Button> */}
              <div id="middle_heading">
                <a href="example.com">
                <FontAwesomeIcon icon={faBagShopping} size='2x' />
                </a>
              </div>
              <div id="middle_headings">
                <a href='#' >
      <FontAwesomeIcon style={{color:"#0d6efd"}} onClick={()=>goTologin()} icon={faUser} size="2x" />
                </a>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  )
}

export default Navbbar;