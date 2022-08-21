import React from 'react';
import Header from '../../components/Header';
import BookItem from '../../components/book/BookItem';
import { Container } from "react-bootstrap";


const BookList = () => {
    return (
        <>
            <Header/>
            <Container>
                <h1>책 리스트 보기</h1>
                <BookItem/>
            </Container>
        </>
    );
};

export default BookList;