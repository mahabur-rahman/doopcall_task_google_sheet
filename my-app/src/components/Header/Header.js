import "./header.scss";
import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import logo from "../../images/fireLogo.png";
import lang from "../../images/lang.png";
import bars from "../../images/bars.png";

const Header = () => {
  return (
    <>
      <div id="header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image src={logo} alt="Ostad" width="160px" />
            </Navbar.Brand>

            {/* res button */}
            <button href="#" className="res_login_btn">
              LOGIN
            </button>

            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <Image src={bars} alt="bar" className="bar_icon" />
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#" style={{ color: "#d69a00" }}>
                  Home
                </Nav.Link>
                <NavDropdown title="About" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">Vision</NavDropdown.Item>
                  <NavDropdown.Item href="#">Background</NavDropdown.Item>
                  <NavDropdown.Item href="#">Awards</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Intellectual Property (IP)
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">
                    Check Product Authenticity
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Performance Demonstration
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#"></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Events & News" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">Announcements</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Learning Articles
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#"></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey={2} href="#">
                  Contact
                </Nav.Link>
                <Nav.Link eventKey={2} href="#">
                  <Image src={lang} alt="lang" />
                  <span className="lang px-2">ENGLISH</span>
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#"
                  className="login_btn d-none d-lg-block"
                >
                  LOGIN
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
