import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import searchPic from "../assets/search.png";
import SearchOverlay from "./SearchOverlay";

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
      <Navbar expand="lg" className="bg-white fixed-top shadow-sm py-2" variant="light">
        <Container className="px-4">
          {/* Mobile Brand */}
          <Navbar.Brand
            href="/"
            className="font-bold d-lg-none"
            style={{ fontSize: "2.2rem", lineHeight: 1 }}
          >
            D<span style={{ color: "#F1BC56" }}>&</span>A
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Left Navigation */}
            <Nav className="me-auto align-items-center gap-2">
              <Nav.Link href="/women" className="fw-semibold text-dark hover-pink">WOMEN</Nav.Link>
              <Nav.Link href="/men" className="fw-semibold text-dark hover-pink">MEN</Nav.Link>
              <NavDropdown 
                title="COMMERCIAL" 
                id="commercial-dropdown"
                className="fw-semibold text-dark"
              >
                <NavDropdown.Item href="/kids">Kids</NavDropdown.Item>
                <NavDropdown.Item href="/girls">Girls</NavDropdown.Item>
                <NavDropdown.Item href="/boys">Boys</NavDropdown.Item>
                <NavDropdown.Item href="/babies">Babies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/apply">Apply Here</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Center Brand - Desktop Only */}
            <Navbar.Brand
              href="/"
              className="font-bold mx-auto position-absolute start-50 translate-middle-x d-none d-lg-block"
              style={{ fontSize: "4rem", lineHeight: 1 }}
            >
              D<span style={{ color: "#F1BC56" }}>&</span>A
            </Navbar.Brand>

            {/* Right Navigation */}
            <Nav className="ms-auto align-items-center gap-2">
              <NavDropdown 
                title="AGENCY" 
                id="agency-dropdown"
                className="fw-semibold text-dark"
              >
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/policy">Policy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/apply" className="fw-semibold text-dark hover-pink">APPLY</Nav.Link>
              <Nav.Link href="/contact" className="fw-semibold text-dark hover-pink">CONTACT</Nav.Link>
              
              {/* Darker Search Button */}
              <Nav.Link
                onClick={openSearch}
                className="search-btn p-1 ms-2"
                style={{
                  backgroundColor: "#2c2c2c", // Dark gray background
                  borderRadius: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a1a1a"; // Darker on hover
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#2c2c2c"; // Back to dark gray
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img 
                  src={searchPic} 
                  alt="Search" 
                  style={{ 
                    width: "24px", 
                    height: "24px",
                    filter: "brightness(0) invert(1)", // Makes the icon white
                  }} 
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Custom Styles */}
      <style>
        {`
          .navbar-nav .nav-link:hover,
          .navbar-nav .dropdown:hover .nav-link {
            color: #d63384 !important;
          }
          
          .dropdown-menu {
            border: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border-radius: 8px;
            margin-top: 8px;
          }
          
          .dropdown-item:hover {
            background-color: #fff0f5;
            color: #d63384;
          }
          
          .search-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          
          .navbar-toggler {
            border: none;
            padding: 8px 12px;
          }
          
          .navbar-toggler:focus {
            box-shadow: none;
            outline: none;
          }
        `}
      </style>

      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}

export default NavBar;
