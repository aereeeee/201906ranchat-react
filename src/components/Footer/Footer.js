import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <a href="http://news.sbs.co.kr/news/newsPlusList.do?themeId=10000000114">
             <p className='team'>SBS 데이터저널리즘팀 마부작침</p>
            </a>
            <p className='credit'>
            심영구 기자 (so5what@sbs.co.kr)<br/>
            김학휘 기자 (hwi@sbs.co.kr)<br/>
            안혜민 기자·분석가 (hyeminan@sbs.co.kr)<br/>
            조애리 개발자·디자이너 (dofl5576@gmail.com)<br/>
            인턴: 박지영 
            </p>
        </div>
    );
};

export default Footer;