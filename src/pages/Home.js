import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    alert("안녕하십니까.");
  },[]);
  
  return (
    <div>게시판 홈</div>
  );
};

export default Home;