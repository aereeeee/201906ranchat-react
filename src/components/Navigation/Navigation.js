import React from 'react';
import './Navigation.scss'
import sbslogo from '../../assets/img/logo.png'
import mabulogo from '../../assets/img/mabulogo.png'

const Navigation = () => {
    return (
        <>
            <header id={'headerbar'}>
                <a href="http://news.sbs.co.kr/"><img src={sbslogo} alt="" className={'sbslogo'}/></a>
                <a href="http://news.sbs.co.kr/news/newsPlusList.do?themeId=10000000114"><img src={mabulogo} alt="" className={'mabulogo'}/> </a>
                <img src="http://img.sbs.co.kr/newimg/news/20170406/201037558.png" alt="" className={'social'} id='twitter'/>
                <img src="http://img.sbs.co.kr/newimg/news/20170406/201037559.png" alt="" className={'social'} id='facebook'/>
            </header>
        </>
    );
};

export default Navigation;