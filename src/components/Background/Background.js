import React from 'react';
import './Background.scss';
import image1 from '../../assets/img/img1.jpg'
import image2 from '../../assets/img/img2.jpg'
import image3 from '../../assets/img/img3.jpg'

const Background = () => {
    return (
        <div className='background'>
            <img src={image1} data='box0' alt="" className="backimg"/>
            <img data-src={image1} data='box1' alt="" className="backimg"/>
            <img data-src={image2} data='box2' alt="" className="backimg"/>
            <img data-src={image3} data='box3' alt="" className="backimg"/>
        </div>
    );
};

export default Background;