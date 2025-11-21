import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddProducts.css';

const AddProduct = ({ show, handleClose }) => {
    const [category, setCategory] = useState('');
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    const handleCategoryChange = (e) => {
        const selected = e.target.value;
        setCategory(selected);
 
        switch (selected) {
            case 'Male':
                setSubcategoryOptions(['Shirt', 'T-Shirt', 'Kurta']);
                break;
            case 'Female':
                setSubcategoryOptions(['Dari', 'Kurti', 'Frock']);
                break;
            case 'Kids':
                setSubcategoryOptions(['Shirt', 'Pant', 'Hat', 'Goggles']);
                break;
            default:
                setSubcategoryOptions([]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const productData = {
            name: event.target.productName.value,
            price: event.target.price.value,
            description: event.target.description.value,
            category: event.target.category.value,
            subcategory: event.target.subcategory.value
        };

        console.log('Product Data:', productData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>➕ Add New Product</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body> 
                    <Form.Group controlId="productName" className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name" required />
                    </Form.Group> 
                    <Form.Group controlId="price" className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter price" required />
                    </Form.Group> 
                    <Form.Group controlId="description" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter product description" required />
                    </Form.Group> 
                    <Form.Group controlId="category" className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select value={category} onChange={handleCategoryChange} required>
                            <option value="">Select category</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Kids">Kids</option>
                        </Form.Select>
                    </Form.Group> 
                    <Form.Group controlId="subcategory" className="mb-3">
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Select required>
                            <option value="">Select subcategory</option>
                            {subcategoryOptions.map((sub, idx) => (
                                <option key={idx} value={sub}>{sub}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" type="submit">Save Product</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddProduct;
