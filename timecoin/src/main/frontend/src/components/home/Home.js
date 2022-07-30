import React from 'react';

//Function 방식
const Home = (props) => {
  const { boards, setBoards } = props;
  console.log(boards);

  return (
    <div>
      <div>홈페이지 입니다.</div>

      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((board) => (
        <h3>
          제목 {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
