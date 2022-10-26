import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import logo from "../../../../public/logo192.png";
import SideNav from '../SideNav/SideNav';

const Header = () => {
    const [dark, setdark] = useState(true);
    const darkHandler = () => setdark(!dark);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand><Link to="/">Sifat Programming Course</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <p><Link to="/login">Login</Link></p> */}
                            <Nav.Link><Link className='text-white text-decoration-none' to="/login">Login</Link></Nav.Link>
                            <Nav.Link><Link className='text-white text-decoration-none' to="/signUp">Sign-Up</Link></Nav.Link>
                            <Nav.Link><Link className='text-white text-decoration-none' to="/">Courses</Link></Nav.Link>
                            <Nav.Link><Link className='text-white text-decoration-none' to="/faq">FAQ</Link></Nav.Link>
                            <Nav.Link><Link className='text-white text-decoration-none' to="/blog">Blog</Link></Nav.Link>
                            {
                                dark ? <Button onClick={darkHandler} variant="dark">Dark</Button> : <Button onClick={darkHandler} variant="light">Light</Button>
                            }
                            <div className='d-lg-none'>
                                <SideNav></SideNav>
                            </div>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
        // <div>
        //     <Navbar bg="primary" variant="dark">
        //         <Container className='d-flex justify-content-between'>
        //             <div>
        //                 <Navbar.Brand href="/">Sifat Programming Course</Navbar.Brand>
        //                 {/* <img src={logo} alt="" /> */}

        //             </div>
        //             <div>
        //                 <Nav className="me-auto">
        //                         {/* <p><Link to="/login">Login</Link></p> */ }
        //                         <Nav.Link href="/login">Login</Nav.Link>
        //                         <Nav.Link href="/signUp">Sign-Up</Nav.Link>
        //                         <Nav.Link href="/">Courses</Nav.Link>
        //                         <Nav.Link href="/faq">FAQ</Nav.Link>
        //                         <Nav.Link href="/blog">Blog</Nav.Link>
        // {
        //     dark ? <Button onClick={darkHandler} variant="dark">Dark</Button> : <Button onClick={darkHandler} variant="light">Light</Button>


        // }
        //                 </Nav>
        //             </div>
        //         </Container>
        //     </Navbar>
        // </div >
    );
};

export default Header;