import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  const {history} = props;
  console.log(props.match.params.id);
  return (
    <div>
      <Header />
      <button onClick ={()=>history.push("/")}>뒤로가기</button>
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
