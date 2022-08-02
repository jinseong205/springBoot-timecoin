import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(v) => (v.user.username === 'jinsung' ? 'blue' : 'red')};
`;
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;

const Home = (props) => {
  const { boards, setBoards, user } = props;

  return (
    <div>
      <div>홈페이지 입니다.</div>
      <Button variant="primary">Primary</Button>{' '}
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
