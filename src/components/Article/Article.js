import React from 'react';
import './Article.scss'

const Article = () => {
    return (
        <div className='wrapper'>
            <div className='articles'>
                <h3>관련기사 보러가기</h3>
                <ul>
                    <li><a href="https://news.sbs.co.kr/news/endPage.do?news_id=N1005314676" target="_blank" rel="noopener noreferrer">① '16살 여중생'과 채팅한 1천 명 분석</a></li>
                    <li><a href="https://news.sbs.co.kr/news/endPage.do?news_id=N1005314678" target="_blank" rel="noopener noreferrer">② 청소년 성을 사는 그들은 누구인가?</a></li>
                    <li><a href="https://news.sbs.co.kr/news/endPage.do?news_id=N1005319589" target="_blank" rel="noopener noreferrer">③ 모두가 아는데도 방치되는 채팅앱</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Article;



