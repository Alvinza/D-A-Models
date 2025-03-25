import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import searchPic from "../assets/search.png";
import SearchOverlay from "./SearchOverlay"; // Import the new component

function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top shadow-sm">
        <Container className="px-4 py-3">
          <Navbar.Brand
            href="/"
            className="font-bold mx-auto d-lg-none"
            style={{ fontSize: "2.5rem" }}
          >
            D<span style={{ color: "#F1BC56" }}>&</span>A
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="gap-3 flex-wrap">
              <Nav.Link href="/women">WOMEN</Nav.Link>
              <Nav.Link href="/men">MEN</Nav.Link>
              <NavDropdown title="COMMERCIAL" id="basic-nav-dropdown">
                <NavDropdown.Item href="/kids">Kids</NavDropdown.Item>
                <NavDropdown.Item href="/girls">Girls</NavDropdown.Item>
                <NavDropdown.Item href="/boys">Boys</NavDropdown.Item>
                <NavDropdown.Item href="/babies">Babies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/apply">Apply Here</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Navbar.Brand
              href="/"
              className="font-bold d-none d-lg-block position-absolute start-50 translate-middle-x"
              style={{ fontSize: "4rem" }}
            >
              D<span style={{ color: "#F1BC56" }}>&</span>A
            </Navbar.Brand>

            <Nav className="gap-3 flex-wrap">
              <NavDropdown title="AGENCY" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/policy">Policy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/apply">APPLY</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
              <Nav.Link
                onClick={openSearch} // Changed to onClick instead of href
                onMouseEnter={(e) => (e.target.style.filter = "brightness(70%)")}
                onMouseLeave={(e) => (e.target.style.filter = "brightness(100%)")}
              >
                <img src={searchPic} alt="Search" style={{ width: "30px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}

export default NavBar;