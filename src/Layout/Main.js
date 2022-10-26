import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Courses from '../Pages/Courses/Courses';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import SideNav from '../Pages/Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3" className='border border-secondary d-none d-lg-block'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>



        </div>
    );
};

export default Main;