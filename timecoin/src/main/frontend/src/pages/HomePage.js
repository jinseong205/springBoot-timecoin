import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);
  //빈 배열 한번만 실행
  useEffect(() => {
    //다운로드 가정   //http 요청 (fetch, axios (다운))
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...data]);
    setUser({id:1, username:'jinsung'});
  }, []);

  return (
    <div>
      <Header />
      <Home boards={boards} setBoards={setBoards} user={user}/> {/* props */}
      <Footer />
    </div>
  );
};

export default HomePage;
<Header />;
