import React, { useState } from 'react';         
import img from '../../../src/assets/Header/logo.png'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaUser } from 'react-icons/fa';  
import './Header.css'
 
import AddProduct from './AddProduct'; 
 
const Header = () => { 
    const [showModal, setShowModal] = useState(false);
 
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className="mt-2">
                <Navbar expand="lg" className="p-0">
                    <Container fluid className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src={img} alt="Logo" width={130} className="me-4" />
                            <Navbar.Brand href="#" className="ms-3 fs-6">HOME</Navbar.Brand>
                            <Navbar.Brand href="#" className="ms-4 fs-6">MAN</Navbar.Brand>
                            <Navbar.Brand href="#" className="ms-4 fs-6">WOMAN</Navbar.Brand>
                            <Navbar.Brand href="#" className="ms-4 fs-6">KIDS</Navbar.Brand>
                            <Navbar.Brand href="#" className="ms-4 fs-6">BEAUTY</Navbar.Brand>

                        </div> 
                        <div className="d-flex align-items-center add-product">
                             <input
                                type="text"
                                placeholder="Search products..."
                                className="form-control me-3"
                                style={{ width: "400px" }}
                            /> 
                            <Button 
                                className="add-product-btn"onClick={handleShow}>Add Product</Button>
                            <div className="profile-icon text-center mx-4">
                                <FaUser size={15} />  
                                <span>Profile</span>
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </div>
             
            <AddProduct 
                show={showModal}        
                handleClose={handleClose} 
            />
        </>
    )
}

export default Header;