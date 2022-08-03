import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const WritePage = () => {
  const { pathname } = useLocation();
  console.log();

  const handleWrite = () => {
    //ListPage의 setPost에 무엇을 담아야함
    let board = { id: 6, title: '인풋값' };

    //setBoards();
  };

  return (
    <>
      <Navigation />
      <h1>글쓰기 페이지</h1>
      <form>
        <input type="text" placeholder="제목을 입력하세요..." />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </>
  );
};

export default WritePage;
