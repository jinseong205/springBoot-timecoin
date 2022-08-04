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
    { id: 1, title: '제목1', content: '1' },
    { id: 2, title: '제목2', content: '2' },
  ]);

  const handleWrite = () => {
    let newid;
    newid = boards[boards.length - 1].id + 1;
    setBoards([...boards, { ...board, id: newid }]);
  };

  const handleForm = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navigation />

      <h1>글쓰기 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={board.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={board.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>

      <h1>글목록 페이지</h1>
      {boards.map((board) => (
        <StyleBoardBoxDiv key={board.id}>
          <div>
            번호 : {board.id} / 제목 : {board.title} / 내용 : {board.content}
          </div>
          <button>삭제</button>
        </StyleBoardBoxDiv>
      ))}
    </>
  );
};

export default ListPage;
