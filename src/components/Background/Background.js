import React from 'react';
import './Background.scss';
import image1 from '../../assets/img/img1.jpg'
import image2 from '../../assets/img/img2.jpg'
import image3 from '../../assets/img/img3.jpg'

const Background = () => {
    return (
        <div className='background'>
            <img src={image1} data='box0' alt="" className="backimg"/>
            <img src={image2} data='box1' alt="" className="backimg"/>
            <img src={image3} data='box2' alt="" className="backimg"/>
            <img src={image1} data='box3' alt="" className="backimg"/>
            <img src={image2} data='box4' alt="" className="backimg"/>
            <img src={image3} data='box5' alt="" className="backimg"/>
            <img src={image1} data='box6' alt="" className="backimg"/>
            <img src={image2} data='box7' alt="" className="backimg"/>
        </div>
    );
};

export default Background;