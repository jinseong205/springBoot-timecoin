import React from 'react';
import styled from 'styled-components';

const StyledLoginDiv = styled.div`
  padding: 30px 0 30px 0;
`;

const Login = (props) => {
  return (
    <StyledLoginDiv>
      {props.id}
      <h1>로그인 페이지 입니다.</h1>
    </StyledLoginDiv>
  );
};

export default Login;
