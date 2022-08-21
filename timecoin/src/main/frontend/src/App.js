
import { Routes, Route } from 'react-router-dom';
import BookDetail from "./pages/book/BookDetail";
import BookList from "./pages/book/BookList";
import BookSaveForm from "./pages/book/BookSaveForm";
import BookUpdateForm from "./pages/book/BookUpdateForm";
import JoinForm from "./pages/member/JoinForm";
import LoginForm from "./pages/member/LoginForm";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element= {<BookList/>} />
          <Route path="/book/List" element= {<BookList/>} />
          <Route path="/book/detail/:id" element = {<BookDetail/>}/>
          <Route path="/book/saveForm"  element= {<BookSaveForm/>}/>
          <Route path="/book/updateForm/:id" element = {<BookUpdateForm/>} />
          <Route path="/member/loginForm" element = {<LoginForm/>}/>
          <Route path="/member/joinForm" element = {<JoinForm/>}/>
        </Routes>
    </>
  );
}
export default App;
