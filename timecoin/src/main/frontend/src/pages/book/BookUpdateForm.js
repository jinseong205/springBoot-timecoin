import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Header from '../../components/Header';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BookUpdateForm = () => {
    const { id } = useParams();
    let navigate = useNavigate();
    
    const [book, setBook] = useState({
        title:"",
        author:"",
    });

    
    useEffect(() =>{
        fetch("http://localhost/book/"+id,)
        .then(res=> res.json()).then(res=>{
            //console.log(res)
            setBook(res);
        })
    },[])
    
    const changeValue = (e) =>{
        setBook({
            ...book,
            [e.target.name] : e.target.value,
            [e.target.author] : e.target.value
        })
    }

    const submitBook = (e) => {
        e.preventDefault(); //submit이 action을 안타게 해줌
        fetch("http://localhost/book/" + id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(book)
        }).then((res) =>{   //Cath는 여기서 오류가 나야 실행됨   
                //console.log(res)
                if(res.status === 200){
                    return res.json()
                }else{
                    return null;
                }
            }
        ).then((res) =>{
            if(res != null){
                navigate("/book/detail/" + id)
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
                <h1>책 수정</h1>
                <Form onSubmit={submitBook}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter Ttile" onChange={changeValue} value={book.title}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="author" placeholder="Enter Author" onChange={changeValue} value={book.author}/>
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

export default BookUpdateForm 