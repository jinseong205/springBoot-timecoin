import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import Header from '../../components/Header';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const BookDetail = () => {
    const { id } = useParams();
    
    const [book, setBook] = useState({
        id:"",
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

    const deleteBook = (bid)=>{
        fetch("http://localhost/book/"+bid,{

        })
        .then(res=> res.json()).then(res=>{
            //console.log(res)
            setBook(res);
        })
    }

    const updateBook = ()=>{
        
    }
    
    return (
        <>
            <Header/>
            <Container>
                <br/>
                <h1>상세 보기</h1>
                <hr/>
                <h1>title : {book.title}</h1>
                <h3>author : {book.author}</h3>
                <Button variant="primary" onClick={updateBook}>수정</Button>
                {' '}
                <Button variant="danger" onClick={() => deleteBook(book.id)}>삭제</Button>
            </Container>
        </>
    );
};

export default BookDetail;      