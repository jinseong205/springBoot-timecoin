import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import BookDetail from "./components/book/BookDetail";
import BookList from "./components/book/BookList";
import BookSaveForm from "./components/book/BookSaveForm";
import BookUpdateForm from "./components/book/BookUpdateForm";
import Header from './components/Header';
import JoinForm from "./components/member/JoinForm";
import LoginForm from "./components/member/LoginForm";

function App() {
  return (
    <>
    <Header/>
      <Container>
        <Routes>
          <Route path="/" element= {<BookList/>} />
          <Route path="/book/List" element= {<BookList/>} />
          <Route path="/book/detail/:id" element = {<BookDetail/>}/>
          <Route path="/book/saveForm"  element= {<BookSaveForm/>}/>
          <Route path="/book/updateForm/:id" element = {<BookUpdateForm/>} />
          <Route path="/member/loginForm" element = {<LoginForm/>}/>
          <Route path="/member/joinForm" element = {<JoinForm/>}/>
        </Routes>
      </Container>
    </>
  );
}
export default App;
