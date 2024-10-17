import React, { useState } from 'react'
import CategoryItemDetailInfo from './CatItDetInfo';
import CategoryItemDetailInquiry from './CatItDetInquiry';
import CategoryItemDetailReturn from './CatItDetReturn';
import CategoryItemDetailMain from './CatItDetMain';

import CatItDetAxios from './CatItDetAxios';


const CategoryItemDetail = () => {

    const [response, setResponse] = useState(null); // response 객체를 상태로 관리

    return (    
        <div className='CID-item-block'>
            {/* CatItDetAxios가 데이터를 받아와서 setResponse로 설정 */}
            <CatItDetAxios setResponse={setResponse} />
            
            <CategoryItemDetailMain response={response}/>
            <CategoryItemDetailInfo response={response}/>
            {/* 이미지는 테이블참조해서 추가로 가져오고 */}
            <CategoryItemDetailInquiry response={response}/>
            {/* 여기 인쿼리는 또 따로가져와야지 */}
            <CategoryItemDetailReturn/>
        
        </div>
    );
};

export default CategoryItemDetail;