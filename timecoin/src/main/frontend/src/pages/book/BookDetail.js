import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Header from '../../components/Header';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const BookDetail = () => {
    const { id } = useParams();
    
    let navigate = useNavigate();

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
            method:"DELETE"
        })
        .then((res) => res.text())
        .then(res=>{
            console.log(res)
            if(res==="ok"){
                navigate("/book/list")
            }else{
                alert("삭제 실패")
            }
        })
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
                <Link to={"/book/updateForm/" + id} className="btn btn-primary" >수정</Link>
                {' '}
                <Button variant="danger" onClick={() => deleteBook(book.id)}>삭제</Button>
                {' '}
                <Link to={"/book/list" } className="btn btn-secondary" >목록 보기</Link>
            </Container>
        </>
    );
};

export default BookDetail;      