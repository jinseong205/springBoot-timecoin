import React from 'react';

//Function 방식
const Home = (props) => {
  const { boards } = props;
  console.log(boards);

  return <div>홈페이지 입니다.</div>;
};

export default Home;
