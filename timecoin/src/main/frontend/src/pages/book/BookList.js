import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import BookItem from '../../components/book/BookItem';
import { Container } from "react-bootstrap";


const BookList = () => {

    const [books, setBooks] = useState([]);

    //함수 실행시 최초 한번 실행되는것
    useEffect(() =>{
        //data 요청 -> promise -> data 다운 완료
        fetch("http://localhost/book",{})
        .then(res => res.json())
        .then(res=>{
            setBooks(res);
        });
    },[])

    return (
        <>
            <Header/>
            <Container>
                <h1>책 리스트 보기</h1>
                {books.map((book) => (<BookItem key = {book.id} book={book}/>)) }
            </Container>
        </>
    );
};

export default BookList;