import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CatItDetAxios({ auctionIndex }) {
  const [auctionData, setAuctionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios를 사용해 스프링 부트 API 호출
    axios.get(`http://localhost:8080/api/category-item-detail/${auctionIndex}`)
      .then(response => {
        setAuctionData(response.data.item); // ResponseDto 내의 item을 추출
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [auctionIndex]);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{auctionData.productName}</h1>
      <p>{auctionData.productDescription}</p>
      <p>Starting Price: {auctionData.startingPrice}</p>
    </div>
  );

}

export default CatItDetAxios;
