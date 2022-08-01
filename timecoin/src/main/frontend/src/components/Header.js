import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//하나의 컴포넌트 생성 (재사용)

//style-component => js 파일과 css 파일 관리!
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color : ${(v)=> v.backgroundColor}
`;

const Header = () => {
  return (
    <StyledHeaderDiv backgroundColor = "blue" >
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/loign/10">로그인</Link>
        </li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
