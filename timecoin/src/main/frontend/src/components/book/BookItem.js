import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>제목</Card.Title>
                    <Link to= {"/book/detail/" + 1} className="btn btn-primary" variant="primary">상세보기</Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default BookItem;