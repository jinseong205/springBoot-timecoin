import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

const BookSaveForm = () => {
    
    let navigate = useNavigate();
    
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

    const submitBook = (e) => {
        e.preventDefault(); //submit이 action을 안타게 해줌
        fetch("http://localhost/book",{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(book)
        }).then((res) =>{   
                //console.log(res)
                if(res.status === 201){
                    return res.json()
                }else{
                    return null;
                }
            }
        ).then((res) =>{
            if(res != null){
                navigate("/book/list")
            }else{
                alert("책등록에 실패하였습니다.")
            }
        });
    }

    return (
        <>
            <Header/>
            <Container>
                <br/>
                <h1>책 등록</h1>
                <Form onSubmit={submitBook}>
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