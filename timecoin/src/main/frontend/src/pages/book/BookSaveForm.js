import React, { useState } from 'react';
import Header from '../../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

const BookSaveForm = () => {
    
    const [book, setBook] = useState({
        title:"",
        author:"",
    });
    
    const changeValue = (e) =>{
        setBook({
            ...book,
            [e.target.name] : e.target.value,
            [e.target.author] : e.target.value
        })
    }

    return (
        <>
            <Header/>
            <Container>
                <br/>
                <h1>책 등록</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter Ttile" onChange={changeValue}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="author" placeholder="Enter Author" onChange={changeValue}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                          <Button variant="primary" type="submit">
                        등록
                        </Button>
                </Form>
                </Container>
        </>
    );
};

export default BookSaveForm 