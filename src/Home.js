import React from 'react';
import Slide from './Slide';
import Carte from './Carte'
// import Product from './Product'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Col,
  Row,
  Container,
  DropdownItem } from 'reactstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    const rowData= [
      {name: "Paris"},
      {name: "Istanbul"},
    ]
    return (
      <div>
        

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Travel</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <NavLink href='./Product'>Nos voyages</NavLink> */}
                <NavLink href='/Product/'>Nos voyages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='./Contact'>Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Slide/>
        <Container>
        <Row lg={12}>
         <Col lg={6}>
              <Carte ButtonLabel="kloi" label="Vol" text="Les meilleurs prix" name="Voir plus"/>                 
         </Col>
         <Col lg={6}>
         <Carte label="Hotel" text="Les meilleurs prix" name="Voir plus"/> 
         </Col>
        </Row>
        <Row lg={12}>
         <Col lg={12}>
         {rowData.map(element=><Carte label={element.name}/>  )}
    
         </Col>
         </Row>
        </Container>
       
      </div>
    );
  }
}