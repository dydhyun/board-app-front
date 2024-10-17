// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function CatItDetAxios() {
//   const { auctionIndex } = useParams();
//   const [auctionData, setAuctionData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/category-item-detail/${auctionIndex}`)
//       .then(response => {
//         setAuctionData(response.data.item); // ResponseDto 내의 item을 추출
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, [auctionIndex]); // auctionIndex가 변경될 때마다 새로운 데이터를 불러옴

//   if (loading) return <div>Loading..</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>{auctionData.productName}</h1>
//       <p>{auctionData.productDescription}</p>
//       <p>Starting Price: {auctionData.startingPrice}</p>
//     </div>
//   );

// }

// export default CatItDetAxios;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CatItDetAxios({ setResponse }) {
  const { auctionIndex } = useParams(); // URL에서 auctionIndex를 가져옴
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/category-item-detail/${auctionIndex}`)
      .then(response => {
        setResponse(response.data.item); // 상위 컴포넌트에 response를 전달
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [auctionIndex, setResponse]);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error: {error.message}</div>;

  return null; // 데이터만 전달하고 렌더링할 내용 없음
}

export default CatItDetAxios;
