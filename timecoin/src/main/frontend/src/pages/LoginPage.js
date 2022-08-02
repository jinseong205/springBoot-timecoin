import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  //const { history } = props;

  let navigate = useNavigate();
  const { id } = useParams();
  console.log(' ' + id);

  let goHome = () => {
    navigate('/');
  };

  //console.log(props.match.params.id);
  return (
    <div>
      <Header />
      <button onClick={goHome}>뒤로가기</button>
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
