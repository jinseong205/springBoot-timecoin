import React from 'react';
import styled from 'styled-components';

let StyledDeleteButton = styled.button`
color:${(v) => v.user.username === 'jinsung' ? "blue" : "red"}
`
const Home = (props) => {
  const { boards, setBoards, user  } = props;

  return (
    <div>
      <div>홈페이지 입니다.</div>

      <StyledDeleteButton user={user} onClick={() => setBoards([])}>전체 삭제</StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
