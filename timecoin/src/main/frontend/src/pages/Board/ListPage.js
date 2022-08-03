import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';

const StyleBoardBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [board, setBoard] = useState({
    id: '',
    title: '',
    content: '',
  });

  const [boards, setBoards] = useState([
    { id: 1, title: '내용1' },
    { id: 2, title: '내용2' },
    { id: 3, title: '내용3' },
    { id: 4, title: '내용4' },
    { id: 5, title: '내용5' },
  ]);

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

      <h1>글목록 페이지</h1>
      {board.map((board) => (
        <StyleBoardBoxDiv key={board.id}>
          <div>
            번호 : {board.id} 제목 : {board.title}
          </div>
          <button>삭제</button>
        </StyleBoardBoxDiv>
      ))}
    </>
  );
};

export default ListPage;
